const fs = require('fs');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find all sections
  const sectionRegex = /<section\s+className=\"py-24[^\"]*\">/g;
  
  content = content.replace(sectionRegex, (match, offset, str) => {
    // Extract title from the following HTML
    const innerHtml = str.slice(offset, offset + 1500); // 1500 chars should cover the h2
    const titleMatch = innerHtml.match(/<h2[^>]*>([\s\S]*?)<br\/>/);
    let title = titleMatch ? titleMatch[1].trim() : 'Unknown';
    let id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Check if section already has an id
    if (!match.includes('id=\"')) {
      return match.replace('<section className=\"', `<section id=\"${id}\" className=\"`);
    }
    return match;
  });
  
  fs.writeFileSync(filePath, content);
  console.log('Processed', filePath);
}

processFile('src/pages/Surgical.tsx');
processFile('src/pages/NonSurgical.tsx');
