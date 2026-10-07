import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoFor } from '../seo';

// Keeps <title>, meta tags, canonical and JSON-LD in sync with the current route.
// The prerendered HTML already contains the same tags (marked with data-seo), so on
// the first load this simply replaces them with identical ones.
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, tags } = seoFor(pathname);
    document.title = title;
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    for (const t of tags) {
      const el = document.createElement(t.tag);
      for (const [key, value] of Object.entries(t.attrs)) el.setAttribute(key, value);
      el.setAttribute('data-seo', '');
      if (t.tag === 'script') el.textContent = t.content;
      document.head.appendChild(el);
    }
  }, [pathname]);

  return null;
}
