import { Link } from 'react-router-dom';
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
  description?: string;
  bullets?: { title: string; text: string }[];
}

interface ProcedureListProps {
  procedures: Procedure[];
}

export default function ProcedureList({ procedures }: ProcedureListProps) {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-10 px-4 sm:px-8 lg:px-12 xl:px-24 pb-16 md:pb-24 bg-white">
      {procedures.map((proc, index) => {
        // Alternate image side for visual variety
        const isEven = index % 2 === 0;
        const flexDirection = isEven ? 'lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse';

        return (
          <section
            key={proc.id}
            id={proc.id}
            className={`scroll-mt-8 max-w-7xl w-full mx-auto flex flex-col ${flexDirection} rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] shadow-xl ring-1 ring-black/10 text-white`}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 p-7 sm:p-10 md:p-14 xl:p-16 flex flex-col justify-center"
            >
              {proc.category !== proc.title && (
                <p className="text-[#c9a98a] tracking-[0.2em] text-[10px] md:text-xs font-semibold uppercase mb-5">{proc.category}</p>
              )}
              <h2 className="font-cormorant text-4xl md:text-5xl font-medium leading-tight mb-6">
                {proc.title}
                {proc.subtitle && (
                  <span className="block mt-2 font-cormorant italic font-normal text-2xl md:text-3xl text-white/60">{proc.subtitle}</span>
                )}
              </h2>
              <div className="h-px w-12 bg-[#c9a98a] mb-8"></div>

              {proc.description && (
                <p className="text-white/75 font-light leading-relaxed mb-8 text-[15px] md:text-base">{proc.description}</p>
              )}

              {proc.bullets && proc.bullets.length > 0 && (
                <ul className="space-y-5 mb-10 border-t border-white/10 pt-6">
                  {proc.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a98a] mr-4 mt-2.5 flex-shrink-0"></div>
                      <p className="text-white/70 text-sm md:text-[15px] font-light leading-relaxed">
                        {bullet.title && <strong className="font-medium text-white mr-2">{bullet.title}</strong>}
                        {bullet.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              <Link to="/book/" className="inline-block border border-white/80 rounded-[2rem] text-white hover:bg-white hover:text-[#001d3d] transition-colors duration-300 px-10 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-center w-max">
                Book Consultation
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6 lg:p-8"
            >
              <div className="relative w-full rounded-2xl overflow-hidden">
                <img
                  src={proc.image}
                  alt={proc.title}
                  width={proc.imageWidth}
                  height={proc.imageHeight}
                  className="block w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
                {proc.imageCaption && <span className="absolute bottom-4 left-4 rounded bg-white/90 px-3 py-1 text-xs text-gray-700">{proc.imageCaption}</span>}
              </div>
            </motion.div>
          </section>
        );
      })}
    </div>
  );
}
