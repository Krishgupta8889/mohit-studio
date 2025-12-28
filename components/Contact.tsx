
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', type: 'Wedding Celebration', message: '' });
  const [status, setStatus] = useState<null | 'success' | 'error' | 'phone_error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clean phone number (remove non-digits)
    const cleanedPhone = formData.phone.replace(/\D/g, '');

    if (!formData.name || !formData.phone || !formData.message) {
      setStatus('error');
      return;
    }

    // Validate 10 digits
    if (cleanedPhone.length !== 10) {
      setStatus('phone_error');
      return;
    }

    // Format the WhatsApp message
    const whatsappNumber = '917772089521';
    const message = `Hello Mohit Studio! 👋
    
*New Inquiry via Website*
--------------------------
*Name:* ${formData.name}
*Phone:* ${cleanedPhone}
*Looking for:* ${formData.type}
*Message:* ${formData.message}

--------------------------
Sent from Mohit Studio Portfolio`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
    setFormData({ name: '', phone: '', type: 'Wedding Celebration', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-black uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 uppercase serif-font">Let's Create <br /><span className="text-zinc-600">Something Beautiful</span></h2>
            <p className="text-zinc-600 mb-12 text-lg">
              Every celebration is unique. We are here to capture the colors, emotions, and traditions of your special day.
            </p>

            <div className="space-y-10">
              <a 
                href="https://maps.app.goo.gl/aZ6NBvkaA1zMPgiVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start group cursor-pointer"
              >
                <div className="bg-zinc-50 p-4 rounded-xl mr-6 group-hover:bg-black transition-colors duration-300">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 text-sm uppercase tracking-widest">Our Studio</h4>
                  <p className="text-zinc-500 group-hover:text-black transition-colors">Bhursi Road, Khannoudhi 484770<br />Madhya Pradesh, India</p>
                </div>
              </a>

              <a 
                href="tel:+917581907594"
                className="flex items-start group cursor-pointer"
              >
                <div className="bg-zinc-50 p-4 rounded-xl mr-6 group-hover:bg-black transition-colors duration-300">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 text-sm uppercase tracking-widest">Call Us</h4>
                  <p className="text-zinc-500 font-semibold text-lg group-hover:text-black transition-colors">+91 7581907594</p>
                </div>
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=1mohitgupta7772@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group cursor-pointer"
              >
                <div className="bg-zinc-50 p-4 rounded-xl mr-6 group-hover:bg-black transition-colors duration-300">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1 text-sm uppercase tracking-widest">Email</h4>
                  <p className="text-zinc-500 group-hover:text-black transition-colors">1mohitgupta7772@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-zinc-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-3xl font-bold text-zinc-900 mb-8 serif-font">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-transparent px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-black focus:bg-white transition-all"
                    placeholder="E.g. Rahul Sharma"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full bg-zinc-50 border-2 border-transparent px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-black focus:bg-white transition-all"
                    placeholder="10-digit Mobile No."
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">I am looking for...</label>
                <div className="relative">
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-zinc-50 border-2 border-transparent px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-black focus:bg-white transition-all appearance-none"
                  >
                    <option>Wedding Celebration</option>
                    <option>Engagement / Pre-Wedding</option>
                    <option>Family Portrait</option>
                    <option>Event Photography</option>
                    <option>Others</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">Your Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-50 border-2 border-transparent px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-black focus:bg-white transition-all resize-none"
                  placeholder="Share details about your special occasion..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-5 rounded-xl uppercase tracking-[0.2em] text-sm font-bold hover:bg-zinc-800 shadow-xl transform active:scale-[0.98] transition-all"
              >
                Send Message via WhatsApp
              </button>

              {status === 'success' && (
                <div className="bg-zinc-100 text-black p-4 rounded-xl text-sm text-center font-bold border border-zinc-200">
                  Dhanyavad! Opening WhatsApp to send your inquiry...
                </div>
              )}
              {status === 'error' && (
                <div className="bg-zinc-900 text-white p-4 rounded-xl text-sm text-center font-bold">
                  Oops! Please fill in all fields to proceed.
                </div>
              )}
              {status === 'phone_error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm text-center font-bold border border-red-200">
                  Invalid Phone! Please enter exactly 10 digits.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
