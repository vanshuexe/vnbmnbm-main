import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="w-full bg-[#ebe9e4] text-[#1a1a1a] pt-24 pb-12 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 border-b border-gray-300 pb-20">
          
          {/* Left Column: Newsletter */}
          <div className="w-full md:w-5/12 flex flex-col">

            
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/drshruthilayaganesan?igsi=bzdhMWN2YzlzZDJv&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/in/dr-shruthilaya-ganesan-23626821b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Address & Contact */}
          <div className="w-full md:w-3/12 flex flex-col mt-2 md:mt-0">
            <img 
              src="https://ik.imagekit.io/fdhgiehjz/66.png?updatedAt=1789392513970" 
              alt="Skin Lab Logo" 
              className="h-10 w-auto object-contain self-start mb-4 max-h-10" 
            />
            <h4 className="font-semibold text-xs tracking-wider mb-6 uppercase">Locations</h4>
            <div className="text-sm font-light text-gray-700 space-y-4 mb-8">
              <div>
                <p className="font-medium text-gray-900">Clinic 1: Skin Lab</p>
                <p>Coimbatore, Tamil Nadu</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Clinic 2: Rootwise Aesthetic Clinic</p>
                <p>Tamil Nadu</p>
              </div>
            </div>
            <div className="text-sm font-light text-gray-700 space-y-1">
              <p>+91 94446 15554</p>
              <p>dr.shruthilayaganesan@gmail.com</p>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="w-full md:w-2/12 flex flex-col mt-2 md:mt-0">
            <h4 className="font-semibold text-xs tracking-wider mb-6">Learn More</h4>
            <ul className="text-sm font-light text-gray-700 space-y-6">
              <li><a href="#" className="hover:text-[#1a1a1a] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#1a1a1a] transition-colors">Sitemap</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 pt-8 font-light">
          <p>© Rootwise Aesthetic Clinic 2025 All Rights Reserved</p>
          <div className="flex space-x-12 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Accessibility</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
