import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ProcedureCarousel from '../components/ProcedureCarousel';
import ProcedureList from '../components/ProcedureList';
import procedures from '../data/nonsurgicalProcedures.json';

const categories = ['Botox', 'Dermal Fillers', 'Hair', 'Skin Refinement', 'Thread Lift', 'Double Chin Reduction', 'Wellness', 'Miscellaneous'];

export default function NonSurgical() {
  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      {/* Header - same navy/charcoal palette as the home hero */}
      <div className="relative w-full text-white bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(110,80,56,0.25),transparent_60%)] pointer-events-none"></div>

        <div className="relative">
          <Navbar />
        </div>

        {/* Page Header */}
        <div className="relative w-full pt-16 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">
            <div className="flex items-center justify-start mb-5">
              <div className="hidden md:block h-px w-10 bg-[#c9a98a] mr-4"></div>
              <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold uppercase text-[#c9a98a]">Treatments</p>
            </div>
            <h1 className="font-cormorant text-5xl md:text-7xl font-medium leading-[1.05] tracking-[-0.01em] mb-6">
              Non-Surgical Procedures
            </h1>
            <p className="text-white/70 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              Enhance your natural beauty with our advanced, minimally invasive treatments designed for maximum results and minimal downtime.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-grow w-full bg-white">
        <ProcedureCarousel procedures={procedures} categories={categories} />
        <ProcedureList procedures={procedures} />
      </main>

      <CTA />
      <Footer white />
    </div>
  );
}
