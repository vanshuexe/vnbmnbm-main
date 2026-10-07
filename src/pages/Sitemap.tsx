import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sitemap() {
  const sitemapData = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "The Feature", path: "/the-feature/" },
        { name: "Contact Us", path: "/contact/" },
        { name: "Book Consultation", path: "/book/" },
        { name: "FAQ", path: "/faq/" },
      ]
    },
    {
      title: "Treatments",
      links: [
        { name: "Surgical Procedures", path: "/surgical/" },
        { name: "Non-Surgical Procedures", path: "/non-surgical/" },
      ]
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Privacy Policy", path: "#" },
        { name: "Terms of Use", path: "#" },
        { name: "Accessibility", path: "#" },
        { name: "Cookies Policy", path: "#" },
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans flex flex-col">
      <div className="bg-[#25211e] w-full">
        <Navbar />
      </div>

      <div className="relative w-full pt-16 pb-20 px-6 md:px-12 lg:px-24 bg-[#25211e] text-white">
        <div className="max-w-4xl">
          <div className="flex items-center justify-start mb-4">
            <div className="hidden md:block h-[1px] w-[40px] bg-white mr-4"></div>
            <p className="text-sm tracking-widest font-light uppercase">Navigation</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Sitemap
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A complete overview of the pages and sections available on the Skin Lab website.
          </p>
        </div>
      </div>

      <main className="flex-grow w-full bg-[#fcfbf9] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {sitemapData.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h2 className="text-xl font-medium tracking-wide text-[#1a1a1a] mb-6 uppercase border-b border-gray-200 pb-4">
                  {section.title}
                </h2>
                <ul className="flex flex-col space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        to={link.path} 
                        className="text-gray-600 hover:text-[#6e5038] font-light transition-colors text-lg flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
