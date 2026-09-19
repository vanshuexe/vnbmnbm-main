import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function NonSurgical() {
  return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden flex flex-col">
      <div className="bg-[#25211e] w-full">
        <Navbar />
      </div>
      
      {/* Page Header */}
      <div className="relative w-full pt-16 pb-20 px-6 md:px-12 lg:px-24 bg-[#25211e] text-white">
        <div className="max-w-4xl">
          <div className="flex items-center justify-start mb-4">
            <div className="hidden md:block h-[1px] w-[40px] bg-white mr-4"></div>
            <p className="text-sm tracking-widest font-light uppercase">Treatments</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Non-Surgical Procedures
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Enhance your natural beauty with our advanced, minimally invasive treatments designed for maximum results and minimal downtime.
          </p>
        </div>
      </div>

      <main className="flex-grow w-full bg-[#fcfbf9]">
        
        {/* Botox - Masseter Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/88888.jpeg?updatedAt=1789497478866" 
                alt="Botox Masseter Face Slimming" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Botox</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Masseter Treatment <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Face Slimming)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Masseter Botox is a highly effective, non-surgical treatment that helps slim the lower face and relieve jaw tension by relaxing the masseter muscles. This provides a beautifully contoured, V-shaped jawline without the need for invasive surgery.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Face Slimming:</strong> Noticeably narrows a square jawline, creating a softer, more feminine or refined appearance.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">TMJ & Teeth Grinding Relief:</strong> Significantly reduces jaw clenching, pain, and tension headaches associated with Bruxism.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Quick & Painless:</strong> The procedure takes only a few minutes with minimal discomfort and zero downtime.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Long-Lasting Results:</strong> Effects gradually appear over 2-4 weeks and typically last between 4 to 6 months.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Skin Boosters Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Skin Boosters</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                PDRN &amp; NCTF <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Cellular Renewal)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Skin boosters like PDRN and NCTF work at a cellular level to repair, hydrate, and rejuvenate the skin from the inside out. They deliver powerful nutrients directly into the dermis for a radiant, youthful glow.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Deep Hydration:</strong> Restores moisture balance and improves skin elasticity for a plumper, firmer texture.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Cellular Repair (PDRN):</strong> Derived from salmon DNA, it accelerates tissue regeneration, reduces inflammation, and heals damaged skin.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Nutrient Rich (NCTF):</strong> Infuses the skin with active ingredients including vitamins, amino acids, and co-enzymes to brighten and revitalize.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Anti-Aging:</strong> Smooths out fine lines, refines pores, and improves overall skin tone and luminosity.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/667677765.jpeg?updatedAt=1789497478744" 
                alt="Skin Boosters PDRN NCTF" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Nefertiti Lift Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfbf9]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Botox%20-%20Nefertiti%20lift.PNG" 
                alt="Botox Nefertiti Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Botox</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Nefertiti Lift <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Neck &amp; Jawline Definition)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Named after the Egyptian Queen known for her sculpted jawline, the Nefertiti Lift is an advanced Botox technique that targets the platysma bands in the neck. By relaxing these downward-pulling muscles, it creates an upward lifting effect for a sharper, more youthful profile.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Jawline Contouring:</strong> Re-defines and sharpens the jawline, reducing the appearance of jowls and sagging skin.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Neck Rejuvenation:</strong> Smooths out prominent neck bands (platysmal bands) and horizontal neck lines for an elegant, elongated neck.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Non-Surgical Lift:</strong> Provides a subtle "mini face lift" effect by counteracting the downward pull of the lower facial muscles.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">No Downtime:</strong> A fast, in-and-out procedure allowing you to immediately return to your normal routine.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* General Botox Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Botox</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Anti-Wrinkle Injections <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Smooth &amp; Prevent)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Botox is a safe, FDA-approved treatment that temporarily relaxes the facial muscles responsible for dynamic wrinkles. It is expertly administered to soften existing expression lines and prevent new ones from forming, giving you a naturally refreshed and youthful appearance without looking "frozen".
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Smooths Expression Lines:</strong> Highly effective for eliminating forehead lines, frown lines (between the brows), and crow's feet.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Preventative Care:</strong> Excellent for younger patients to prevent fine lines from deepening into permanent wrinkles.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Natural Results:</strong> Custom-tailored dosage ensures you retain your natural facial expressions while looking well-rested.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Quick Treatment:</strong> A comfortable, 10-minute procedure with zero downtime. Full results become visible within 3 to 14 days.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/IMG_6484.PNG" 
                alt="Botox Anti-Wrinkle Injections" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Gummy Smile & Lip Flip Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfbf9]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Botox%20-%20lip%20flip.PNG" 
                alt="Botox Gummy Smile and Lip Flip" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Botox</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Gummy Smile &amp; Lip Flip <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Smile Enhancement)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Enhance the natural beauty of your smile with precision Botox injections. Whether you're looking to reduce excess gum exposure or achieve a subtly fuller pout without dermal fillers, these specialized techniques offer a highly effective solution.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Gummy Smile Correction:</strong> Relaxes the upper lip muscle to prevent it from rising too high, beautifully balancing your smile.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Lip Flip:</strong> Subtly rolls the upper lip outward, creating the illusion of a naturally fuller, poutier lip.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Enhanced Proportions:</strong> Harmonizes your facial proportions by improving the aesthetic ratio of teeth to gums when you smile.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Quick &amp; Subtle:</strong> A fast procedure with beautifully natural-looking results that become visible in just a few days.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>

          </div>
        </section>

        {/* Brow Lift Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Botox</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Brow Lift <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Eye Rejuvenation)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                The Non-Surgical Brow Lift uses precise Botox injections to relax the muscles that pull the eyebrows downward. This allows the lifting muscles to take over, elevating the brow arch and opening up the eyes for a brighter, more youthful look.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Lifts &amp; Opens Eyes:</strong> Creates a subtle, elegant upward lift, making you look more awake and well-rested.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Corrects Asymmetry:</strong> Expertly balances uneven or asymmetrical brows, harmonizing your upper facial features.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Smooths Hooded Lids:</strong> Gently reduces the appearance of mild eyelid hooding by elevating the skin above the eye.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Non-Surgical Alternative:</strong> Achieves a beautiful, rested look without the incisions, scarring, or downtime of a traditional surgical brow lift.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Botox%20-%20Brow%20lift.PNG" 
                alt="Botox Brow Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Keloid Management Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfbf9]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/keloid.PNG" 
                alt="Keloid Scar Management" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Skin Refinement</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Keloid Management <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Advanced Scar Reduction)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Reclaim smooth, comfortable skin with our comprehensive keloid management treatments. Utilizing targeted, non-surgical approaches—such as customized intralesional injections—we effectively break down excess scar tissue, relieve associated discomfort, and significantly improve the aesthetic appearance of stubborn keloids.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Flattens Keloids:</strong> Employs specialized injections and therapies to soften and flatten raised, hypertrophic, and keloid scars.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Relieves Discomfort:</strong> Actively reduces the itchiness, burning, and tenderness frequently associated with growing or active keloids.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Prevents Recurrence:</strong> Often combined with preventative aftercare strategies to discourage the scar tissue from returning.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Improves Aesthetics:</strong> Progressively fades striking redness and hyperpigmentation, blending the scar closer to your natural skin tone.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Sculptra Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Biostimulator</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Sculptra <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Advanced Biostimulation)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Achieve lasting rejuvenation with Sculptra, a premier injectable biostimulator. Rather than simply "filling" wrinkles, Sculptra works deep within the dermis to stimulate your body's own natural collagen production. This restores underlying facial structure and volume for a smooth, naturally youthful glow.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Collagen Restoration:</strong> Actively stimulates collagen synthesis, progressively rebuilding the skin's structural foundation from the inside out.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Gradual &amp; Natural:</strong> Results develop subtly over the course of several months, ensuring you look beautifully refreshed without any sudden or obvious changes.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Long-Lasting:</strong> Because it rebuilds your own natural collagen, the revitalizing effects can last up to two years or even longer.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Overall Rejuvenation:</strong> Highly effective for addressing deep facial wrinkles, prominent folds, and widespread global volume loss.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/fr.PNG" 
                alt="Sculptra Biostimulator" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Mid Face Thread Lift Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#fcfbf9]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Mid%20face%20thread%20lift.PNG" 
                alt="Mid Face Thread Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Mid-Face Thread Lift <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Non-Surgical Facelift)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Achieve a beautifully refreshed and youthful contour without surgery. The mid-face thread lift uses advanced, dissolvable threads to instantly lift and reposition sagging skin in the cheeks and mid-face, while simultaneously stimulating your body's natural collagen production for long-lasting firmness.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Instant Elevation:</strong> Instantly lifts and repositions descended facial tissues to restore a high, youthful cheekbone contour.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Collagen Stimulation:</strong> As the threads safely dissolve over time, they trigger ongoing collagen synthesis, extending the firming effects.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Minimally Invasive:</strong> Delivers striking, facelift-like results without the need for general anesthesia or large surgical incisions.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Zero Downtime:</strong> A fast and straightforward procedure that allows you to return to your normal daily activities almost immediately.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Lip Filler Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Dermal Fillers</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Lip Filler <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Plump &amp; Define)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Achieve the perfect pout with our premium hyaluronic acid lip fillers. Designed to instantly restore lost volume, refine your lip contours, and smooth out vertical lip lines, this treatment delivers beautifully natural, plump, and deeply hydrated lips tailored entirely to your desires.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Enhanced Volume:</strong> Instantly adds soft, natural-looking volume to thin or aging lips, giving them a youthful fullness.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Refines Shape:</strong> Expertly defines the lip borders and Cupid's bow, perfecting your natural lip shape and symmetry.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Hydrates Deeply:</strong> Formulated with hyaluronic acid that draws in moisture, leaving your lips feeling incredibly soft and deeply hydrated.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Customizable Results:</strong> Fully tailored to your aesthetic goals—whether you desire a subtle, soft enhancement or a glamorous, full-volume look.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Dermal%20filler%20-%20Lip%20filler.PNG" 
                alt="Dermal Lip Filler" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
