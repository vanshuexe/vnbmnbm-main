import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Surgical from './pages/Surgical';
import NonSurgical from './pages/NonSurgical';
import Contact from './pages/Contact';

import TheFeature from './pages/TheFeature';
import Book from './pages/Book';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surgical" element={<Surgical />} />
        <Route path="/non-surgical" element={<NonSurgical />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/the-feature" element={<TheFeature />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
