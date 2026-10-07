import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#25211e] via-[#0d1b2d] to-[#001d3d] text-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-[#c9a98a]">Take the Next Step</span>
        <h2 className="font-cormorant text-4xl md:text-6xl font-medium mb-6 leading-tight">
          Begin Your Transformation
        </h2>
        <p className="text-gray-300 text-sm md:text-base font-light mb-10 max-w-xl leading-relaxed">
          Schedule a private consultation with Dr. Shruthilaya Ganesan to discuss your aesthetic goals and discover a personalized treatment plan tailored to your unique facial structure.
        </p>
        <Link 
          to="/contact/"
          className="border border-white rounded-[2rem] px-10 py-4 text-[11px] md:text-xs font-semibold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 uppercase"
        >
          Book a Consultation
        </Link>
      </motion.div>
    </section>
  );
}
