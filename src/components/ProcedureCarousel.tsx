import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Procedure {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
}

interface ProcedureCarouselProps {
  procedures: Procedure[];
  categories: string[];
}

function CategoryRow({ category, procedures }: { category: string, procedures: Procedure[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToProcedure = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (procedures.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mt-12 mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-[#001d3d]">{category}</h2>
        <div className="flex space-x-2">
          <button aria-label={`Previous ${category} procedures`} onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-[#001d3d]/20 text-[#001d3d] flex items-center justify-center hover:bg-[#001d3d] hover:text-white hover:border-[#001d3d] transition-all">
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <button aria-label={`Next ${category} procedures`} onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-[#001d3d]/20 text-[#001d3d] flex items-center justify-center hover:bg-[#001d3d] hover:text-white hover:border-[#001d3d] transition-all">
            <ChevronRight size={20} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 pb-6 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {procedures.map((proc, index) => (
          <motion.div 
            key={proc.id} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[280px] md:w-[320px] snap-start cursor-pointer group rounded-2xl p-3 bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] shadow-lg ring-1 ring-black/10"
            onClick={() => scrollToProcedure(proc.id)}
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#0d1b2d]">
              <img 
                src={proc.image} 
                alt={proc.title}
                width={proc.imageWidth}
                height={proc.imageHeight}
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              {proc.imageCaption && <span className="absolute bottom-3 left-3 rounded bg-white/90 px-2 py-1 text-[10px] text-gray-700">{proc.imageCaption}</span>}
            </div>
            <div className="px-2 pt-5 pb-3">
              <h3 className="font-cormorant text-2xl font-medium leading-tight text-white mb-1.5 group-hover:text-[#c9a98a] transition-colors">{proc.title}</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/55">{proc.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ProcedureCarousel({ procedures, categories }: ProcedureCarouselProps) {
  return (
    <div className="w-full bg-white pt-8 pb-12">
      {categories.map(cat => (
        <CategoryRow 
          key={cat} 
          category={cat} 
          procedures={procedures.filter(p => p.category === cat)} 
        />
      ))}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
