const fs = require('fs');
function extractSections(filePath, type) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const sections = [];
  const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/g;
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    const sectionHtml = match[1];
    const imgMatch = sectionHtml.match(/src="([^"]+)"/);
    const image = imgMatch ? imgMatch[1] : '';
    const catMatch = sectionHtml.match(/<p className="text-\[#6e5038\][^"]*">([^<]+)<\/p>/);
    let category = catMatch ? catMatch[1] : 'Misc';
    
    if (type === 'Surgical') {
      if (category.toLowerCase().includes('face') || category.toLowerCase().includes('facial') || category.toLowerCase().includes('harmony')) category = 'Face';
      else if (category.toLowerCase().includes('eye')) category = 'Eyes';
      else if (category.toLowerCase().includes('ear')) category = 'Ears';
      else if (category.toLowerCase().includes('nose') || sectionHtml.toLowerCase().includes('rhinoplasty')) category = 'Nose';
      else if (category.toLowerCase().includes('neck') || sectionHtml.toLowerCase().includes('neck liposuction')) category = 'Neck';
      else category = 'Hair & Misc';
    } else {
      if (category.toLowerCase().includes('botox')) category = 'Botox';
      else if (category.toLowerCase().includes('skin booster') || category.toLowerCase().includes('biostimulator')) category = 'Skin Boosters';
      else if (category.toLowerCase().includes('dermal filler')) category = 'Dermal Fillers';
      else category = 'Skin Refinement';
    }
    if (sectionHtml.includes('Neck Liposuction')) category = 'Neck';
    
    const titleMatch = sectionHtml.match(/<h2[^>]*>([\s\S]*?)<br\/>/);
    let title = titleMatch ? titleMatch[1].trim() : '';
    const subtitleMatch = sectionHtml.match(/<span[^>]*>\(([^)]+)\)<\/span>/);
    let subtitle = subtitleMatch ? subtitleMatch[1].trim() : '';
    const descMatch = sectionHtml.match(/<p className="text-gray-700[^"]*">([\s\S]*?)<\/p>/);
    const description = descMatch ? descMatch[1].trim() : '';
    
    const bullets = [];
    const bulletRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
    let bMatch;
    while ((bMatch = bulletRegex.exec(sectionHtml)) !== null) {
      const liContent = bMatch[1];
      const strongMatch = liContent.match(/<strong[^>]*>([\s\S]*?)<\/strong>(?:[:\s]*)([\s\S]*?)(?=<\/p>)/);
      if (strongMatch) {
        bullets.push({ title: strongMatch[1].trim(), text: strongMatch[2].trim() });
      } else {
         const titleOnly = liContent.match(/<strong[^>]*>([\s\S]*?)<\/strong>/);
         if(titleOnly) {
           bullets.push({ title: titleOnly[1].trim(), text: '' });
         }
      }
    }
    sections.push({ id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''), category, title, subtitle, image, description, bullets });
  }
  return sections;
}
const s = extractSections('src/pages/Surgical.tsx', 'Surgical');
const ns = extractSections('src/pages/NonSurgical.tsx', 'NonSurgical');
fs.writeFileSync('src/data/surgicalProcedures.json', JSON.stringify(s, null, 2));
fs.writeFileSync('src/data/nonsurgicalProcedures.json', JSON.stringify(ns, null, 2));
