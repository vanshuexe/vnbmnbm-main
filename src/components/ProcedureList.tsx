import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Procedure {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  description?: string;
  bullets?: { title: string; text: string }[];
}

interface ProcedureListProps {
  procedures: Procedure[];
}

export default function ProcedureList({ procedures }: ProcedureListProps) {
  return (
    <div className="w-full flex flex-col">
      {procedures.map((proc, index) => {
        // Alternate background color and image side for visual variety
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-white' : 'bg-[#fcfbf9]';
        const flexDirection = isEven ? 'lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse';

        return (
          <section key={proc.id} id={proc.id} className={`py-24 px-6 md:px-12 lg:px-24 ${bgClass}`}>
            <div className={`max-w-7xl mx-auto flex flex-col ${flexDirection} gap-12 lg:gap-20 items-center`}>
              
              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">{proc.category}</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                  {proc.title} <br/>
                  {proc.subtitle && (
                    <span className="text-gray-500 italic text-2xl md:text-3xl">({proc.subtitle})</span>
                  )}
                </h2>
                <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
                
                {proc.description && (
                  <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">{proc.description}</p>
                )}

                {proc.bullets && proc.bullets.length > 0 && (
                  <ul className="space-y-6 mb-12">
                    {proc.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                        <p className="text-gray-800 font-light leading-relaxed">
                          {bullet.title && <strong className="font-medium text-[#1a1a1a] mr-2">{bullet.title}</strong>}
                          {bullet.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                
                <Link to="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                  Book Consultation
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm"
              >
                <img 
                  src={proc.image} 
                  alt={proc.title} 
                  className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
