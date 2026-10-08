import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Surgical from './pages/Surgical';
import NonSurgical from './pages/NonSurgical';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Sitemap from './pages/Sitemap';

import TheFeature from './pages/TheFeature';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import { LEGACY_REDIRECTS } from './seo';

// Shared by the browser entry (BrowserRouter) and the prerender entry (StaticRouter).
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surgical" element={<Surgical />} />
        <Route path="/non-surgical" element={<NonSurgical />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="/the-feature" element={<TheFeature />} />
        <Route path="/book" element={<Book />} />
        {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
