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
    <section className="relative z-10 w-full py-20 md:py-24 px-4 sm:px-8 lg:px-12 xl:px-24 bg-[#001d3d] text-[#f7f6f2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-[#c9a98a]">Patient Experiences</span>
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium">Words of Trust</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 max-w-2xl lg:max-w-none mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col border border-white/10 bg-white/[0.03] p-8 md:p-10 rounded-2xl hover:bg-white/[0.07] transition-colors duration-500">
              <div className="font-cormorant text-6xl leading-none text-[#c9a98a] mb-4">"</div>
              <p className="text-sm md:text-base font-light leading-relaxed mb-8 flex-grow text-white/80">
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
