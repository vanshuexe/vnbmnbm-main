import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
const clinics = [
  {
    name: 'Clinic 1: Skin Lab Studio',
    address: 'No. 166, Parijath, Sathyadev Enclave, Race Course, Coimbatore, Tamil Nadu 641018',
    hours: ['Mon - Sun, 10:00 am - 7:30 pm'],
    directionsUrl: 'https://share.google/X54rfKMZyTi7j0lSV',
    mapEmbedUrl: 'https://www.google.com/maps?q=SkinLab+by+Dr.+Jamuna+Pai,+Sathyadev+Enclave,+Race+Course,+Coimbatore+641018&z=16&output=embed',
  },
  {
    name: 'Clinic 2: Rootwise Aesthetic Clinic',
    address: '31, E TV Swamy Rd, R.S. Puram, Coimbatore, Tamil Nadu 641002',
    hours: ['Mon - Sat', 'Morning: 9:30 am - 10:30 am', 'Evening: 7:30 pm - 8:30 pm'],
    directionsUrl: 'https://share.google/4zPrH7dKJrDc9syyg',
    mapEmbedUrl: 'https://www.google.com/maps?q=Rootwise+Aesthetics,+31+E+TV+Swamy+Rd,+R.S.+Puram,+Coimbatore+641002&z=16&output=embed',
  },
];

export default function Contact() {
return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden">
          
      {/* Hero Wrapper - strictly contains the 100vh hero to prevent layout bleeding */}
      <div className="relative w-full h-screen text-white bg-[#25211e]">
            
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
      <main className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-80px)] px-6 md:px-12 lg:px-24 w-full text-left pb-24">
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
      </main>
      
      </div> {/* End of Hero Wrapper */}

      {/* Intro Banner Section */}
      <section className="relative z-10 w-full py-16 md:py-24 px-8 md:px-12 lg:px-24 bg-[#f7f6f2] text-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
           <div className="h-[2px] w-[24px] bg-[#1a1a1a] mb-6"></div>
           <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed tracking-wide">
             We'd love to hear from you. Get in touch to schedule your consultation or ask any questions.
           </h2>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative z-10 w-full pb-24 px-4 md:px-12 lg:px-24 bg-[#f7f6f2] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-[#e8e6e1] rounded-2xl overflow-hidden shadow-sm">
            {/* Left Content (Contact Info) */}
            <div className="w-full lg:w-5/12 p-7 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#d5cfc5] text-[#1a1a1a]">
              <h3 className="text-3xl md:text-4xl font-light mb-12 tracking-wide">
                Get in Touch
              </h3>
              
              <div className="space-y-8 font-light">
                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">Locations</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Clinic 1: Skin Lab Studio</strong><br />
                    No. 166, Parijath, Sathyadev Enclave,<br />
                    Race Course, Coimbatore, Tamil Nadu 641018<br />
                    <a href="https://share.google/X54rfKMZyTi7j0lSV" target="_blank" rel="noreferrer" className="inline-block mt-1 text-sm underline underline-offset-4 hover:text-black transition-colors">Get directions</a>
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Clinic 2: Rootwise Aesthetic Clinic</strong><br />
                    31, E TV Swamy Rd, R.S. Puram,<br />
                    Coimbatore, Tamil Nadu 641002<br />
                    <a href="https://share.google/4zPrH7dKJrDc9syyg" target="_blank" rel="noreferrer" className="inline-block mt-1 text-sm underline underline-offset-4 hover:text-black transition-colors">Get directions</a>
                  </p>

                </div>
                
                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">Contact</h4>
                  <p className="text-gray-800 leading-relaxed">
                    <a href="tel:+919444615554" className="hover:text-black transition-colors">+91 94446 15554</a><br />
                    <a href="mailto:dr.shruthilayaganesan@gmail.com" className="hover:text-black transition-colors">dr.shruthilayaganesan@gmail.com</a>
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">Hours</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Clinic 1:</strong> Mon - Sun, 10:00 am - 7:30 pm<br />
                    <strong>Clinic 2:</strong> Mon - Sat<br />
                    Morning: 9:30 am - 10:30 am<br />
                    Evening: 7:30 pm - 8:30 pm
                  </p>

                </div>
              </div>
            </div>
            
            {/* Right Content (Form) */}
            <div className="w-full lg:w-7/12 p-7 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#fcfbf9]">
              <h3 className="text-2xl font-light mb-8 tracking-wide">Send a Message</h3>
              <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-gray-500">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors" placeholder="Enter your first name" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-gray-500">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors" placeholder="Enter your email" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-gray-500">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-gray-500">Procedure of Interest</label>
                  <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors appearance-none text-gray-500 font-light">
                    <option value="">Select a procedure</option>
                    <option value="surgical">Surgical Procedures</option>
                    <option value="non-surgical">Non-Surgical Procedures</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase mb-2 text-gray-500">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="self-start mt-4 bg-[#1a1a1a] text-white rounded-full px-10 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors">
                  SUBMIT REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Maps */}
      <section className="relative z-10 w-full pb-24 px-4 md:px-12 lg:px-24 bg-[#f7f6f2] text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 text-gray-500">Find Us</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10">
            {clinics.map((clinic) => (
              <div key={clinic.name} className="flex flex-col">
                <h3 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-light tracking-wide mb-2">{clinic.name}</h3>
                <p className="text-gray-700 font-light leading-relaxed mb-6 lg:min-h-[3.25rem]">{clinic.address}</p>
                <div className="w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden shadow-sm border border-black/5 mb-6">
                  <iframe
                    title={`Map of ${clinic.name}`}
                    src={clinic.mapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    {clinic.hours.map((line, i) => (
                      <span key={line}>{i > 0 && <br />}{line}</span>
                    ))}
                  </p>
                  <a
                    href={clinic.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="self-start sm:self-auto shrink-0 border border-[#1a1a1a] rounded-full px-8 py-3 text-[10px] font-semibold tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

