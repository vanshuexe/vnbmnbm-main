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
export default function Home() {
return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden">
      
      {/* Hero Wrapper - strictly contains the 100vh hero to prevent layout bleeding */}
      <div className="relative w-full h-screen text-white bg-[#25211e]">
        
        {/* Background Video & Overlays for Hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover object-center opacity-85 scale-110"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlays to match the dark taupe moody lighting but lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25211e]/80 via-[#25211e]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1715]/70 via-transparent to-transparent"></div>
        
        {/* Subtle warm light accent over the video */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#6e5038]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>

      <Navbar />

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col justify-center items-center md:items-start min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-24 w-full text-center md:text-left">
        <div className="max-w-lg mt-12 flex flex-col items-center md:items-start">
          {/* Eyebrow */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="hidden md:block h-[12px] w-[2px] bg-white mr-3"></div>
            <p className="text-sm tracking-wider font-light">Rootwise Aesthetic Clinic</p>
          </div>
          
          {/* Heading */}
          <h1 className="text-[40px] leading-[1.1] md:text-5xl lg:text-6xl mb-6 md:mb-8 font-light tracking-tight">
            Dr. Shruthilaya Ganesan
          </h1>
          
          {/* Description */}
          <p className="text-gray-200 md:text-gray-300 leading-relaxed mb-10 md:mb-12 text-[15px] md:text-base font-light max-w-[340px] md:max-w-md">
            Maxillofacial surgeon specialised in Facial Aesthetics and Cosmetic Surgery, delivering structurally safe, functional, and completely natural-looking transformations.
          </p>
          

        </div>
      </main>
      
      </div> {/* End of Hero Wrapper */}

      {/* Doctor Profile Section */}
      <section className="relative z-10 w-full py-12 md:py-24 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f7f6f2] rounded-3xl overflow-hidden flex flex-col-reverse md:flex-row shadow-sm text-[#1a1a1a]">
            {/* Left Content */}
            <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col justify-center text-left">
              <h2 className="text-4xl md:text-5xl font-light mb-6 md:mb-8">Dr. Shruthilaya Ganesan</h2>
              <p className="text-gray-700 text-sm leading-relaxed font-light mb-10 md:mb-12 max-w-lg">
                I am a Maxillofacial surgeon specialised in Facial Aesthetics and Cosmetic Surgery. My primary background is in treating the complex structures of the face, jaw, and neck. Following that, I completed an advanced post-doctoral fellowship in Cosmetic Surgery at DY Patil University under the mentorship of the legendary pioneer Dr. Mohan Thomas.<br/><br/>This gives me a unique dual expertise. My practice bridges the gap between maxillofacial surgery and advanced aesthetic surgery. I specialize in full-face surgical and non-surgical rejuvenation, rhinoplasty, and facial contouring.
              </p>
              <div>
                <button className="bg-[#d6c9be] text-[#1a1a1a] px-8 py-4 rounded-full text-[10px] font-semibold tracking-[0.2em] hover:bg-[#c4b5a8] transition-colors uppercase">
                  LEARN MORE
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-[45%] h-[350px] md:h-auto min-h-[350px] md:min-h-[500px] bg-[#ebe7e0] flex justify-center items-end overflow-hidden">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/66-removebg-preview.png?updatedAt=1789395327695" 
                alt="Dr. Shruthilaya Ganesan" 
                className="h-[92%] w-auto object-contain object-bottom drop-shadow-md transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Split Section */}
      <section className="relative z-10 w-full pt-16 pb-0 bg-[#ebe9e4] flex flex-col">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a]">Procedures</h2>
        </div>

        {/* 50/50 Split Images */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Surgical Block */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[650px] group overflow-hidden cursor-pointer">
            <img 
              src="https://ik.imagekit.io/fdhgiehjz/65545443.jpeg?updatedAt=1789497478699" 
              alt="Surgical Procedures" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-[#3a281c]/50 group-hover:bg-[#3a281c]/60 transition-colors duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center z-10">
              <h3 className="text-4xl md:text-5xl font-light mb-4">Surgical</h3>
              <p className="text-sm font-light tracking-wide mb-10">The Complete Aesthetic Transformation.</p>
              <Link to="/surgical" className="border border-white rounded-[2rem] px-12 py-3 text-[10px] font-semibold tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 uppercase inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Non-Surgical Block */}
          <div className="relative w-full md:w-1/2 h-[500px] md:h-[650px] group overflow-hidden cursor-pointer">
            <img 
              src="https://ik.imagekit.io/fdhgiehjz/667677765.jpeg?updatedAt=1789497478744" 
              alt="Non-Surgical Procedures" 
              className="absolute inset-0 w-full h-full object-cover object-[center_30%] transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Tint overlay */}
            <div className="absolute inset-0 bg-[#4a4642]/50 group-hover:bg-[#4a4642]/60 transition-colors duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center z-10">
              <h3 className="text-4xl md:text-5xl font-light mb-4">Non-Surgical</h3>
              <p className="text-sm font-light tracking-wide mb-10">Noninvasive Methods. Transformative Results.</p>
              <Link to="/non-surgical" className="border border-white rounded-[2rem] px-12 py-3 text-[10px] font-semibold tracking-[0.2em] hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 uppercase inline-block">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Renowned Results Section */}
      <section id="qualifications" className="relative z-10 w-full py-24 px-8 md:px-12 lg:px-24 bg-[#ebe9e4]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f7f6f2] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm text-[#1a1a1a]">
            
            {/* Left Image */}
            <div className="w-full md:w-[50%] h-[400px] md:h-auto min-h-[500px]">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/nav.PNG" 
                alt="Qualifications and Experience" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[50%] p-12 lg:p-16 xl:p-24 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-light mb-8">Qualifications & Experience</h2>
              <ul className="text-gray-700 text-sm leading-relaxed font-light mb-12 max-w-lg space-y-3 list-disc pl-4">
                <li>Maxillofacial surgeon (MAHER University, Chennai)</li>
                <li>Advanced institutional fellowship training in Cosmetic surgery (AFCS, DY Patil University, Mumbai)</li>
                <li>Member of American Academy of Cosmetic Surgery (AACS)</li>
                <li>Member of Society of Hair Transplant Surgeons (SHTS)</li>
                <li>Association of Oral and Maxillofacial Surgeons of India (AOMSI)</li>
                <li>Specialised in Surgical and Non-surgical Facial Aesthetics</li>
              </ul>
              <div>
                <button className="bg-[#d6c9be] text-[#1a1a1a] px-8 py-4 rounded-full text-[10px] font-semibold tracking-[0.2em] hover:bg-[#c4b5a8] transition-colors uppercase">
                  LEARN MORE
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative z-10 w-full flex flex-col md:flex-row min-h-[500px] md:h-[600px] bg-[#f4f3ef]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center p-12 md:p-24 text-left">
          <div className="max-w-md w-full mx-auto md:mr-12 xl:mr-24">
            <h3 className="text-xl md:text-2xl font-light italic text-[#1a1a1a] mb-6 leading-[1.6]">
              "I don't just look at the surface of your skin, I deeply understand the underlying facial bone and muscle architecture to ensure your cosmetic transformation is structurally safe, functional, and completely natural-looking."
            </h3>
            <p className="text-[13px] tracking-wide text-gray-800 uppercase font-medium">
              — Dr. Shruthilaya Ganesan
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-full">
          <img 
            src="https://ik.imagekit.io/fdhgiehjz/123.jpeg?updatedAt=1789497477610" 
            alt="Dr. Shruthilaya Ganesan Quote Image" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* The Feature Section */}
      <section className="relative z-10 w-full py-24 bg-[#f7f6f2] flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a]">The Feature</h2>
          </div>

          <div className="flex flex-col lg:flex-row bg-[#e8e6e1] rounded-[2rem] overflow-hidden shadow-sm">
            {/* Left side text */}
            <div className="w-full lg:w-1/2 p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-6 block">
                Timely intervention makes a difference
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-light leading-tight text-[#1a1a1a] mb-6">
                Filler Complication Management
              </h3>
              <p className="text-gray-800 text-sm md:text-[15px] leading-relaxed font-light max-w-lg">
                A time-sensitive vascular complication following dermal filler injection was referred promptly for emergency care. Early recognition and decisive intervention allowed successful management and preservation of tissue viability.
              </p>
            </div>
            
            {/* Right side image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden group">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/WhatsApp%20Image%202026-09-12%20at%207.52.38%20PM.jpeg" 
                alt="Filler Complication Management" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Second Feature Block (Chin & Jawline) */}
          <div className="flex flex-col lg:flex-row-reverse bg-[#e8e6e1] rounded-[2rem] overflow-hidden shadow-sm mt-8">
            {/* Right side text (now on left visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-6 block">
                A refined approach
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-light leading-tight text-[#1a1a1a] mb-6">
                Define Your Chin, Refine Your Jawline
              </h3>
              <div className="text-gray-800 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  Double chin reduction helps improve fullness beneath the chin, while a customised silicone chin implant enhances chin projection and definition. When combined, these procedures can create a sharper jawline, improve the facial profile, and restore better harmony between the chin, jaw, and surrounding facial features.
                </p>
                <p>
                  The treatment is carefully tailored to your facial proportions for a natural, well-balanced result.
                </p>
              </div>
            </div>
            
            {/* Left side image (now on right visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden group">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/bg.jpeg" 
                alt="Define Your Chin, Refine Your Jawline" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>
        
          {/* Third Feature Block (Facial Slimming) */}
          <div className="flex flex-col lg:flex-row bg-[#e8e6e1] rounded-[2rem] overflow-hidden shadow-sm mt-8">
            {/* Left side text */}
            <div className="w-full lg:w-1/2 p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-6 block">
                A refined approach
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-light leading-tight text-[#1a1a1a] mb-6">
                Facial Slimming & Contouring
              </h3>
              <div className="text-gray-800 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  A refined approach to creating a more defined and sculpted facial profile. Buccal fat pad reduction is a minimally invasive procedure that reduces excess fullness in the lower cheeks, enhancing facial contours and bringing greater definition to the cheekbones and jawline.
                </p>
                <p>
                  The procedure is carefully tailored to each face to maintain natural proportions and avoid an over-hollowed appearance.
                </p>
                <p className="pt-2 font-medium">
                  Ideal for: Individuals with naturally fuller cheeks who desire a more defined, contoured facial appearance.
                </p>
              </div>
            </div>
            
            {/* Right side image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden group">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/888.jpeg" 
                alt="Facial Slimming & Contouring" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

        
          {/* Fourth Feature Block (Under-Eye Volume) */}
          <div className="flex flex-col lg:flex-row-reverse bg-[#e8e6e1] rounded-[2rem] overflow-hidden shadow-sm mt-8">
            {/* Right side text (now on left visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 p-12 md:p-16 xl:p-20 flex flex-col justify-center">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-600 mb-6 block">
                A subtle approach
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-[32px] font-light leading-tight text-[#1a1a1a] mb-6">
                Restoring Under-Eye Volume & Harmony
              </h3>
              <div className="text-gray-800 text-sm md:text-[15px] leading-relaxed font-light max-w-lg space-y-4">
                <p>
                  A subtle approach to restoring volume and creating a more rested, rejuvenated appearance.
                </p>
                <p>
                  Under-eye fat augmentation helps address tear-trough hollowness and volume loss by carefully restoring soft-tissue volume using the patient's own fat.
                </p>
                <p className="pt-2 font-medium">
                  Goal - To soften the transition between the lower eyelid and cheek while maintaining natural facial contours and expression.
                </p>
              </div>
            </div>
            
            {/* Left side image (now on right visually due to row-reverse) */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden group">
              <img 
                src="https://ik.imagekit.io/fdhgiehjz/8899.jpeg" 
                alt="Restoring Under-Eye Volume & Harmony" 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </section>

      <Testimonials />
      <InstagramFeed />
      <CTA />
      <Footer />
    </div>
  );
}
