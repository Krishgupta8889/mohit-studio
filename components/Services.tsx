
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Services: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-zinc-900 mb-4 tracking-tight uppercase">Photography Packages</h2>
          <div className="w-16 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Choose a plan that fits your vision. All packages include high-resolution files and professional retouching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white p-10 flex flex-col transition-all duration-300 border ${
                plan.isFeatured ? 'border-teal-500 shadow-2xl scale-105 z-10' : 'border-zinc-200 shadow-sm'
              }`}
            >
              {plan.isFeatured && (
                <span className="text-teal-600 text-[10px] uppercase tracking-widest font-bold mb-4 block">Most Popular</span>
              )}
              <h3 className="text-2xl font-light text-zinc-900 mb-2">{plan.name}</h3>
              <div className="text-4xl font-light text-teal-600 mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-zinc-600 text-sm">
                    <svg className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={scrollToContact}
                className={`w-full text-center py-4 uppercase tracking-widest text-xs transition-all duration-300 ${
                  plan.isFeatured 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
