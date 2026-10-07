/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
export default function Home() {
return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* Hero Wrapper - strictly contains the 100vh hero to prevent layout bleeding */}
      <div className="relative w-full h-screen text-white bg-[#25211e]">
        
        {/* Background Banner & Overlays for Hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/home-hero-banner.png"
          alt=""
          fetchPriority="high"
          className="w-full h-full object-cover object-[82%_center] lg:object-center opacity-85"
        />
        {/* Gradient overlays to match the dark taupe moody lighting but lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25211e]/80 via-[#25211e]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1715]/70 via-transparent to-transparent"></div>
        
        {/* Subtle warm light accent over the banner */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#6e5038]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>

      <Navbar />

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col justify-center items-center md:items-start min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-24 w-full text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg mt-12 flex flex-col items-center md:items-start"
        >


          {/* Heading */}
          <h1 className="font-cormorant text-[46px] leading-[1.05] md:text-[64px] lg:text-[72px] mb-6 md:mb-8 font-medium tracking-[-0.025em]">
            Dr. Shruthilaya Ganesan
          </h1>
          
          {/* Description */}
          <p className="text-gray-200 md:text-gray-300 leading-relaxed mb-10 md:mb-12 text-[15px] md:text-base font-light max-w-[340px] md:max-w-md">
            Maxillofacial surgeon specialised in Facial Aesthetics and Cosmetic Surgery, delivering structurally safe, functional, and completely natural-looking transformations.
          </p>
          

        </motion.div>
      </main>
      
      </div> {/* End of Hero Wrapper */}

      {/* Doctor Profile Section */}
      <section id="doctor-profile" className="relative z-10 w-full py-10 md:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#001d3d] rounded-3xl overflow-hidden flex flex-col-reverse lg:flex-row shadow-xl ring-1 ring-black/10 text-white">
            {/* Left Content */}
            <div className="relative w-full lg:w-[55%] p-7 sm:p-12 lg:p-14 xl:p-24 flex flex-col justify-center text-left bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d]">
              {/* Warm light accent, echoing the hero */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(110,80,56,0.25),transparent_60%)] pointer-events-none"></div>

              <div className="relative max-w-lg">
                <span className="block text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#c9a98a] mb-5">
                  Maxillofacial &amp; Cosmetic Surgeon
                </span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-medium mb-6">Dr. Shruthilaya Ganesan</h2>
                <div className="w-12 h-px bg-[#c9a98a] mb-8"></div>

                <p className="font-cormorant text-xl md:text-2xl font-medium leading-snug text-white/95 mb-5">
                  I am a Maxillofacial surgeon specialised in Facial Aesthetics and Cosmetic Surgery.
                </p>
                <p className="text-white/65 text-sm md:text-[15px] leading-relaxed font-light mb-8">
                  My primary background is in treating the complex structures of the face, jaw, and neck. Following that, I completed an advanced post-doctoral fellowship in Cosmetic Surgery at DY Patil University under the mentorship of the legendary pioneer Dr. Mohan Thomas.
                </p>

                <blockquote className="border-l border-[#c9a98a]/60 pl-5 mb-8">
                  <p className="font-cormorant italic text-lg md:text-xl leading-snug text-white/85">
                    This gives me a unique dual expertise. My practice bridges the gap between maxillofacial surgery and advanced aesthetic surgery.
                  </p>
                </blockquote>

                <span className="block text-[10px] tracking-[0.25em] uppercase text-white/50 mb-3">I specialize in</span>
                <ul className="flex flex-wrap gap-2">
                  {['Full-face Cosmetic Surgery', 'Rhinoplasty', 'Facial Contouring'].map((s) => (
                    <li key={s} className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-1.5 text-[11px] tracking-[0.12em] uppercase text-white/85">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full lg:w-[45%] h-[380px] sm:h-[480px] lg:h-auto lg:min-h-[500px] bg-white flex justify-end items-end overflow-hidden">
              <img
                src="/images/doctor-profile-hd.jpg"
                alt="Dr. Shruthilaya Ganesan"
                width={1200}
                height={1200}
                className="h-full w-auto max-w-full object-contain object-right-bottom lg:absolute lg:bottom-0 lg:inset-x-0 lg:h-[92%] lg:w-full lg:max-w-none lg:object-cover lg:object-[42%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Experience Section */}
      <section id="qualifications" className="relative z-10 w-full py-10 md:py-16 lg:py-24 px-4 sm:px-8 lg:px-12 xl:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#001d3d] rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-xl ring-1 ring-black/10 text-white">

            {/* Left Image */}
            <div className="relative w-full lg:w-[50%] h-[420px] sm:h-[520px] lg:h-auto overflow-hidden">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/IMG_1116.JPG.jpeg"
                alt="Qualifications and Experience"
                width={1080}
                height={1350}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-[0%_25%] lg:object-left"
              />
            </div>

            {/* Right Content */}
            <div className="relative w-full lg:w-[50%] p-7 sm:p-12 lg:p-14 xl:p-20 flex flex-col justify-center bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d]">
              {/* Warm light accent, echoing the hero */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(110,80,56,0.25),transparent_60%)] pointer-events-none"></div>
              <h2 className="relative font-cormorant text-4xl md:text-5xl font-medium mb-8">Qualifications & Experience</h2>
              <ul className="relative max-w-lg border-t border-white/15">
                {[
                  { title: 'Maxillofacial Surgery', detail: 'MAHER University, Chennai' },
                  { title: 'Advanced Institutional Fellowship in Cosmetic Surgery', detail: 'AFCS, DY Patil University, Mumbai' },
                  { title: 'Member, American Academy of Cosmetic Surgery', detail: 'AACS' },
                  { title: 'Member, Society of Hair Transplant Surgeons', detail: 'SHTS' },
                  { title: 'Association of Oral and Maxillofacial Surgeons of India', detail: 'AOMSI' },
                  { title: 'Specialised in Facial Aesthetics', detail: 'Surgical & Non-surgical' },
                ].map((item, i) => (
                  <li key={item.title} className="flex items-baseline gap-5 py-4 border-b border-white/15">
                    <span className="font-cormorant text-lg text-[#c9a98a] w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <p className="font-cormorant text-[19px] md:text-xl font-medium leading-snug text-white/95">{item.title}</p>
                      <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-white/50">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Procedures Split Section */}
      <section className="relative z-10 w-full pt-16 pb-16 md:pb-24 bg-white flex flex-col">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-[#001d3d]">Procedures</h2>
        </div>

        {/* 50/50 Split Images */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Surgical Block */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[650px] group overflow-hidden cursor-pointer">
            <img 
              src="/images/surgical-profile.jpg"
              alt="Side profile of a man's face and jawline"
              className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center z-10">
              <h3 className="font-cormorant text-5xl lg:text-6xl font-medium mb-4">Surgical</h3>
              <p className="text-sm font-light tracking-wide mb-10">The Complete Aesthetic Transformation.</p>
              <Link to="/surgical" className="border border-white rounded-[2rem] px-12 py-3 text-[10px] font-semibold tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 uppercase inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Non-Surgical Block */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[650px] group overflow-hidden cursor-pointer">
            <img 
              src="/images/non-surgical-profile.jpg"
              alt="Side profile of a woman's face and jawline"
              className="absolute inset-0 w-full h-full object-cover object-[20%_center] transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center z-10">
              <h3 className="font-cormorant text-5xl lg:text-6xl font-medium mb-4">Non-Surgical</h3>
              <p className="text-sm font-light tracking-wide mb-10">Noninvasive Methods. Transformative Results.</p>
              <Link to="/non-surgical" className="border border-white rounded-[2rem] px-12 py-3 text-[10px] font-semibold tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 uppercase inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full flex flex-col lg:flex-row lg:min-h-[500px] lg:h-[600px] bg-gradient-to-r from-[#25211e] via-[#0d1b2d] to-[#001d3d]"
      >
        {/* Left Content */}
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center px-7 py-14 sm:p-16 lg:p-20 xl:p-24 text-left">
          <div className="max-w-md w-full mx-auto lg:mr-12 xl:mr-24">
            <h3 className="font-cormorant text-2xl md:text-[28px] font-medium italic text-white/90 mb-6 leading-[1.5]">
              "I don't just look at the surface of your skin, I deeply understand the underlying facial bone and muscle architecture to ensure your cosmetic transformation is structurally safe, functional, and completely natural-looking."
            </h3>
            <p className="text-[12px] tracking-[0.2em] text-[#c9a98a] uppercase font-medium">
              — Dr. Shruthilaya Ganesan
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[480px] lg:h-full">
          <img 
            src="https://ik.imagekit.io/fdhgiehjz/123.jpeg?updatedAt=1789497477610" 
            alt="Dr. Shruthilaya Ganesan Quote Image" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.section>

      {/* The Feature Section */}
      <section className="relative z-10 w-full py-24 bg-white flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-4xl md:text-5xl font-medium text-[#001d3d]">The Feature</h2>
          </div>

          <div className="flex flex-col lg:flex-row bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/10">
            {/* Left side text */}
            <div className="w-full lg:w-1/2 p-7 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a98a] mb-6 block">
                Timely intervention makes a difference
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight text-white mb-6">
                Filler Complication Management
              </h3>
              <p className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light max-w-lg">
                A time-sensitive vascular complication following dermal filler injection was referred promptly for emergency care. Early recognition and decisive intervention allowed successful management and preservation of tissue viability.
              </p>
            </div>
            
            {/* Right side image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/WhatsApp%20Image%202026-09-12%20at%207.52.38%20PM.jpeg" 
                alt="Filler Complication Management" 
                className="w-full h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>

          {/* Second Feature Block (Chin & Jawline) */}
          <div className="flex flex-col lg:flex-row-reverse bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/10 mt-8">
            {/* Right side text (now on left visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 p-7 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a98a] mb-6 block">
                A refined approach
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight text-white mb-6">
                Define Your Chin, Refine Your Jawline
              </h3>
              <div className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Double chin reduction helps improve fullness beneath the chin, while a customised silicone chin implant enhances chin projection and definition. When combined, these procedures can create a sharper jawline, improve the facial profile, and restore better harmony between the chin, jaw, and surrounding facial features.
                </p>
                <p>
                  The treatment is carefully tailored to your facial proportions for a natural, well-balanced result.
                </p>
              </div>
            </div>
            
            {/* Left side image (now on right visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/bg.jpeg" 
                alt="Define Your Chin, Refine Your Jawline" 
                className="w-full h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>
        
          {/* Third Feature Block (Facial Slimming) */}
          <div className="flex flex-col lg:flex-row bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/10 mt-8">
            {/* Left side text */}
            <div className="w-full lg:w-1/2 p-7 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a98a] mb-6 block">
                A refined approach
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight text-white mb-6">
                Facial Slimming & Contouring
              </h3>
              <div className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  A refined approach to creating a more defined and sculpted facial profile. Buccal fat pad reduction is a minimally invasive procedure that reduces excess fullness in the lower cheeks, enhancing facial contours and bringing greater definition to the cheekbones and jawline.
                </p>
                <p>
                  The procedure is carefully tailored to each face to maintain natural proportions and avoid an over-hollowed appearance.
                </p>
                <p className="pt-2 font-medium text-white/90">
                  Ideal for: Individuals with naturally fuller cheeks who desire a more defined, contoured facial appearance.
                </p>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/888.jpeg" 
                alt="Facial Slimming & Contouring" 
                className="w-full h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>

        
          {/* Fourth Feature Block (Under-Eye Volume) */}
          <div className="flex flex-col lg:flex-row-reverse bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/10 mt-8">
            {/* Right side text (now on left visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 p-7 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a98a] mb-6 block">
                A subtle approach
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight text-white mb-6">
                Restoring Under-Eye Volume & Harmony
              </h3>
              <div className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  A subtle approach to restoring volume and creating a more rested, rejuvenated appearance.
                </p>
                <p>
                  Under-eye fat augmentation helps address tear-trough hollowness and volume loss by carefully restoring soft-tissue volume using the patient's own fat.
                </p>
                <p className="pt-2 font-medium text-white/90">
                  Goal - To soften the transition between the lower eyelid and cheek while maintaining natural facial contours and expression.
                </p>
              </div>
            </div>
            
            {/* Left side image (now on right visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/8899.jpeg" 
                alt="Restoring Under-Eye Volume & Harmony"
                className="w-full h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>

          {/* Fifth Feature Block (Lip Fillers) */}
          <div className="flex flex-col lg:flex-row bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/10 mt-8">
            {/* Left side text */}
            <div className="w-full lg:w-1/2 p-7 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a98a] mb-6 block">
                A natural approach
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight text-white mb-6">
                Lip Fillers – Keeping It Natural
              </h3>
              <div className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Lip fillers can restore lost volume, improve definition and balance mild asymmetry while keeping the lips in proportion with the rest of the face.
                </p>
                <p>
                  Hyaluronic acid filler is placed in small, measured amounts to refine the lip border, support the Cupid's bow and add soft fullness, without an overfilled appearance.
                </p>
                <p className="pt-2 font-medium text-white/90">
                  Ideal for: Thin, asymmetrical or ageing lips that need subtle enhancement while still looking like your own.
                </p>
              </div>
            </div>

            {/* Right side image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6">
              <img
                src="https://ik.imagekit.io/fdhgiehjz/IMG_1785.JPEG?tr=cm-extract,x-64,y-340,w-1792,h-470"
                alt="Lip Fillers – Keeping It Natural"
                className="w-full h-auto object-contain object-center rounded-xl bg-white"
              />
            </div>
          </div>

          {/* Sixth Feature Block (Lower Face Harmony) */}
          <div className="flex flex-col lg:flex-row-reverse bg-gradient-to-br from-[#25211e] via-[#0d1b2d] to-[#001d3d] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/10 mt-8">
            {/* Right side text (now on left visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 p-7 sm:p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a98a] mb-6 block">
                A balanced approach
              </span>
              <h3 className="font-cormorant text-3xl md:text-4xl lg:text-[40px] font-medium leading-tight text-white mb-6">
                Lower Face Harmony with Dermal Fillers
              </h3>
              <div className="text-white/70 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Lower-face harmony comes from the relationship between the lips, chin and jawline.
                </p>
                <p>
                  Carefully selected hyaluronic acid dermal fillers can refine lip proportions, support chin projection and soften uneven transitions to create a more balanced contour.
                </p>
                <p className="pt-2 font-medium text-white/90">
                  Goal - Subtle refinement tailored to your facial structure that preserves your individual features.
                </p>
              </div>
            </div>

            {/* Left side image (now on right visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-6">
              <img
                src="https://ik.imagekit.io/fdhgiehjz/IMG_1784.JPEG?tr=cm-extract,x-300,y-330,w-1320,h-470"
                alt="Lower Face Harmony with Dermal Fillers"
                className="w-full h-auto object-contain object-center rounded-xl bg-white"
              />
            </div>
          </div>

        </div>
      </section>

      <Testimonials />
      <InstagramFeed />
      <CTA />
      <Footer white />
    </div>
  );
}
