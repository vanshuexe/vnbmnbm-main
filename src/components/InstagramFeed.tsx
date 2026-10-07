import { Play } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="w-full bg-white">
      {/* Top Gray Section */}
      <div className="py-16 md:py-20 text-center px-4">
        <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-[#001d3d] mb-4">Dr. Shruthilaya Ganesan Instagram Posts</h2>
        <a 
          href="https://www.instagram.com/drshruthilayaganesan" 
          target="_blank" 
          rel="noreferrer"
          className="text-xs md:text-sm font-medium tracking-wide text-[#8a6d52] hover:text-[#001d3d] transition-colors"
        >
          @drshruthilayaganesan
        </a>
      </div>

      {/* Bottom White Section */}
      <div className="w-full pb-16 md:pb-24 pt-2 md:pt-4">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Instagram Posts Screenshot */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <a href="https://www.instagram.com/drshruthilayaganesan" target="_blank" rel="noreferrer" className="block relative group cursor-pointer">
              <img 
                src="/Screenshot 2026-09-21 185113.png" 
                alt="Dr. Shruthilaya Ganesan Instagram Posts" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
