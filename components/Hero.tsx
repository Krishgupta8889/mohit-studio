
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?auto=format&fit=crop&q=80&w=1920"
          alt="Mohit Studio Professional Photographer"
          className="w-full h-full object-cover scale-105"
        />
        {/* Grayscale Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mt-12 md:mt-0">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.2] md:leading-tight">
          Capturing Moments That <br className="hidden sm:block" /> <span className="italic text-zinc-200 serif-font">Last Forever</span>
        </h1>
        
        <div className="text-white/90 font-light mb-10 max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-5 md:p-8 rounded-xl border border-white/10 shadow-2xl">
          <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-white mb-5">Our Work Includes</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 mb-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start group">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-xs md:text-base">Wedding & Pre-Wedding</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start group">
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-xs md:text-base">Wedding Video Shooting</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start group">
              <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-xs md:text-base">Professional Cinematography</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start group">
              <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-xs md:text-base">Portrait & Family Shoots</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start group">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-xs md:text-base">Event & Corporate</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start group">
              <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
              <span className="text-xs md:text-base">Studio Photography</span>
            </div>
          </div>
          <p className="italic opacity-90 text-[10px] md:text-sm border-t border-white/20 pt-4">
            High-resolution delivery and professional post-production.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, 'gallery')}
            className="px-10 py-3.5 bg-white text-black uppercase tracking-widest text-xs md:text-sm hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto font-bold rounded-sm shadow-xl"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-10 py-3.5 border-2 border-white text-white uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto font-bold rounded-sm"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
