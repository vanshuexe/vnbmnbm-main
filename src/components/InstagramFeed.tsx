import { Play } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="w-full bg-[#f8f7f5]">
      {/* Top Gray Section */}
      <div className="py-16 md:py-20 text-center">
        <h2 className="text-4xl md:text-[42px] font-light text-[#1a1a1a] mb-4 tracking-wide">Stay Centered</h2>
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
          
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-4 mb-4 sm:mb-0">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                  <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white">
                    <img 
                      src="https://ik.imagekit.io/fdhgiehjz/66-removebg-preview.png?updatedAt=1789395327695" 
                      alt="Dr. Shruthilaya Ganesan"
                      className="w-full h-full object-cover object-top scale-125"
                    />
                  </div>
                </div>
              </div>
              
              {/* User Info */}
              <div className="flex flex-col text-left">
                <h3 className="font-bold text-[#1a1a1a] text-sm md:text-base">drshruthilayaganesan</h3>
                <div className="flex gap-3 text-xs md:text-sm text-gray-500 mt-0.5">
                  <span><strong className="text-gray-800 font-semibold">142</strong> posts</span>
                  <span><strong className="text-gray-800 font-semibold">12.4K</strong> followers</span>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <a 
              href="https://www.instagram.com/drshruthilayaganesan" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-[#0095f6] hover:bg-[#1877f2] text-white px-5 py-1.5 md:py-2 rounded md:rounded-md font-semibold text-xs md:text-sm transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Follow
            </a>
          </div>

          {/* Posts Grid (Edge-to-Edge look with thin gaps) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {/* Post 1 (Video) */}
            <a href="https://www.instagram.com/drshruthilayaganesan" target="_blank" rel="noreferrer" className="relative aspect-square group overflow-hidden bg-gray-100">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/125.jpeg" 
                alt="Instagram Post 1" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 drop-shadow-md">
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-white text-white opacity-90" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </a>

            {/* Post 2 */}
            <a href="https://www.instagram.com/drshruthilayaganesan" target="_blank" rel="noreferrer" className="relative aspect-square group overflow-hidden bg-gray-100">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/126.jpeg" 
                alt="Instagram Post 2" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </a>

            {/* Post 3 (Video) */}
            <a href="https://www.instagram.com/drshruthilayaganesan" target="_blank" rel="noreferrer" className="relative aspect-square group overflow-hidden bg-gray-100">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/127.jpeg" 
                alt="Instagram Post 3" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 drop-shadow-md">
                <Play className="w-5 h-5 md:w-6 md:h-6 fill-white text-white opacity-90" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </a>

            {/* Post 4 */}
            <a href="https://www.instagram.com/drshruthilayaganesan" target="_blank" rel="noreferrer" className="relative aspect-square group overflow-hidden bg-gray-100">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/1276.jpeg" 
                alt="Instagram Post 4" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
