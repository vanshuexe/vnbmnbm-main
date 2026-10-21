import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingCard, { clinicOptions } from '../components/BookingCard';
import ClinicsSection from '../components/ClinicsSection';

export default function Contact() {
  const [clinic, setClinic] = useState(clinicOptions[0].value);
  // "Book here" picks the clinic and scrolls up to the booking card.
  const bookAt = (value: string) => {
    setClinic(value);
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero - clinic photo with the site's navy/charcoal treatment */}
      <div className="relative w-full h-[100svh] min-h-[560px] text-white bg-[#001d3d]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://ik.imagekit.io/fdhgiehjz/IMG_9914.HEIC?tr=w-1600"
            alt="Consultation room at the clinic"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#25211e]/85 via-[#0d1b2d]/55 to-[#001d3d]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001d3d]/80 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(110,80,56,0.25),transparent_60%)] pointer-events-none"></div>
        </div>

        <Navbar />

        <div className="relative z-10 flex flex-col justify-end min-h-[calc(100svh-80px)] px-6 md:px-12 lg:px-24 w-full pb-16 md:pb-24">
          <div className="max-w-xl">
            <div className="flex items-center mb-5">
              <div className="hidden md:block h-px w-10 bg-[#c9a98a] mr-4"></div>
              <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold uppercase text-[#c9a98a]">Get in touch</p>
            </div>
            <h1 className="font-cormorant text-6xl md:text-7xl font-medium leading-[1.05] mb-5">Contact</h1>
            <p className="text-white/75 text-base md:text-lg font-light leading-relaxed">
              Begin your aesthetic journey with us — book a consultation at either of our Coimbatore clinics.
            </p>
          </div>
        </div>
      </div>

      {/* Doctor + booking - same card style as the home page doctor profile */}
      <section className="w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-24 py-12 md:py-20">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/10 flex flex-col xl:flex-row bg-[#001d3d]">
          {/* Photo */}
          <div className="relative w-full xl:w-[42%] h-[360px] sm:h-[440px] xl:h-auto bg-white flex justify-center xl:justify-end items-end overflow-hidden">
            <img
              src="/images/dr-shruthilaya-ganesan.jpg"
              alt="Dr. Shruthilaya Ganesan, maxillofacial and cosmetic surgeon in Coimbatore"
              width={1200}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full w-auto max-w-full object-contain object-bottom xl:absolute xl:bottom-0 xl:inset-x-0 xl:h-[92%] xl:w-full xl:max-w-none xl:object-cover xl:object-[42%_center]"
            />
            <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-[#001d3d]/90 backdrop-blur-sm border-l-2 border-[#c9a98a] px-4 py-3 text-white">
              <p className="font-cormorant text-lg leading-tight">Maxillofacial + Cosmetic</p>
              <p className="text-[11px] text-white/60 mt-0.5">Dual training, one surgeon</p>
            </div>
          </div>

          {/* Name + booking form */}
          <div className="relative w-full xl:w-[58%] px-5 py-8 sm:p-12 xl:p-16 bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(110,80,56,0.25),transparent_60%)] pointer-events-none"></div>
            <div className="relative max-w-2xl mx-auto xl:mx-0">
              <p className="text-[10px] md:text-xs tracking-[0.25em] font-semibold uppercase text-[#c9a98a] mb-5">Maxillofacial &amp; Cosmetic Surgeon · Coimbatore</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-medium leading-tight mb-5">
                Dr. Shruthilaya <em className="text-[#c9a98a] font-normal">Ganesan</em>
              </h2>
              <div className="w-12 h-px bg-[#c9a98a] mb-6"></div>
              <p className="text-white/70 text-sm md:text-[15px] font-light leading-relaxed max-w-lg mb-8">
                Facial aesthetics planned from the bone outwards — so every change is structurally safe, functional and still unmistakably you.
              </p>
              <BookingCard clinic={clinic} onClinicChange={setClinic} />
            </div>
          </div>
        </div>
      </section>

      <ClinicsSection onBook={bookAt} />

      <Footer white />
    </div>
  );
}
