
import Navbar from '../components/Navbar';
import { useState } from 'react';
import BookingCard, { clinicOptions } from '../components/BookingCard';
import ClinicsSection from '../components/ClinicsSection';

import Footer from '../components/Footer';
export default function Contact() {
  const [clinic, setClinic] = useState(clinicOptions[0].value);
  // "Book here" picks the clinic and scrolls up to the booking card.
  const bookAt = (value: string) => {
    setClinic(value);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

return (
    <div className="relative min-h-screen bg-[#f7f6f2] font-sans overflow-x-hidden">
          
      {/* Hero Wrapper - strictly contains the 100vh hero to prevent layout bleeding */}
      <div className="relative w-full h-[100svh] min-h-[560px] text-white bg-[#25211e]">
            
        {/* Background Image & Overlays for Hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://ik.imagekit.io/fdhgiehjz/IMG_9914.HEIC?tr=w-1600" 
          alt="Clinic Environment"
          className="w-full h-full object-cover object-center opacity-70 scale-105"
        />
        {/* Gradient overlays to match the dark taupe moody lighting but lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25211e]/80 via-[#25211e]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1715]/70 via-transparent to-transparent"></div>
            
        {/* Subtle warm light accent over the video */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#6e5038]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>

      <Navbar />

      {/* Main Hero Content for Contact Page */}
      <div className="relative z-10 flex flex-col justify-end min-h-[calc(100svh-80px)] px-6 md:px-12 lg:px-24 w-full text-left pb-16 md:pb-24">
        <div className="max-w-xl">
          {/* Heading */}
          <h1 className="text-[40px] leading-[1.1] md:text-5xl lg:text-7xl mb-4 md:mb-6 font-light tracking-tight">
            Contact
          </h1>
          
          {/* Description */}
          <p className="text-gray-200 md:text-white leading-relaxed text-[15px] md:text-lg font-light tracking-wide">
            Begin your aesthetic journey with us.
          </p>
        </div>
      </div>
      
      </div> {/* End of Hero Wrapper */}


      {/* Hero: doctor + booking card */}
      <section className="relative w-full bg-[#f2e2dc] px-4 sm:px-8 lg:px-12 xl:px-24 pt-10 lg:pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          {/* Photo in arch */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-t-full bg-[#dfe7f0] overflow-hidden">
              <img
                src="/images/dr-shruthilaya-ganesan.jpg"
                alt="Dr. Shruthilaya Ganesan, maxillofacial and cosmetic surgeon in Coimbatore"
                width={1200}
                height={1200}
                className="absolute inset-x-0 bottom-0 w-full h-[92%] object-cover object-[45%_top] mix-blend-multiply"
              />
            </div>
            <div className="absolute left-0 sm:left-4 lg:-left-6 bottom-10 bg-[#faf6f3] border-l-2 border-[#a07c5a] px-5 py-4 shadow-lg">
              <p className="font-cormorant text-xl text-[#12284a]">Maxillofacial + Cosmetic</p>
              <p className="text-xs text-gray-600 mt-1">Dual training, one surgeon</p>
            </div>
          </div>

          {/* Name + booking card */}
          <div className="order-1 lg:order-2 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 pb-4 lg:pb-16">
            <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold uppercase text-[#8a6d52] mb-4">Maxillofacial &amp; Cosmetic Surgeon · Coimbatore</p>
            <h2 className="font-cormorant font-medium leading-[0.95] text-[#12284a] text-5xl sm:text-6xl xl:text-7xl mb-6">
              Dr. Shruthilaya<br /><em className="text-[#a07c5a] font-normal">Ganesan</em>
            </h2>
            <p className="text-[#3c4a5c] text-base leading-relaxed max-w-md mb-8">
              Facial aesthetics planned from the bone outwards — so every change is structurally safe, functional and still unmistakably you.
            </p>
            <BookingCard clinic={clinic} onClinicChange={setClinic} />
          </div>
        </div>
      </section>

      <ClinicsSection onBook={bookAt} />

      {/* Global styles for hiding scrollbar in the carousel */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Footer />
    </div>
  );
}

