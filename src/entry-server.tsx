// Build-time entry used by scripts/prerender.mjs to render each route to static HTML.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App';

export { ROUTES, headHtml, sitemapXml, llmsTxt, LEGACY_REDIRECTS, SITE_URL } from './seo';

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
