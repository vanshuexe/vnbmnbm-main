export default function Testimonials() {
  const testimonials = [
    {
      quote: "The level of care and precision is unmatched. My results are completely natural, exactly what I hoped for.",
      name: "Sneha Menon",
      procedure: ""
    },
    {
      quote: "Dr. Shruthilaya Ganesan took the time to understand my goals. The procedure transformed my confidence.",
      name: "Amit Kumar",
      procedure: ""
    },
    {
      quote: "A truly luxurious and private experience from consultation to recovery. Highly recommended.",
      name: "Pooja Sharma",
      procedure: ""
    }
  ];

  return (
    <section className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-24 bg-[#1a1715] text-[#f7f6f2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-gray-400">Patient Experiences</span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide">Words of Trust</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col border border-gray-800 p-8 md:p-10 rounded-2xl hover:bg-[#25211e] transition-colors duration-500">
              <div className="text-4xl text-gray-600 font-serif mb-6">"</div>
              <p className="text-sm md:text-base font-light leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>
              <div>
                <p className="font-medium text-sm tracking-wide">{t.name}</p>
                {t.procedure && <p className="text-xs text-gray-500 tracking-wide mt-1 uppercase">{t.procedure}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
