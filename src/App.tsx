import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Surgical from './pages/Surgical';
import NonSurgical from './pages/NonSurgical';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Sitemap from './pages/Sitemap';

import TheFeature from './pages/TheFeature';
import Book from './pages/Book';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surgical" element={<Surgical />} />
        <Route path="/non-surgical" element={<NonSurgical />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="/the-feature" element={<TheFeature />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
