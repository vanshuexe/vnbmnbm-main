import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Book() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    procedure: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you! Your consultation request has been submitted. Our team will contact you shortly.");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      procedure: '',
      message: ''
    });
  };

  return (
    <div className="relative min-h-screen bg-[#ebe9e4] font-sans overflow-x-hidden">
      <div className="bg-[#25211e]"><Navbar /></div>

      <main className="relative z-10 w-full pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/3 flex flex-col pt-8">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6 block">
              Consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] leading-tight mb-8">
              Book an Appointment
            </h1>
            <p className="text-gray-800 font-light leading-relaxed mb-12">
              Embark on your aesthetic journey with Dr. Shruthilaya Ganesan. Fill out the form below to request a private consultation at our state-of-the-art facility.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-xs tracking-wider mb-2 uppercase text-[#1a1a1a]">Locations</h4>
                <p className="text-sm font-light text-gray-600 mb-2"><strong>Clinic 1: Skin Lab</strong><br />Coimbatore, Tamil Nadu</p>
                <p className="text-sm font-light text-gray-600"><strong>Clinic 2: Rootwise Aesthetic Clinic</strong><br />Tamil Nadu</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-xs tracking-wider mb-2 uppercase text-[#1a1a1a]">Contact</h4>
                <p className="text-sm font-light text-gray-600">+91 94446 15554</p>
                <p className="text-sm font-light text-gray-600">dr.shruthilayaganesan@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-xs tracking-wider mb-2 uppercase text-[#1a1a1a]">Hours</h4>
                <p className="text-sm font-light text-gray-600">Monday – Saturday</p>
                <p className="text-sm font-light text-gray-600">10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="w-full lg:w-2/3 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] shadow-sm border border-white">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none font-light text-[#1a1a1a]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none font-light text-[#1a1a1a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none font-light text-[#1a1a1a]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none font-light text-[#1a1a1a]"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="procedure" className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Procedure of Interest</label>
                <select 
                  id="procedure" 
                  name="procedure" 
                  value={formData.procedure}
                  onChange={handleChange}
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none font-light text-[#1a1a1a] appearance-none"
                >
                  <option value="" disabled>Select a treatment...</option>
                  <option value="Surgical Rejuvenation">Surgical Rejuvenation</option>
                  <option value="Non-Surgical Treatments">Non-Surgical Treatments</option>
                  <option value="Rhinoplasty">Rhinoplasty</option>
                  <option value="Facial Contouring">Facial Contouring</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-2">Message or Questions</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#1a1a1a] transition-colors rounded-none font-light text-[#1a1a1a] resize-none"
                ></textarea>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#1a1a1a] text-[#ebe9e4] rounded-[2rem] px-12 py-4 text-xs font-semibold tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 uppercase"
                >
                  Request Appointment
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
