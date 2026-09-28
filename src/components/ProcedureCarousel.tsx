import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Procedure {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
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
        <h2 className="text-3xl md:text-4xl font-light tracking-tight">{category}</h2>
        <div className="flex space-x-2">
          <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all">
            <ChevronLeft size={20} strokeWidth={1} />
          </button>
          <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] transition-all">
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
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[280px] md:w-[320px] snap-start cursor-pointer group"
            onClick={() => scrollToProcedure(proc.id)}
          >
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <img 
                src={proc.image} 
                alt={proc.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-medium tracking-tight mb-2 group-hover:text-[#6e5038] transition-colors">{proc.title}</h3>
            <p className="text-sm text-gray-500 font-light">{proc.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ProcedureCarousel({ procedures, categories }: ProcedureCarouselProps) {
  return (
    <div className="w-full bg-[#fcfbf9] pt-8 pb-12">
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
