// Renders every route to static HTML after `vite build`, so search engines and social
// previews get real content plus page-specific <title>, meta tags and JSON-LD.
// Also writes dist/sitemap.xml, dist/llms.txt and dist/404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, ROUTES, headHtml, sitemapXml, llmsTxt } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

if (!template.includes('<!--seo-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--seo-head--> placeholder or the empty #root element');
}

function pageHtml(url) {
  const head = headHtml(url);
  return template
    .replace(/<title>[^<]*<\/title>/, head.title)
    .replace('<!--seo-head-->', head.tags)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
}

function write(file, contents) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, contents);
}

for (const url of ROUTES) {
  const html = pageHtml(url);
  if (url === '/') {
    write(path.join(dist, 'index.html'), html);
  } else {
    const name = url.slice(1);
    // Both forms so it works with Vercel cleanUrls (/surgical -> surgical.html) and plain static servers (/surgical/ -> index.html).
    write(path.join(dist, `${name}.html`), html);
    write(path.join(dist, name, 'index.html'), html);
  }
  console.log(`prerendered ${url}`);
}

write(path.join(dist, '404.html'), pageHtml('/404'));
console.log('prerendered 404.html');

write(path.join(dist, 'sitemap.xml'), sitemapXml(new Date().toISOString().slice(0, 10)));
console.log('wrote sitemap.xml');

write(path.join(dist, 'llms.txt'), llmsTxt());
console.log('wrote llms.txt');

fs.rmSync(ssrDir, { recursive: true, force: true });
