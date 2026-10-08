// SEO for every route: titles, descriptions, social cards, structured data (JSON-LD)
// and the XML sitemap. Used at build time by the prerender script (scripts/prerender.mjs)
// and in the browser by <SeoManager /> so client-side navigation keeps the head in sync.
import surgicalProcedures from './data/surgicalProcedures.json';
import nonSurgicalProcedures from './data/nonsurgicalProcedures.json';
import { faqs } from './data/faqs';

export const SITE_URL = 'https://drshruthilayaganesan.com';
const DOCTOR = 'Dr. Shruthilaya Ganesan';
const SOCIAL_IMAGE = `${SITE_URL}/images/dr-shruthilaya-ganesan.jpg`;
const PHONE = '+91-94446-15554';
const EMAIL = 'dr.shruthilayaganesan@gmail.com';
const SAME_AS = [
  'https://www.instagram.com/drshruthilayaganesan',
  'https://www.linkedin.com/in/dr-shruthilaya-ganesan-23626821b',
];

const ALL_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MON_SAT = ALL_WEEK.slice(0, 6);

export const CLINICS = [
  {
    id: 'clinic-skin-lab',
    name: 'Skin Lab Studio (SkinLab by Dr. Jamuna Pai)',
    streetAddress: 'No. 166, Parijath, Sathyadev Enclave, Race Course',
    postalCode: '641018',
    latitude: 11.0042565,
    longitude: 76.9750023,
    hasMap: 'https://share.google/X54rfKMZyTi7j0lSV',
    hours: [{ days: ALL_WEEK, opens: '10:00', closes: '19:30' }],
  },
  {
    id: 'clinic-rootwise',
    name: 'Rootwise Aesthetic Clinic',
    streetAddress: '31, E TV Swamy Rd, R.S. Puram',
    postalCode: '641002',
    latitude: 11.0102364,
    longitude: 76.9518072,
    hasMap: 'https://share.google/4zPrH7dKJrDc9syyg',
    hours: [
      { days: MON_SAT, opens: '09:30', closes: '10:30' },
      { days: MON_SAT, opens: '19:30', closes: '20:30' },
    ],
  },
];

type PageSeo = {
  path: string;
  title: string;
  description: string;
  breadcrumb: string;
  pageType?: string;
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  images?: string[];
};

const absolute = (src: string) => (src.startsWith('http') ? src : `${SITE_URL}${src}`);

export const PAGES: PageSeo[] = [
  {
    path: '/',
    title: 'Dr. Shruthilaya Ganesan | Cosmetic Surgeon in Coimbatore',
    description: 'Maxillofacial & cosmetic surgeon in Coimbatore offering rhinoplasty, facelift, blepharoplasty, Botox, dermal fillers and hair restoration. Book a consultation.',
    breadcrumb: 'Home',
    priority: 1.0,
    changefreq: 'weekly',
    images: ['/images/dr-shruthilaya-ganesan.jpg', 'https://ik.imagekit.io/fdhgiehjz/IMG_1116.JPG.jpeg', '/images/surgical-profile.jpg', '/images/non-surgical-profile.jpg'],
  },
  {
    path: '/surgical',
    title: 'Cosmetic Surgery in Coimbatore | Dr. Shruthilaya Ganesan',
    description: 'Rhinoplasty, face lift, blepharoplasty, chin implants, buccal fat reduction, fat augmentation and hair transplant by a maxillofacial surgeon in Coimbatore.',
    breadcrumb: 'Surgical Procedures',
    pageType: 'CollectionPage',
    priority: 0.9,
    changefreq: 'monthly',
    images: surgicalProcedures.map((p) => p.image),
  },
  {
    path: '/non-surgical',
    title: 'Botox & Fillers in Coimbatore | Dr. Shruthilaya Ganesan',
    description: 'Non-surgical facial aesthetics in Coimbatore: Botox, lip, chin and under-eye fillers, thread lift, skin boosters, GFC hair therapy and IV infusions.',
    breadcrumb: 'Non-Surgical Treatments',
    pageType: 'CollectionPage',
    priority: 0.9,
    changefreq: 'monthly',
    images: nonSurgicalProcedures.map((p) => p.image),
  },
  {
    path: '/the-feature',
    title: 'Featured Cases & Results | Dr. Shruthilaya Ganesan',
    description: 'Treatment highlights: filler complication care, chin and jawline definition, buccal fat reduction, under-eye volume, natural lip fillers and lower face harmony.',
    breadcrumb: 'The Feature',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/faq',
    title: 'Cosmetic Surgery & Aesthetics FAQs | Dr. Shruthilaya Ganesan',
    description: 'Answers about consultations, recovery, deep plane face lifts, scarring, hair transplants, Botox, dermal fillers and skin boosters in Coimbatore.',
    breadcrumb: 'FAQ',
    pageType: 'FAQPage',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Contact & Clinics in Coimbatore | Dr. Shruthilaya Ganesan',
    description: 'Visit Dr. Shruthilaya Ganesan at Skin Lab Studio, Race Course, or Rootwise Aesthetic Clinic, R.S. Puram, Coimbatore. Call +91 94446 15554 to book.',
    breadcrumb: 'Contact',
    pageType: 'ContactPage',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/book',
    title: 'Book a Consultation in Coimbatore | Dr. Shruthilaya Ganesan',
    description: 'Request a private consultation with maxillofacial and cosmetic surgeon Dr. Shruthilaya Ganesan in Coimbatore for surgical and non-surgical facial aesthetics.',
    breadcrumb: 'Book a Consultation',
    priority: 0.8,
    changefreq: 'yearly',
  },
  {
    path: '/sitemap',
    title: 'Sitemap | Dr. Shruthilaya Ganesan',
    description: 'All pages on the website of Dr. Shruthilaya Ganesan, maxillofacial and cosmetic surgeon in Coimbatore.',
    breadcrumb: 'Sitemap',
    priority: 0.3,
    changefreq: 'yearly',
  },
];

export const ROUTES = PAGES.map((p) => p.path);

// Addresses from the previous website on this domain that Google still lists.
// They redirect to the matching new page instead of showing "Page Not Found".
export const LEGACY_REDIRECTS: Record<string, string> = {
  '/about-us': '/#doctor-profile',
  '/about': '/#doctor-profile',
  '/non-surgical-2': '/non-surgical/',
  '/surgical-2': '/surgical/',
  '/contact-us': '/contact/',
  '/home': '/',
};

const NOT_FOUND = {
  title: `Page Not Found | ${DOCTOR}`,
  description: 'The page you are looking for could not be found.',
};

const pageFor = (pathname: string) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return PAGES.find((p) => p.path === clean);
};

// Trailing slash matches how the host serves prerendered pages (/surgical -> /surgical/).
const urlFor = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`);

// ---------- Structured data ----------

const clinicNode = (c: (typeof CLINICS)[number]) => ({
  '@type': 'MedicalClinic',
  '@id': `${SITE_URL}/#${c.id}`,
  name: c.name,
  url: `${SITE_URL}/contact/`,
  telephone: PHONE,
  medicalSpecialty: 'PlasticSurgery',
  address: {
    '@type': 'PostalAddress',
    streetAddress: c.streetAddress,
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: c.postalCode,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: c.latitude, longitude: c.longitude },
  hasMap: c.hasMap,
  openingHoursSpecification: c.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
    opens: h.opens,
    closes: h.closes,
  })),
});

const procedureNames = [...surgicalProcedures, ...nonSurgicalProcedures].map((p) => p.title);

const siteGraph = () => [
  {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: DOCTOR,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_URL}/#physician` },
  },
  {
    '@type': 'Physician',
    '@id': `${SITE_URL}/#physician`,
    name: DOCTOR,
    url: `${SITE_URL}/`,
    image: SOCIAL_IMAGE,
    logo: `${SITE_URL}/icon-512x512.png`,
    description: 'Maxillofacial surgeon specialised in facial aesthetics and cosmetic surgery in Coimbatore, Tamil Nadu.',
    medicalSpecialty: 'PlasticSurgery',
    telephone: PHONE,
    email: EMAIL,
    areaServed: { '@type': 'City', name: 'Coimbatore' },
    address: CLINICS.map((c) => clinicNode(c).address),
    location: CLINICS.map((c) => ({ '@id': `${SITE_URL}/#${c.id}` })),
    availableService: procedureNames.map((name) => ({ '@type': 'MedicalProcedure', name })),
    employee: { '@id': `${SITE_URL}/#doctor` },
    sameAs: SAME_AS,
  },
  {
    '@type': 'Person',
    '@id': `${SITE_URL}/#doctor`,
    name: DOCTOR,
    honorificPrefix: 'Dr.',
    jobTitle: 'Maxillofacial & Cosmetic Surgeon',
    image: SOCIAL_IMAGE,
    url: `${SITE_URL}/`,
    worksFor: { '@id': `${SITE_URL}/#physician` },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'MAHER University, Chennai' },
      { '@type': 'CollegeOrUniversity', name: 'DY Patil University, Mumbai' },
    ],
    memberOf: [
      { '@type': 'Organization', name: 'American Academy of Cosmetic Surgery (AACS)' },
      { '@type': 'Organization', name: 'Society of Hair Transplant Surgeons (SHTS)' },
      { '@type': 'Organization', name: 'Association of Oral and Maxillofacial Surgeons of India (AOMSI)' },
    ],
    knowsAbout: ['Maxillofacial surgery', 'Cosmetic surgery', 'Facial aesthetics', 'Rhinoplasty', 'Face lift', 'Dermal fillers', 'Botox', 'Hair transplant'],
    sameAs: SAME_AS,
  },
  ...CLINICS.map(clinicNode),
];

const procedureList = (url: string, procedures: { id: string; title: string; description?: string }[], surgical: boolean) => ({
  '@type': 'ItemList',
  '@id': `${url}#procedures`,
  itemListElement: procedures.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': surgical ? 'SurgicalProcedure' : 'MedicalProcedure',
      name: p.title,
      description: p.description,
      url: `${url}#${p.id}`,
    },
  })),
});

export function jsonLdFor(pathname: string) {
  const page = pageFor(pathname);
  if (!page) return null;
  const url = urlFor(page.path);

  const webPage: Record<string, unknown> = {
    '@type': page.pageType ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#physician` },
    primaryImageOfPage: page.images?.[0] ? absolute(page.images[0]) : SOCIAL_IMAGE,
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };

  const graph: Record<string, unknown>[] = [...siteGraph(), webPage];

  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      ...(page.path === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: page.breadcrumb, item: url }]),
    ],
  });

  if (page.path === '/faq') {
    webPage.mainEntity = faqs.flatMap((section) =>
      section.questions.map((q) => ({
        '@type': 'Question',
        name: q.q,
        acceptedAnswer: { '@type': 'Answer', text: q.a },
      })),
    );
  }
  if (page.path === '/surgical') {
    graph.push(procedureList(url, surgicalProcedures, true));
    webPage.mainEntity = { '@id': `${url}#procedures` };
  }
  if (page.path === '/non-surgical') {
    graph.push(procedureList(url, nonSurgicalProcedures, false));
    webPage.mainEntity = { '@id': `${url}#procedures` };
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------- Head tags ----------

export type HeadTag =
  | { tag: 'meta'; attrs: Record<string, string> }
  | { tag: 'link'; attrs: Record<string, string> }
  | { tag: 'script'; attrs: Record<string, string>; content: string };

export function seoFor(pathname: string) {
  const page = pageFor(pathname);
  const title = page?.title ?? NOT_FOUND.title;
  const description = page?.description ?? NOT_FOUND.description;
  const url = page ? urlFor(page.path) : undefined;
  const robots = page ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, follow';

  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: description } },
    { tag: 'meta', attrs: { name: 'robots', content: robots } },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: DOCTOR } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_IN' } },
    { tag: 'meta', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', attrs: { property: 'og:description', content: description } },
    { tag: 'meta', attrs: { property: 'og:image', content: SOCIAL_IMAGE } },
    { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:height', content: '1200' } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: `${DOCTOR}, maxillofacial and cosmetic surgeon in Coimbatore` } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: SOCIAL_IMAGE } },
  ];
  if (url) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
  }
  const jsonLd = jsonLdFor(pathname);
  if (jsonLd) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, content: JSON.stringify(jsonLd) });
  }

  return { title, tags };
}

const escapeAttr = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Head markup for the prerendered HTML. Every tag carries data-seo so the client can replace them on navigation. */
export function headHtml(pathname: string) {
  const { title, tags } = seoFor(pathname);
  const rendered = tags.map((t) => {
    const attrs = Object.entries({ ...t.attrs, 'data-seo': '' })
      .map(([k, v]) => (v === '' ? k : `${k}="${escapeAttr(v)}"`))
      .join(' ');
    if (t.tag === 'script') return `<script ${attrs}>${t.content.replace(/</g, '\\u003c')}</script>`;
    return `<${t.tag} ${attrs} />`;
  });
  return { title: `<title>${escapeText(title)}</title>`, tags: rendered.join('\n    ') };
}

// ---------- llms.txt (summary for AI search / answer engines) ----------

const hoursText = (c: (typeof CLINICS)[number]) =>
  c.hours
    .map((h) => `${h.days.length === 7 ? 'Mon–Sun' : 'Mon–Sat'} ${h.opens}–${h.closes}`)
    .join(', ');

export function llmsTxt() {
  const group = (procedures: { title: string; category: string; subtitle?: string }[]) => {
    const byCategory = new Map<string, string[]>();
    for (const p of procedures) {
      const list = byCategory.get(p.category) ?? [];
      list.push(p.subtitle ? `${p.title} (${p.subtitle})` : p.title);
      byCategory.set(p.category, list);
    }
    return [...byCategory].map(([cat, items]) => `- ${cat}: ${items.join('; ')}`).join('\n');
  };

  return `# ${DOCTOR} — Maxillofacial & Cosmetic Surgeon, Coimbatore

> ${DOCTOR} is a maxillofacial surgeon specialised in facial aesthetics and cosmetic surgery, practising in Coimbatore, Tamil Nadu, India. She completed an advanced post-doctoral fellowship in Cosmetic Surgery at DY Patil University under the mentorship of Dr. Mohan Thomas, and offers surgical and non-surgical facial aesthetic treatments.

## Qualifications & memberships
- Maxillofacial Surgery — MAHER University, Chennai
- Advanced Institutional Fellowship in Cosmetic Surgery (AFCS) — DY Patil University, Mumbai
- Member, American Academy of Cosmetic Surgery (AACS)
- Member, Society of Hair Transplant Surgeons (SHTS)
- Member, Association of Oral and Maxillofacial Surgeons of India (AOMSI)

## Clinics in Coimbatore
${CLINICS.map((c) => `- ${c.name}: ${c.streetAddress}, Coimbatore, Tamil Nadu ${c.postalCode}. Consultation hours: ${hoursText(c)}. Directions: ${c.hasMap}`).join('\n')}

## Contact
- Phone / WhatsApp: +91 94446 15554
- Email: ${EMAIL}
- Book a consultation: ${SITE_URL}/book/

## Surgical procedures (${SITE_URL}/surgical/)
${group(surgicalProcedures)}

## Non-surgical treatments (${SITE_URL}/non-surgical/)
${group(nonSurgicalProcedures)}

## Pages
${PAGES.map((p) => `- [${p.breadcrumb}](${urlFor(p.path)}): ${p.description}`).join('\n')}
`;
}

// ---------- Sitemap ----------

export function sitemapXml(lastmod: string) {
  const urls = PAGES.map((p) => {
    const images = (p.images ?? [])
      .filter((src, i, all) => all.indexOf(src) === i)
      .map((src) => `\n    <image:image><image:loc>${escapeText(absolute(src))}</image:loc></image:image>`)
      .join('');
    return `  <url>
    <loc>${urlFor(p.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>${images}
  </url>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}
