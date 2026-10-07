import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      <div className="relative w-full text-white bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d]">
        <Navbar />
        <div className="w-full pt-16 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-24">
          <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold uppercase text-[#c9a98a] mb-5">Error 404</p>
          <h1 className="font-cormorant text-5xl md:text-7xl font-medium leading-[1.05] mb-6">Page Not Found</h1>
          <p className="text-white/70 text-base md:text-lg font-light max-w-xl leading-relaxed mb-10">
            The page you are looking for may have moved or no longer exists.
          </p>
          <Link to="/" className="inline-block border border-white rounded-[2rem] px-10 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-[#001d3d] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
      <main className="flex-grow" />
      <Footer white />
    </div>
  );
}
