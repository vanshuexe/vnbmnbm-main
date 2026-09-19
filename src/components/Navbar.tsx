import { useState } from 'react';
import { Search, User, Phone, ArrowRight, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Mobile specific states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [mobileNestedSubMenuOpen, setMobileNestedSubMenuOpen] = useState<string | null>(null);

  const isMenuOpen = activeMenu !== null;
  
  const toggleMobileSubMenu = (menu: string) => {
    if (mobileSubMenuOpen === menu) {
      setMobileSubMenuOpen(null);
      setMobileNestedSubMenuOpen(null); // Close nested if parent closes
    } else {
      setMobileSubMenuOpen(menu);
      setMobileNestedSubMenuOpen(null);
    }
  };

  
  const toggleMobileNestedSubMenu = (menu: string) => {
    if (mobileNestedSubMenuOpen === menu) {
      setMobileNestedSubMenuOpen(null);
    } else {
      setMobileNestedSubMenuOpen(menu);
    }
  };
return (
    <>
    {/* Header / Navbar with Mega Menu */}
      <header 
        className={`relative z-50 w-full transition-colors duration-500 ${isMenuOpen || forceDark ? 'bg-[#f7f6f2] text-[#1a1a1a]' : 'bg-transparent text-white'}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-6 w-full">
          
          {/* Mobile Left Navigation: Hamburger Menu */}
          <div className="flex md:hidden items-center">
            <button 
              aria-label="Menu" 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`transition-all active:scale-95 ${isMenuOpen || isMobileMenuOpen || forceDark ? 'text-[#1a1a1a]' : 'text-white'}`}
            >
              {isMenuOpen || forceDark || isMobileMenuOpen ? <Menu size={24} strokeWidth={1.5} color="#1a1a1a" /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>

          {/* Desktop Left Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm tracking-wide">
            {/* Procedures Tab */}
            <div className="relative group flex items-center h-full">
              <button 
                className={`pb-1 transition-all active:scale-95 relative z-10 ${activeMenu === 'procedures' ? 'text-[#1a1a1a]' : isMenuOpen || forceDark ? 'text-gray-500 hover:text-[#1a1a1a]' : 'text-white hover:text-gray-300'}`}
                onMouseEnter={() => setActiveMenu('procedures')}
                onClick={() => setActiveMenu(activeMenu === 'procedures' ? null : 'procedures')}
              >
                Procedures
              </button>
              {/* Active/Hover underline */}
              <div className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${activeMenu === 'procedures' ? 'w-full bg-[#1a1a1a]' : 'w-0 bg-white'}`}></div>
            </div>



            {/* Discover Tab */}
            <div className="relative group flex items-center h-full">
              <button 
                className={`pb-1 transition-all active:scale-95 relative z-10 ${activeMenu === 'discover' ? 'text-[#1a1a1a]' : isMenuOpen || forceDark ? 'text-gray-500 hover:text-[#1a1a1a]' : 'text-white hover:text-gray-300'}`}
                onMouseEnter={() => setActiveMenu('discover')}
                onClick={() => setActiveMenu(activeMenu === 'discover' ? null : 'discover')}
              >
                Discover
              </button>
              {/* Active/Hover underline */}
              <div className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${activeMenu === 'discover' ? 'w-full bg-[#1a1a1a]' : 'w-0 bg-white'}`}></div>
            </div>
          </nav>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center cursor-pointer">
            <Link to="/" className="flex flex-col items-center">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/66.png?updatedAt=1789392513970" 
                alt="Skin Lab Logo" 
                className="h-10 md:h-12 w-auto object-contain max-h-12" 
              />
            </Link>
          </div>

          {/* Mobile Right Navigation: Book Button */}
          <div className="flex md:hidden items-center">
            <Link to="/contact" className={`rounded-[2rem] px-6 py-[8px] text-[10px] font-medium tracking-[0.2em] transition-all duration-300 border ${isMenuOpen ? 'border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white' : 'border-white/70 hover:bg-white hover:text-black'}`}>BOOK</Link>
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button aria-label="Search" className={`transition-colors ${isMenuOpen ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>
              <Search size={18} strokeWidth={1.5} color={isMenuOpen ? "#1a1a1a" : "white"} />
            </button>
            <button aria-label="Account" className={`transition-colors ${isMenuOpen ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>
              <User size={18} strokeWidth={1.5} color={isMenuOpen ? "#1a1a1a" : "white"} />
            </button>
            <button aria-label="Contact" className={`transition-colors ${isMenuOpen ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>
              <Phone size={18} strokeWidth={1.5} color={isMenuOpen ? "#1a1a1a" : "white"} />
            </button>
            <Link to="/contact" className={`rounded-[2rem] px-8 py-[10px] text-[11px] font-medium tracking-[0.2em] transition-all duration-300 border ${isMenuOpen ? 'border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white' : 'border-white/70 hover:bg-white hover:text-black'}`}>BOOK</Link>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div 
          className={`fixed inset-0 bg-[#f7f6f2] text-[#1a1a1a] z-50 flex flex-col transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-6 w-full border-b border-gray-200">
            <button 
              aria-label="Close Menu" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1a1a1a]"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center text-center cursor-pointer">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/66.png?updatedAt=1789392513970" 
                alt="Skin Lab Logo" 
                className="h-9 w-auto object-contain max-h-9" 
              />
            </Link>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`inline-block text-center rounded-[2rem] px-6 py-[8px] text-[10px] font-medium tracking-[0.2em] border transition-all ${isMenuOpen || forceDark ? 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}`}>BOOK</Link>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col px-6 py-8 space-y-6 flex-grow">
            {/* Procedures Accordion */}
            <div className="flex flex-col">
              <button 
                className="w-full flex items-center justify-between text-2xl md:text-3xl font-medium tracking-wide pb-2 active:opacity-60 transition-opacity"
                onClick={() => toggleMobileSubMenu('procedures')}
              >
                <span>Procedures</span>
                {mobileSubMenuOpen === 'procedures' ? <ChevronUp size={24} strokeWidth={1} /> : <ChevronDown size={24} strokeWidth={1} />}
              </button>
              
              {/* Procedures Submenu */}
              <div className={`overflow-hidden transition-all duration-300 flex flex-col ${mobileSubMenuOpen === 'procedures' ? 'max-h-[2500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                
                {/* Surgical Nested Accordion */}
                <div className="flex flex-col pl-4 mb-4">
                  <button 
                    className="w-full flex items-center justify-between text-xl font-medium text-gray-500 pb-2 active:opacity-60 transition-opacity"
                    onClick={() => toggleMobileNestedSubMenu('surgical')}
                  >
                    <span>Surgical</span>
                    {mobileNestedSubMenuOpen === 'surgical' ? <ChevronUp size={20} strokeWidth={1} /> : <ChevronDown size={20} strokeWidth={1} />}
                  </button>
                  <div className={`flex flex-col space-y-6 pl-2 overflow-hidden transition-all duration-300 ${mobileNestedSubMenuOpen === 'surgical' ? 'max-h-[1800px] mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Thread lift</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Eyebrow, Forehead, Mid-face, Neck</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Face</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Face lift, Deep plane face lift</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Forehead lift</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Brow lift</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Mid-face lift</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Neck lift, platysmaplasty</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Orthognathic surgery</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Cheek</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Dimple creation</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Buccal fat pad removal</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Facial Implants</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Silicon implants (Chin, Jaw, Nose, Cheek)</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Liposuction</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Face, Neck</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Eye</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Blepharoplasty</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Canthoplasty</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Ptosis correction</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Fat Augmentation</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Macro, Micro, Nano fat</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Ear</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Otoplasty</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Ear lobe repair/reduction</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Nose</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Rhinoplasty, Revision Rhinoplasty</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Alarplasty</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gray-400 mb-2 uppercase">Hair & Misc</h4>
                      <ul className="flex flex-col space-y-3 text-lg font-light">
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Hair transplantation</Link></li>
                        <li><Link to="/surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Surgical scar revision, Wart removal, Mole removal, Tongue tie</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Non-Surgical Nested Accordion */}
                <div className="flex flex-col pl-4">
                  <button 
                    className="w-full flex items-center justify-between text-xl font-medium text-[#1a1a1a] pb-2 active:opacity-60 transition-opacity"
                    onClick={() => toggleMobileNestedSubMenu('nonsurgical')}
                  >
                    <span>Non-Surgical</span>
                    {mobileNestedSubMenuOpen === 'nonsurgical' ? <ChevronUp size={20} strokeWidth={1} /> : <ChevronDown size={20} strokeWidth={1} />}
                  </button>
                  <ul className={`flex flex-col space-y-4 pl-4 overflow-hidden transition-all duration-300 text-lg font-light ${mobileNestedSubMenuOpen === 'nonsurgical' ? 'max-h-[800px] mt-3 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>BOTOX</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>DERMAL FILLERS</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>PROFILO</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>SCULPTRA</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>PDRN/NCTF</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Exosomes / Mesotherapy</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Non surgical facelift</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Keloid scar management</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Non-surgical scar management</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Double chin reduction</Link></li>
                    <li><Link to="/non-surgical" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>IV infusions</Link></li>
                  </ul>
                </div>
              </div>
            </div>



            {/* Discover Accordion */}
            <div className="flex flex-col border-t border-gray-200/50 pt-6">
              <button 
                className="w-full flex items-center justify-between text-2xl md:text-3xl font-medium tracking-wide pb-2 active:opacity-60 transition-opacity"
                onClick={() => toggleMobileSubMenu('discover')}
              >
                <span>Discover</span>
                {mobileSubMenuOpen === 'discover' ? <ChevronUp size={24} strokeWidth={1} /> : <ChevronDown size={24} strokeWidth={1} />}
              </button>
              <ul className={`flex flex-col space-y-4 pl-4 overflow-hidden transition-all duration-300 text-lg font-light ${mobileSubMenuOpen === 'discover' ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <li><Link to="/the-feature" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>The Feature</Link></li>
                <li><Link to="/contact" className="hover:text-gray-500" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
              </ul>
            </div>

            <div className="border-t border-gray-200/50 pt-6">
              <a href="#" className="block text-2xl md:text-3xl font-medium tracking-wide pb-2">Search</a>
            </div>
            <div className="border-t border-gray-200/50 pt-6">
              <a href="#" className="block text-2xl md:text-3xl font-medium tracking-wide pb-2">Account</a>
            </div>
            <div className="border-t border-gray-200/50 pt-6 pb-8">
              <a href="tel:+919444615554" className="block text-2xl md:text-3xl font-medium tracking-wide pb-2">+91 94446 15554</a>
            </div>

          </nav>
        </div>

        {/* Mega Menu Dropdown Panel */}
        <div 
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-8 md:px-12 py-12">
            {/* Procedures Menu Content */}
            {activeMenu === 'procedures' && (
              <div className="flex justify-between w-full animate-fade-in">
                {/* Left side: Links columns */}
                <div className="flex gap-16 pt-4 pb-4 w-full">
                  {/* Non-Surgical Column */}
                  <div className="flex flex-col w-52">
                    <h3 className="font-semibold text-sm mb-6 uppercase tracking-wider">Non-Surgical</h3>
                    <ul className="flex flex-col space-y-3 text-xs md:text-sm font-light text-gray-800">
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">BOTOX</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">DERMAL FILLERS</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">PROFILO</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">SCULPTRA</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">PDRN/NCTF</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">Exosomes / Mesotherapy</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">Non surgical facelift</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">Keloid scar management</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">Non-surgical scar management</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">Double chin reduction</Link></li>
                      <li><Link to="/non-surgical" className="hover:text-black transition-colors">IV infusions</Link></li>
                    </ul>
                  </div>

                  {/* Surgical Column 1 */}
                  <div className="flex flex-col w-52">
                    <h3 className="font-semibold text-sm mb-6 uppercase tracking-wider">Surgical</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Thread lift</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Eyebrow, Forehead, Mid-face, Neck</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Face</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Face lift, Deep plane face lift</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Forehead lift</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Brow lift</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Mid-face lift</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Neck lift, platysmaplasty</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Orthognathic surgery</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Surgical Column 2 */}
                  <div className="flex flex-col w-52 pt-11">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Cheek & Implants</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Dimple creation</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Buccal fat pad removal</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Silicon face implants</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Eye</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Blepharoplasty</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Canthoplasty</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Ptosis correction</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Nose</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Rhinoplasty, Revision Rhinoplasty</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Alarplasty</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Surgical Column 3 */}
                  <div className="flex flex-col w-52 pt-11">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Body & Ear</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Liposuction (Face, Neck)</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Fat augmentation (Macro, Micro, Nano fat)</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Otoplasty</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Ear lobe repair/reduction</Link></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-semibold tracking-wider text-gray-400 mb-2 uppercase">Hair & Misc</h4>
                        <ul className="flex flex-col space-y-2 text-xs md:text-sm font-light text-gray-800">
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Hair transplantation</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Surgical scar revision</Link></li>
                          <li><Link to="/surgical" className="hover:text-black transition-colors">Wart/Mole removal, Tongue tie</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            )}



            {/* Discover Menu Content */}
            {activeMenu === 'discover' && (
              <div className="flex justify-between w-full animate-fade-in">
                {/* Left side: Links columns */}
                <div className="flex gap-32 pt-4">
                  {/* The Practice Column */}
                  <div className="flex flex-col">

                    <ul className="flex flex-col space-y-4 text-sm font-light text-gray-800">
                      <li><Link to="/the-feature" className="hover:text-black transition-colors" onClick={() => setIsMobileMenuOpen(false)}>The Feature</Link></li>
                      <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>


              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
