import { Play } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="w-full bg-[#f8f7f5]">
      {/* Top Gray Section */}
      <div className="py-16 md:py-20 text-center px-4">
        <h2 className="text-3xl md:text-[42px] font-light text-[#1a1a1a] mb-4 tracking-wide">Dr. Shruthilaya Ganesan Instagram Posts</h2>
        <a 
          href="https://www.instagram.com/drshruthilayaganesan" 
          target="_blank" 
          rel="noreferrer"
          className="text-xs md:text-sm font-medium text-gray-700 hover:text-black transition-colors"
        >
          @drshruthilayaganesan
        </a>
      </div>

      {/* Bottom White Section */}
      <div className="bg-white w-full pb-16 md:pb-24 pt-6 md:pt-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          {/* Instagram Posts Screenshot */}
          <div className="max-w-4xl mx-auto rounded-md overflow-hidden shadow-sm">
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
