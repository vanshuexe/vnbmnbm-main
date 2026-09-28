import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const faqs = [
  {
    category: "General & Consultations",
    questions: [
      {
        q: "How do I know which procedure is right for me?",
        a: "During your comprehensive consultation, Dr. Shruthilaya Ganesan will evaluate your unique anatomy, discuss your aesthetic goals, and recommend a tailored treatment plan—whether surgical, non-surgical, or a combination of both—to achieve the most natural and beautiful results."
      },
      {
        q: "Do you offer virtual consultations?",
        a: "Yes! We understand our patients have busy schedules or may travel from out of town. We offer initial virtual consultations to discuss your goals and provide preliminary recommendations before scheduling an in-person visit."
      },
      {
        q: "What should I expect during recovery?",
        a: "Recovery varies significantly by procedure. Non-surgical treatments often have little to no downtime, while surgical procedures may require 1-2 weeks of rest. You will receive detailed post-operative instructions, and our team will be available to support you throughout your entire healing journey."
      }
    ]
  },
  {
    category: "Surgical Procedures",
    questions: [
      {
        q: "What is the difference between a traditional Face Lift and a Deep Plane Face Lift?",
        a: "A traditional face lift typically tightens the skin and the superficial layer of muscle. A Deep Plane Face Lift goes beneath the muscle (SMAS layer) to lift the entire structural foundation of the face. This results in a much more natural, longer-lasting rejuvenation without the 'pulled' or 'tight' look."
      },
      {
        q: "Will there be visible scarring after surgery?",
        a: "Dr. Ganesan utilizes advanced, meticulous suturing techniques and places incisions strategically in natural skin creases, behind the hairline, or inside the mouth (for procedures like buccal fat removal) to ensure that any resulting scars are virtually invisible once fully healed."
      },
      {
        q: "Are the results of a Hair Transplant permanent?",
        a: "Yes. Hair transplant surgery moves genetically resistant hair follicles (usually from the back of the head) to thinning areas. Because these transplanted follicles retain their resistance to hair loss, the new growth is permanent."
      }
    ]
  },
  {
    category: "Non-Surgical Treatments",
    questions: [
      {
        q: "How long do Dermal Fillers and Botox last?",
        a: "Botox typically lasts between 3 to 4 months. Dermal fillers can last anywhere from 6 to 18 months depending on the type of filler used, the treatment area, and how your body naturally metabolizes the product."
      },
      {
        q: "What are Skin Boosters (like Profilo and Exosomes)?",
        a: "Unlike traditional fillers that add structural volume, Skin Boosters are injected to deeply hydrate, stimulate collagen, and improve overall skin texture and elasticity from the inside out, giving you a radiant, youthful glow."
      },
      {
        q: "Is there downtime for non-surgical procedures?",
        a: "Most non-surgical procedures have minimal to no downtime. You may experience slight redness, swelling, or bruising at the injection sites, but these typically resolve within a few days, and most patients return to their normal activities immediately."
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFaq = (index: string) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden flex flex-col">
      <div className="bg-[#25211e] w-full">
        <Navbar />
      </div>

      {/* Page Header */}
      <div className="relative w-full pt-16 pb-20 px-6 md:px-12 lg:px-24 bg-[#25211e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="hidden md:block h-[1px] w-[40px] bg-white mr-4"></div>
            <p className="text-sm tracking-widest font-light uppercase">Information</p>
            <div className="hidden md:block h-[1px] w-[40px] bg-white ml-4"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our procedures, consultations, and the patient experience.
          </p>
        </div>
      </div>

      <main className="flex-grow w-full bg-[#fcfbf9] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {faqs.map((section, sIndex) => (
            <div key={sIndex} className="mb-16">
              <h2 className="text-2xl font-medium tracking-tight text-[#1a1a1a] mb-8 border-b border-gray-200 pb-4">
                {section.category}
              </h2>
              
              <div className="space-y-4">
                {section.questions.map((faq, qIndex) => {
                  const uniqueIndex = \`\${sIndex}-\${qIndex}\`;
                  const isOpen = openIndex === uniqueIndex;
                  
                  return (
                    <div 
                      key={qIndex} 
                      className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-gray-300 transition-colors"
                    >
                      <button
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        onClick={() => toggleFaq(uniqueIndex)}
                      >
                        <span className="text-lg font-medium text-[#1a1a1a] pr-8">{faq.q}</span>
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#ebe9e4] text-[#1a1a1a]">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      
                      <div 
                        className={\`transition-all duration-300 ease-in-out \${
                          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }\`}
                      >
                        <div className="p-6 pt-0 text-gray-600 font-light leading-relaxed border-t border-gray-100">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="mt-16 text-center bg-[#ebe9e4] p-10 rounded-2xl">
            <h3 className="text-2xl font-light mb-4 text-[#1a1a1a]">Still have questions?</h3>
            <p className="text-gray-600 font-light mb-6 max-w-lg mx-auto">
              If you couldn't find the answer to your question, our dedicated patient coordination team is here to help.
            </p>
            <a href="/contact" className="inline-block border border-[#1a1a1a] text-white bg-[#1a1a1a] hover:bg-transparent hover:text-[#1a1a1a] transition-colors duration-300 px-8 py-3.5 text-sm tracking-widest uppercase text-center w-max">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
