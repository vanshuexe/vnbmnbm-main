import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ProcedureCarousel from '../components/ProcedureCarousel';
import ProcedureList from '../components/ProcedureList';
import procedures from '../data/nonsurgicalProcedures.json';

const categories = ['Botox', 'Dermal Fillers', 'Skin Boosters', 'Skin Refinement', 'Wellness'];

export default function NonSurgical() {
  return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden flex flex-col">
      <div className="bg-[#25211e] w-full">
        <Navbar />
      </div>

      {/* Page Header */}
      <div className="relative w-full pt-16 pb-20 px-6 md:px-12 lg:px-24 bg-[#25211e] text-white">
        <div className="max-w-4xl">
          <div className="flex items-center justify-start mb-4">
            <div className="hidden md:block h-[1px] w-[40px] bg-white mr-4"></div>
            <p className="text-sm tracking-widest font-light uppercase">Treatments</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Non-Surgical Procedures
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Enhance your natural beauty with our advanced, minimally invasive treatments designed for maximum results and minimal downtime.
          </p>
        </div>
      </div>

      <main className="flex-grow w-full bg-[#fcfbf9]">
        <ProcedureCarousel procedures={procedures} categories={categories} />
        <ProcedureList procedures={procedures} />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
