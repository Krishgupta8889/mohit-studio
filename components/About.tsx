
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[20px_20px_0_0_rgba(0,0,0,0.05)] border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
                alt="Photography Studio Work"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-black/5 rounded-full blur-3xl"></div>
          </div>

          <div>
            <span className="text-black uppercase tracking-[0.3em] text-sm font-bold mb-8 block">Our Vision</span>
            
            <div className="space-y-6 text-zinc-700 text-lg leading-relaxed">
              <p>
                Photography is more than just pictures—it’s about preserving emotions and memories. Our work focuses on storytelling through natural expressions, elegant compositions, and professional editing.
              </p>
              <p>
                Each photograph is crafted to reflect real moments that last a lifetime. Founded in 2018, Mohit Studio has dedicated itself to capturing these authentic experiences for every client across the vibrant landscapes of India.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-zinc-100 pt-10 mt-10">
              <div>
                <div className="text-4xl font-bold text-black mb-1">6+</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">Years of Magic</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-zinc-700 mb-1">100+</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-500">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
