
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center cursor-pointer group" onClick={(e) => handleNavClick(e as any, 'home')}>
            <div className={`logo-font text-3xl md:text-4xl transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
              Mohit Studio
            </div>
            <div className={`flex items-center w-full`}>
               <div className={`h-[1px] flex-grow ${scrolled ? 'bg-zinc-200' : 'bg-white/30'}`}></div>
               <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.3em] px-2 font-bold ${scrolled ? 'text-zinc-500' : 'text-zinc-200'}`}>
                 Photography
               </span>
               <div className={`h-[1px] flex-grow ${scrolled ? 'bg-zinc-200' : 'bg-white/30'}`}></div>
            </div>
          </div>

          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative group ${scrolled ? 'text-zinc-700 hover:text-black' : 'text-white hover:text-zinc-300'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors">
            <svg className={`w-7 h-7 ${scrolled ? 'text-zinc-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-white transition-all duration-500 shadow-2xl overflow-hidden ${isOpen ? 'top-full opacity-100 max-h-screen' : '-top-96 opacity-0 max-h-0'}`}>
        <div className="px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-zinc-800 text-lg uppercase tracking-widest font-medium hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
