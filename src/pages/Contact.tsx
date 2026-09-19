import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
export default function Contact() {
return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden">
          
      {/* Hero Wrapper - strictly contains the 100vh hero to prevent layout bleeding */}
      <div className="relative w-full h-screen text-white bg-[#25211e]">
            
        {/* Background Image & Overlays for Hero */}
        <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://ik.imagekit.io/fdhgiehjz/IMG_9914.HEIC" 
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
            <div className="w-full lg:w-5/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#d5cfc5] text-[#1a1a1a]">
              <h3 className="text-3xl md:text-4xl font-light mb-12 tracking-wide">
                Get in Touch
              </h3>
              
              <div className="space-y-8 font-light">
                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">Locations</h4>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong>Clinic 1: Skin Lab</strong><br />
                    Coimbatore, Tamil Nadu
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Clinic 2: Rootwise Aesthetic Clinic</strong><br />
                    Tamil Nadu
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
                    <strong>Clinic 1:</strong><br />
                    11:00 am - 7:00 pm
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <strong>Clinic 2:</strong><br />
                    9:00 am - 10:30 am<br />
                    7:30 pm - 8:30 pm
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Content (Form) */}
            <div className="w-full lg:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-[#fcfbf9]">
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

      

      {/* Global styles for hiding scrollbar in the carousel */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Footer (Matches Home Page) */}
      <footer className="bg-[#ebe9e4] pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between pb-16 border-b border-gray-300 gap-12 md:gap-8">
          
          {/* Left Column: Newsletter & Social */}
          <div className="w-full md:w-5/12 flex flex-col">

            
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/drshruthilayaganesan?igsi=bzdhMWN2YzlzZDJv&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="https://www.linkedin.com/in/dr-shruthilaya-ganesan-23626821b?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Middle Column: Address & Contact */}
          <div className="w-full md:w-3/12 flex flex-col mt-2 md:mt-0">
            <h4 className="font-semibold text-xs tracking-wider mb-6 uppercase">Locations</h4>
            <div className="text-sm font-light text-gray-700 space-y-4 mb-8">
              <div>
                <p className="font-medium text-gray-900">Clinic 1: Skin Lab</p>
                <p>Coimbatore, Tamil Nadu</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Clinic 2: Rootwise Aesthetic Clinic</p>
                <p>Tamil Nadu</p>
              </div>
            </div>
            <div className="text-sm font-light text-gray-700 space-y-1">
              <p>+91 94446 15554</p>
              <p>dr.shruthilayaganesan@gmail.com</p>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="w-full md:w-2/12 flex flex-col mt-2 md:mt-0">
            <h4 className="font-semibold text-xs tracking-wider mb-6">Learn More</h4>
            <ul className="text-sm font-light text-gray-700 space-y-6">
              <li><a href="#" className="hover:text-[#1a1a1a] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#1a1a1a] transition-colors">Sitemap</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 pt-8 font-light">
          <p>© Rootwise Aesthetic Clinic 2025 All Rights Reserved</p>
          <div className="flex space-x-12 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Cookies</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Accessibility</a>
            <a href="#" className="hover:text-[#1a1a1a] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
