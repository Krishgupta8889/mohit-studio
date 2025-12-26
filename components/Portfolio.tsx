
import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight uppercase serif-font">Some of our work</h2>
          <div className="w-24 h-1.5 bg-black mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map(item => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden aspect-[3/4] rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold serif-font transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedItem(null)}>
          <button className="absolute top-8 right-8 text-white hover:text-zinc-400 transition-colors z-[70]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="max-w-full max-h-full object-contain shadow-2xl rounded-sm border-4 border-white/10"
              />
              <div className="absolute bottom-6 md:bottom-12 left-0 right-0 text-center px-4">
                <h4 className="text-2xl md:text-3xl font-bold text-white serif-font">{selectedItem.title}</h4>
              </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
