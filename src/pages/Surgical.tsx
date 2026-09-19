import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export default function Surgical() {
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
            Surgical Procedures
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Discover our comprehensive range of transformative surgical treatments, precisely tailored to enhance your natural features and restore your confidence.
          </p>
        </div>
      </div>

      <main className="flex-grow w-full bg-[#fcfbf9]">
        
        {/* Under Eye Fat Bag Removal Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/4344343.jpeg?updatedAt=1789497478899" 
                alt="Under Eye Fat Bag Removal" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Eye Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Under Eye Fat Bag Removal <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Lower Blepharoplasty)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Say goodbye to tired-looking eyes. Under eye fat bag removal (often part of a lower blepharoplasty) is a highly effective surgical procedure designed to eliminate puffiness, deep bags, and dark shadows under the eyes. By carefully removing or repositioning excess fat, this procedure restores a smooth, youthful, and well-rested appearance.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Eliminates Puffiness:</strong> Permanently removes stubborn fat deposits under the eyes that don't respond to sleep or skincare.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Refreshed Appearance:</strong> Erases the "tired" look by creating a smooth transition from the lower eyelid to the cheek.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Hidden Incisions:</strong> Incisions are often made inside the lower eyelid (transconjunctival), leaving no visible external scarring.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Long-Lasting Results:</strong> Provides a permanent solution to under-eye bags with a high satisfaction rate and natural-looking outcome.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Otoplasty Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Ear Reshaping</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Otoplasty <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Telephone Ear Deformity)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Otoplasty is a transformative surgical procedure designed to correct prominent or disproportionate ears. Specifically addressing the "telephone ear" deformity—where the middle of the ear is pinned back while the top and bottom poles protrude—this procedure expertly reshapes the cartilage to achieve a naturally balanced, harmonious appearance.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Restores Balance:</strong> Harmonizes protruding ears by pinning them closer to the head, significantly improving overall facial symmetry.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Telephone Ear Correction:</strong> Expertly addresses the unique challenge of adjusting the ear's upper and lower poles to ensure a natural contour.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Customized Cartilage Reshaping:</strong> Tailored surgical techniques are used to reshape, fold, and secure the ear cartilage for lasting results.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Hidden Scars:</strong> Incisions are meticulously placed in the natural crease behind the ear, keeping any scarring completely concealed.
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
                src="https://ik.imagekit.io/fdhgiehjz/65545443.jpeg?updatedAt=1789497478699" 
                alt="Otoplasty Telephone Ear Deformity" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Thread Lift Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/4544.jpeg?updatedAt=1789497478387" 
                alt="Minimally Invasive Thread Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Minimally Invasive <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">Thread Lift</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                The minimally invasive Thread Lift is a revolutionary procedure designed to instantly elevate and contour sagging skin. Using biocompatible, dissolvable threads, this treatment physically lifts the face while simultaneously stimulating your body’s natural collagen production for long-lasting, beautifully natural results.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Instant Lift:</strong> Provides an immediate, noticeable lifting effect for the mid-face, jawline, and neck.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Collagen Stimulation:</strong> As the threads safely dissolve over time, they trigger collagen synthesis, dramatically improving skin texture and firmness.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Minimally Invasive:</strong> A fantastic alternative to a traditional surgical facelift, requiring no large incisions or general anesthesia.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Minimal Downtime:</strong> Patients can typically resume their normal daily activities much faster than with extensive surgical procedures.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Ptosis Correction Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Eye Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Ptosis Correction <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Eyelid Lifting Surgery)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Ptosis correction is a highly specialized surgical procedure that lifts drooping upper eyelids caused by weakened muscles. By tightening the levator muscle, this procedure not only restores a wide, awake, and refreshed appearance, but it can also significantly improve obstructed upper field vision.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Awakens Your Look:</strong> Eliminates the heavy, tired, or "sleepy" appearance caused by sagging eyelids, giving you a bright and refreshed look.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Restores Vision:</strong> Effectively lifts eyelids that may be drooping far enough to obstruct your upper field of vision, restoring full and clear eyesight.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Symmetrical Results:</strong> Expert surgical precision balances asymmetrical eyelids, ensuring both eyes look beautifully even and harmonious.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Hidden Incisions:</strong> The very fine incisions are typically hidden precisely within the natural crease of the upper eyelid, resulting in virtually undetectable scars once healed.
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
                src="https://ik.imagekit.io/fdhgiehjz/Ptosis.PNG" 
                alt="Ptosis Correction Eyelid Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Mole Removal Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/6675.jpeg?updatedAt=1789497478692" 
                alt="Surgical Mole Removal" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Miscellaneous</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Mole Removal <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Skin Refinement)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Achieve a flawless, uninterrupted complexion with our expert mole removal procedures. Whether for cosmetic refinement or medical peace of mind, we use advanced excision techniques designed to remove unwanted moles completely while ensuring the most minimal, virtually invisible scarring.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Aesthetic Precision:</strong> Carefully and entirely removes distracting or unwanted moles to restore a smooth skin surface.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Minimal Scarring:</strong> Utilizes fine surgical techniques, such as shave biopsies or precise excisions, to leave the smallest possible mark.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Quick &amp; Comfortable:</strong> A straightforward outpatient procedure performed safely under local anesthesia, taking only minutes per mole.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Peace of Mind:</strong> Extracted tissue can be sent for professional pathological screening to verify your dermatological health and safety.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Hair Transplant Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Hair Restoration</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Hair Transplant <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(FUE / FUT Procedures)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Restore a full, natural head of hair and regain your confidence with advanced hair transplant surgery. Utilizing state-of-the-art techniques, healthy hair follicles are carefully extracted and meticulously implanted into thinning or balding areas, ensuring natural growth and permanent results.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Natural Hairline Design:</strong> Meticulously re-creates an age-appropriate, beautifully contoured hairline tailored precisely to your facial proportions.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Permanent Results:</strong> Uses your own genetically resistant hair follicles (typically from the back of the head) for permanent, lasting growth.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Advanced Techniques:</strong> Utilizes cutting-edge FUE (Follicular Unit Extraction) or FUT methods to maximize graft survival while minimizing scarring.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Boosts Confidence:</strong> Effectively reverses the visible signs of hair thinning or baldness, giving you a dense, thick head of hair and renewed self-assurance.
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
                src="https://ik.imagekit.io/fdhgiehjz/12778.jpeg?updatedAt=1789497478842" 
                alt="Surgical Hair Transplant" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Rhinoplasty Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Rhinoplasty.PNG" 
                alt="Surgical Rhinoplasty" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Harmony</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Rhinoplasty <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Nose Reshaping)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Rhinoplasty is a highly personalized surgical procedure designed to enhance the natural harmony of your face. By expertly refining the shape, size, or structural contours of the nose, this surgery can dramatically boost self-confidence while also addressing functional issues for optimal breathing.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Facial Harmony:</strong> Balances your overall facial proportions by refining the structure and aesthetic contour of the nose.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Corrects Imperfections:</strong> Effectively smooths out prominent dorsal humps, refines bulbous nasal tips, and straightens crooked profiles.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Improves Breathing:</strong> Functional rhinoplasty (often combined with a septoplasty) corrects structural abnormalities to restore clear, effortless airflow.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Customized Approach:</strong> Every procedure is meticulously tailored to respect your unique ethnic features and natural aesthetic goals.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Face Lift Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Face Lift <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Deep Plane Face Lift)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Turn back the clock with a transformative surgical face lift. Specializing in the advanced Deep Plane technique, this procedure goes beyond just tightening the skin. By repositioning the deeper muscle layers, it delivers a profoundly natural, long-lasting rejuvenation that never looks "pulled" or tight.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Comprehensive Rejuvenation:</strong> Dramatically reduces sagging skin, deep nasolabial folds, and prominent jowls for a smooth, youthful contour.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Deep Plane Technique:</strong> Lifts and repositions the underlying structural tissues (SMAS layer), ensuring results are remarkably natural and durable.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Restores Volume:</strong> Beautifully elevates descended facial fat pads back to their original, youthful positions high on the cheekbones.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Defines the Jawline:</strong> Expertly tightens the neck and lower face to recreate a sharp, elegant, and refined jawline profile.
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
                src="https://ik.imagekit.io/fdhgiehjz/Face%20lift.PNG" 
                alt="Surgical Face Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Jaw Angle Implant Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Angle%20implant.PNG" 
                alt="Jaw Angle Implant" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Implants</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Jaw Angle Implants <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Facial Contouring)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Achieve a strong, beautifully chiseled jawline with custom facial implants. Specifically designed to enhance the mandibular angles, this surgical procedure creates a highly defined lower face, restoring aesthetic balance and adding striking, permanent structure to your profile.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Defined Jawline:</strong> Instantly enhances and widens the lower face, providing the sharp, structured jawline you desire.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Facial Harmony:</strong> Expertly corrects weak or asymmetrical jaw angles to restore perfect proportion to the lower third of the face.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Permanent Contouring:</strong> Unlike temporary dermal fillers, precision-crafted silicone implants offer a permanent, stable structural enhancement.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Hidden Incisions:</strong> The procedure is typically performed entirely through small incisions inside the mouth, leaving absolutely no external scarring.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Fat Augmentation Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Fat Augmentation <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Macro, Micro &amp; Nano Fat)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Restore youthful volume and profoundly improve skin quality using your body's own natural fat. Through advanced purification, we utilize Macro fat for deep structural support, Micro fat for delicate contouring, and Nano fat to deliver a powerful boost of regenerative stem cells directly to the skin.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Natural Volume:</strong> Uses your body's own purified fat cells to safely restore lost facial volume, ensuring completely natural-looking and feeling results.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Versatile Application:</strong> Beautifully tailored: Macro fat restores deep volume, Micro fat refines contours, and Nano fat addresses fine lines.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Stem Cell Benefits:</strong> The transferred fat is rich in natural stem cells that continuously rejuvenate the overlying skin, giving it a healthy, radiant glow.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Long-Lasting:</strong> Because it utilizes your living tissue, a significant portion of the transferred fat becomes a permanent, beautiful part of your facial structure.
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
                src="https://ik.imagekit.io/fdhgiehjz/Fat%20augmentation.PNG" 
                alt="Fat Augmentation" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Blepharoplasty Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Blepharoplasty%20with%20Fat%20bag%20removal.PNG" 
                alt="Blepharoplasty with Fat Bag Removal" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Eye Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Blepharoplasty <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(with Fat Bag Removal)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Awaken your eyes and erase the appearance of exhaustion. This comprehensive eyelid surgery meticulously removes excess, drooping skin from the upper and lower lids while simultaneously eliminating or repositioning bulging under-eye fat bags to restore a bright, entirely refreshed look.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Comprehensive Rejuvenation:</strong> Expertly removes heavy, sagging skin from both the upper and lower eyelids for a profoundly rested appearance.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Eliminates Eye Bags:</strong> Skillfully targets and removes prominent under-eye fat pads to completely erase the look of chronic fatigue.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Smoothes Contours:</strong> Restores a seamless, youthful transition between the lower eyelid and the upper cheek, eliminating deep hollows.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Virtually Invisible Scars:</strong> Incisions are meticulously hidden within the natural creases of the upper eyelids and just below the lower lash line.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Platysmaplasty Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Platysmaplasty <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Surgical Neck Lift)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Reclaim a sleek, youthful neckline with an advanced platysmaplasty. This powerful surgical procedure directly tightens the underlying neck muscles (platysma) and removes excess, sagging skin, effectively eliminating the appearance of a "turkey neck" and prominent vertical bands.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Defines the Neckline:</strong> Expertly tightens the underlying platysma muscles to eliminate prominent vertical banding and severe sagging.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Restores Youthful Contours:</strong> Removes excess skin and fat from under the chin to recreate a beautifully sharp and elegant jawline profile.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Long-Lasting Results:</strong> Unlike non-surgical alternatives, this surgical intervention provides profound, structural, and highly durable rejuvenation.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Comprehensive Lift:</strong> Frequently and harmoniously combined with a deep-plane facelift for a seamless transformation of the lower face and neck.
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
                src="https://ik.imagekit.io/fdhgiehjz/Surgical%20-%20platysmaplasty.PNG" 
                alt="Surgical Platysmaplasty Neck Lift" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Buccal Fat Pad Reduction Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Buccal%20fat%20pad%20reduction.jpeg" 
                alt="Buccal Fat Pad Reduction" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Facial Contouring</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Buccal Fat Reduction <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Cheek Slimming)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Refine your facial silhouette with a buccal fat pad reduction. This brief, elegant surgical procedure removes the deep fat pads in the lower cheeks, transforming a round or "chubby" face into a highly sculpted, naturally contoured V-shape profile.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Sculpts the Cheeks:</strong> Expertly removes the buccal fat pads to reduce lower cheek fullness, revealing beautifully sculpted cheekbones.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Slims the Face:</strong> Ideal for patients looking to completely transform a round facial appearance into a more mature, refined contour.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Permanent Results:</strong> Because the removed fat cells do not regenerate, this procedure offers a lifetime enhancement to your facial structure.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Hidden Incisions:</strong> The straightforward procedure is performed entirely through small incisions inside the mouth, leaving no visible scarring.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Ear Lobe Repair Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Ear Rejuvenation</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Ear Lobe Repair <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Restorative Surgery)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Restore the natural, beautiful contour of your earlobes. Whether caused by heavy earrings, gauges, or accidental trauma, this meticulous surgical repair seamlessly corrects split, torn, or severely stretched earlobes, allowing you to confidently wear earrings again.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Restores Natural Shape:</strong> Expertly repairs split or stretched tissue, flawlessly restoring the natural, rounded contour of the earlobe.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Quick &amp; Painless:</strong> A simple, straightforward outpatient procedure performed comfortably under local anesthesia in under an hour.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Virtually Invisible Scars:</strong> Advanced, meticulous suturing techniques ensure that the repaired tissue heals smoothly with barely noticeable scarring.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Re-Piercing Possible:</strong> Once fully healed, the flawlessly repaired earlobe can safely be re-pierced for your favorite earrings.
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
                src="https://ik.imagekit.io/fdhgiehjz/Ear%20lobe%20repair.PNG" 
                alt="Ear Lobe Repair Surgery" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </section>

        {/* Neck Liposuction Section */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden group shadow-sm">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/Liposuction%20-%20neck.PNG" 
                alt="Neck Liposuction" 
                className="w-full h-[500px] md:h-[650px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <p className="text-[#6e5038] tracking-widest text-sm font-semibold uppercase mb-4">Liposuction</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] mb-6 tracking-tight leading-tight">
                Neck Liposuction <br/>
                <span className="text-gray-500 italic text-2xl md:text-3xl">(Submental Contouring)</span>
              </h2>
              
              <div className="h-[1px] w-12 bg-[#1a1a1a] mb-8"></div>
              
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-lg">
                Permanently eliminate stubborn under-chin fullness with precision neck liposuction. This minimally invasive procedure expertly removes targeted fat deposits, dramatically revealing your jawline's natural definition and creating a sleek, highly contoured neck profile.
              </p>
              
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Eliminates Double Chin:</strong> Permanently removes stubborn, diet-resistant fat deposits from beneath the chin and along the upper neck.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Sharpens Jawline:</strong> Dramatically reveals and sculpts the natural bony contours of the jawline for a highly defined, elegant profile.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Minimally Invasive:</strong> Uses extremely fine cannulas through tiny, easily hidden micro-incisions, ensuring minimal trauma and a rapid recovery.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6e5038] mr-4 mt-2.5 flex-shrink-0"></div>
                  <p className="text-gray-800 font-light leading-relaxed">
                    <strong className="font-medium text-[#1a1a1a]">Skin Retraction:</strong> Advanced liposuction techniques naturally encourage the overlying skin to contract and tighten, enhancing the smooth contour.
                  </p>
                </li>
              </ul>
              
              <a href="/book" className="inline-block border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
                Book Consultation
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
