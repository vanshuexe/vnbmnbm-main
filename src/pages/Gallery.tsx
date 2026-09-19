import React from 'react';
import Navbar from '../components/Navbar';


import Footer from '../components/Footer';
import CTA from '../components/CTA';
const galleryItems = [
  {
    image: "https://ik.imagekit.io/fdhgiehjz/125.jpeg",
    title: "Facial Harmonization",
    category: "Non-Surgical",
    description: "A comprehensive approach to balance facial proportions and enhance natural beauty.",
    points: [
      "Strategic placement of dermal fillers",
      "Enhanced cheekbone definition",
      "Jawline contouring for a sharper profile",
      "No downtime required"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/126.jpeg",
    title: "Rhinoplasty Restructuring",
    category: "Surgical",
    description: "Surgical refinement of the nose to improve both functional breathing and aesthetic symmetry.",
    points: [
      "Correction of dorsal hump",
      "Refinement of the nasal tip",
      "Improved facial symmetry",
      "Natural-looking, structural results"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/127.jpeg",
    title: "Lip Augmentation & Hydration",
    category: "Non-Surgical",
    description: "Subtle enhancement of lip volume and shape using premium hyaluronic acid fillers.",
    points: [
      "Restored youthful volume",
      "Defined cupid's bow",
      "Intense deep hydration",
      "Symmetrical and natural finish"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/1276.jpeg",
    title: "Deep Plane Facelift",
    category: "Surgical",
    description: "Advanced surgical lifting technique targeting deeper facial structures for profound rejuvenation.",
    points: [
      "Comprehensive lower face and neck lift",
      "Smoothing of severe nasolabial folds",
      "Restoration of natural mid-face volume",
      "Long-lasting, non-pulled aesthetic"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/4544.jpeg",
    title: "Under-Eye Rejuvenation",
    category: "Non-Surgical",
    description: "Targeted treatment for tired-looking eyes, dark circles, and hollow tear troughs.",
    points: [
      "Tear trough filler application",
      "Reduction of dark shadows",
      "Smoothing of fine lines",
      "Immediate refreshed appearance"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/7777.jpeg",
    title: "Blepharoplasty (Eyelid Lift)",
    category: "Surgical",
    description: "Surgical removal of excess skin and fat from the upper or lower eyelids to restore a youthful gaze.",
    points: [
      "Elimination of hooded eyelids",
      "Removal of under-eye bags",
      "Brighter, more alert expression",
      "Minimal visible scarring"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/6675.jpeg",
    title: "Jawline & Chin Sculpting",
    category: "Non-Surgical",
    description: "Non-surgical enhancement of the lower face for a stronger, more defined jawline profile.",
    points: [
      "Chin elongation and projection",
      "Sharpened mandibular angle",
      "Reduction of mild jowling",
      "Harmonized side-profile"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/12778.jpeg",
    title: "Advanced Thread Lift",
    category: "Minimally Invasive",
    description: "A subtle, non-surgical lift using dissolving threads to support sagging skin.",
    points: [
      "Elevation of mid-face and jowls",
      "Stimulation of natural collagen",
      "Immediate lifting effect",
      "Gradual improvement over months"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/66666.jpeg",
    title: "Skin Resurfacing & Texture",
    category: "Aesthetic Treatment",
    description: "Comprehensive skin conditioning to address pigmentation, scarring, and uneven texture.",
    points: [
      "Reduction of acne scarring",
      "Evening of skin tone",
      "Minimized pore appearance",
      "Radiant, glowing complexion"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/88888.jpeg",
    title: "Neck Rejuvenation",
    category: "Surgical / Non-Surgical",
    description: "Targeted lifting and smoothing of the neck area to eliminate bands and sagging skin.",
    points: [
      "Tightening of loose neck skin",
      "Reduction of horizontal lines",
      "Improved cervicomental angle",
      "Seamless integration with jawline"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/4344343.jpeg",
    title: "Liquid Facelift",
    category: "Non-Surgical",
    description: "A holistic anti-aging approach utilizing a combination of neuromodulators and fillers.",
    points: [
      "Softening of dynamic wrinkles",
      "Global facial volume restoration",
      "Lifted brow and cheek areas",
      "Customized treatment plan"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/65545443.jpeg",
    title: "Brow Refinement",
    category: "Non-Surgical",
    description: "Strategic lifting and shaping of the brow area for a more open and youthful eye appearance.",
    points: [
      "Subtle elevation of the brow tail",
      "Smoothing of frown lines",
      "Enhanced eye symmetry",
      "Quick procedure with no downtime"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/455455445.jpeg",
    title: "Volume Restoration (Sculptra)",
    category: "Bio-Stimulator",
    description: "Deep tissue collagen stimulation to gradually replace lost facial volume over time.",
    points: [
      "Progressive, natural-looking results",
      "Restoration of underlying skin structure",
      "Long-lasting collagen production",
      "Improvement of overall skin quality"
    ]
  },
  {
    image: "https://ik.imagekit.io/fdhgiehjz/667677765.jpeg",
    title: "Complete Transformation",
    category: "Combination Therapy",
    description: "A bespoke, multi-modality treatment plan combining surgical and non-surgical techniques.",
    points: [
      "Personalized aesthetic roadmap",
      "Harmonious, full-face rejuvenation",
      "Balanced and natural outcomes",
      "Comprehensive care and follow-up"
    ]
  }
];

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden">
      
      {/* Hero Wrapper */}
      <div className="relative w-full h-screen text-white bg-[#25211e]">
        
        {/* Background Image & Overlays for Hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2000&auto=format&fit=crop"
            alt="Gallery Hero"
            className="w-full h-full object-cover object-center opacity-90 scale-105"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#25211e]/80 via-[#25211e]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1715]/70 via-transparent to-transparent"></div>
        </div>

        <Navbar />

        {/* Main Hero Content */}
        <main className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-24 w-full text-left pb-24">
          <div className="max-w-xl">
            {/* Heading */}
            <h1 className="text-[40px] leading-[1.1] md:text-5xl lg:text-7xl mb-4 md:mb-6 font-light tracking-tight">
              Gallery
            </h1>
            
            {/* Description */}
            <p className="text-gray-200 md:text-white leading-relaxed text-[15px] md:text-lg font-light tracking-wide">
              Discover before and after transformations
            </p>
          </div>
        </main>
      </div>

      
      {/* Gallery Content */}
      <section className="relative z-10 w-full py-24 px-4 md:px-12 lg:px-24 bg-[#f7f6f2] text-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-14">
             {galleryItems.map((item, index) => (
               <div key={index} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                 {/* Image Container */}
                 <div className="relative overflow-hidden w-full aspect-[4/3] bg-gray-100">
                   <img 
                     src={item.image} 
                     alt={item.title} 
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                   />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase text-gray-800">
                     {item.category}
                   </div>
                 </div>
                 
                 {/* Content Container */}
                 <div className="p-6 md:p-8 flex flex-col flex-grow">
                   <h3 className="text-2xl font-light tracking-wide mb-3">{item.title}</h3>
                   <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed mb-6 flex-grow">
                     {item.description}
                   </p>
                   
                   {/* Points List */}
                   <ul className="space-y-2 mt-auto">
                     {item.points.map((point, idx) => (
                       <li key={idx} className="flex items-start text-sm text-gray-700 font-light">
                         <span className="mr-3 text-[#1a1a1a] opacity-60 flex-shrink-0 mt-1">•</span>
                         <span className="leading-relaxed">{point}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>

  );
}
