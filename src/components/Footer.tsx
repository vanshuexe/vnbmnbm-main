import { Link } from 'react-router-dom';

export default function Footer({ white = false }: { white?: boolean }) {
  const c = white
    ? {
        footer: 'bg-white text-[#001d3d] border-t border-gray-200',
        divider: 'border-gray-200',
        icon: 'hover:text-[#8a6d52]',
        title: 'text-[#001d3d]',
        body: 'text-gray-600',
        strong: 'text-[#001d3d]',
        muted: 'text-gray-500',
        link: 'hover:text-[#001d3d]',
        legal: 'text-gray-500',
      }
    : {
        footer: 'bg-[#ebe9e4] text-[#1a1a1a]',
        divider: 'border-gray-300',
        icon: 'hover:text-gray-600',
        title: 'text-[#1a1a1a]',
        body: 'text-gray-700',
        strong: 'text-gray-900',
        muted: 'text-gray-600',
        link: 'hover:text-[#1a1a1a]',
        legal: 'text-gray-600',
      };

  return (
    <>
      {/* Footer Section */}
      <footer className={`w-full ${c.footer} pt-16 md:pt-24 pb-10 md:pb-12 px-6 sm:px-8 lg:px-12 xl:px-24`}>
        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8 border-b ${c.divider} pb-14 md:pb-20`}>
          
          {/* Left Column: Social & Map (shown after the clinic details on phones) */}
          <div className="order-2 md:order-none w-full md:w-4/12 lg:w-5/12 flex flex-col">

            
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/drshruthilayaganesan?igsi=bzdhMWN2YzlzZDJv&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className={`${c.icon} transition-colors`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/919444615554" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={`${c.icon} transition-colors`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/dr-shruthilaya-ganesan-23626821b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`${c.icon} transition-colors`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

            {/* Clinic maps */}
            <div className="mt-8 w-full max-w-md space-y-6">
              {[
                { label: 'Clinic 1 · Skin Lab Studio', src: 'https://www.google.com/maps?q=SkinLab+by+Dr.+Jamuna+Pai,+Sathyadev+Enclave,+Race+Course,+Coimbatore+641018&z=15&output=embed' },
                { label: 'Clinic 2 · Rootwise Aesthetic Clinic', src: 'https://www.google.com/maps?q=Rootwise+Aesthetics,+31+E+TV+Swamy+Rd,+R.S.+Puram,+Coimbatore+641002&z=15&output=embed' },
              ].map((map) => (
                <div key={map.label}>
                  <p className={`text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 ${c.muted}`}>{map.label}</p>
                  <div className={`h-[200px] lg:h-[220px] rounded-xl overflow-hidden border ${c.divider}`}>
                    <iframe
                      title={`Map of ${map.label}`}
                      src={map.src}
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column: Address & Contact */}
          <div className="order-1 md:order-none w-full md:w-5/12 lg:w-4/12 flex flex-col mt-2 md:mt-0">
            <Link to="/" className={`font-cormorant text-3xl font-semibold leading-tight ${c.title} mb-6`}>
              Dr. Shruthilaya Ganesan
            </Link>
            <p className="font-semibold text-xs tracking-wider mb-6 uppercase">Locations</p>
            <div className={`text-sm font-light ${c.body} space-y-4 mb-8`}>
              <div>
                <p className={`font-medium ${c.strong}`}>Clinic 1: Skin Lab Studio</p>
                <p>No. 166, Parijath, Sathyadev Enclave,<br />Race Course, Coimbatore 641018</p>
                <p className={`mt-1 ${c.muted} text-xs`}>Mon - Sun: 10:00 AM - 7:30 PM</p>
                <a href="https://share.google/X54rfKMZyTi7j0lSV" target="_blank" rel="noreferrer" className={`inline-block mt-2 text-xs underline underline-offset-4 ${c.link} transition-colors`}>Get directions</a>
              </div>
              <div className="pt-2">
                <p className={`font-medium ${c.strong}`}>Clinic 2: Rootwise Aesthetic Clinic</p>
                <p>31, E TV Swamy Rd,<br />R.S. Puram, Coimbatore 641002</p>
                <p className={`mt-1 ${c.muted} text-xs leading-relaxed`}>
                  Mon - Sat<br />
                  Morning: 9:30 AM - 10:30 AM<br />
                  Evening: 7:30 PM - 8:30 PM
                </p>
                <a href="https://share.google/4zPrH7dKJrDc9syyg" target="_blank" rel="noreferrer" className={`inline-block mt-2 text-xs underline underline-offset-4 ${c.link} transition-colors`}>Get directions</a>
              </div>

            </div>
            <div className={`text-sm font-light ${c.body} space-y-1`}>
              <p>+91 94446 15554</p>
              <p>dr.shruthilayaganesan@gmail.com</p>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="order-3 md:order-none w-full md:w-2/12 flex flex-col mt-2 md:mt-0">
            <p className="font-semibold text-xs tracking-wider mb-6">Learn More</p>
            <ul className={`text-sm font-light ${c.body} space-y-6`}>
              <li><Link to="/faq/" className={`${c.link} transition-colors`}>FAQ</Link></li>
              <li><Link to="/sitemap/" className={`${c.link} transition-colors`}>Sitemap</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className={`max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left text-[11px] md:text-[10px] ${c.legal} pt-8 font-light`}>
          <p suppressHydrationWarning>© {new Date().getFullYear()} Dr. Shruthilaya Ganesan. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-12 mt-4 md:mt-0">
            <a href="#" className={`${c.link} transition-colors`}>Terms of Use</a>
            <a href="#" className={`${c.link} transition-colors`}>Cookies</a>
            <a href="#" className={`${c.link} transition-colors`}>Accessibility</a>
            <a href="#" className={`${c.link} transition-colors`}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
