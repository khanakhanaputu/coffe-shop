'use client'; // Tambahkan ini jika kamu menggunakan Next.js App Router

import React, { useState } from 'react';

// Data kartu gambar
const initialCards = [
  { id: 1, src: 'background-hero.webp', label: 'Cozy Atmosphere' },
  { id: 2, src: 'barista.webp', label: 'Our Artisan' },
  { id: 3, src: 'kopi.webp', label: 'Freshly Brewed' },
];

export const Hero: React.FC = () => {
  const [cards, setCards] = useState(initialCards);

  const handleNextCard = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const topCard = newCards.pop();
      if (topCard) newCards.unshift(topCard);
      return newCards;
    });
  };

  return (
    <section className="bg-cafe-bg text-cafe-dark min-h-[calc(100vh-80px)] flex items-center py-16 px-6 md:px-12 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        
        <div className="flex flex-col space-y-6 max-w-xl z-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight leading-tight">
            Brewed To Perfection, <br />
            Served With Love
          </h2>
          
          <p className="text-sm sm:text-base text-cafe-dark/80 leading-relaxed font-sans font-medium">
            Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere 
            designed to inspire and unwind.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-cafe-dark text-cafe-bg px-8 py-3.5 rounded-xl font-sans font-semibold text-sm hover:bg-cafe-dark-hover transition-all duration-300 shadow-md">
              Order Online
            </button>
            <button className="border-2 border-cafe-dark text-cafe-dark px-8 py-3.5 rounded-xl font-sans font-semibold text-sm hover:bg-cafe-dark/5 transition-all duration-300">
              Find a Location
            </button>
          </div>
        </div>

        <div className="relative h-[350px] sm:h-[450px] w-full flex items-center justify-center mt-8 md:mt-0 perspective-1000">
          
          <div 
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group cursor-pointer"
            onClick={handleNextCard}
          >
            {cards.map((card, index) => {
              let transformClasses = "";
              
              if (index === 0) {
                transformClasses = "z-10 -rotate-12 -translate-x-8 translate-y-6 scale-90 opacity-70 shadow-md";
              } else if (index === 1) {
                transformClasses = "z-20 -rotate-3 -translate-x-2 translate-y-2 scale-95 opacity-95 shadow-lg";
              } else if (index === 2) {
                transformClasses = "z-30 rotate-3 translate-x-4 -translate-y-2 scale-100 opacity-100 shadow-2xl group-hover:rotate-6 group-hover:translate-x-6";
              }

              return (
                <div 
                  key={card.id} 
                  className={`absolute inset-0 bg-[#f4f1eb] p-3 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${transformClasses}`}
                >
                  <div className="w-full h-[82%] overflow-hidden rounded-lg bg-gray-200">
                    <img 
                      src={card.src} 
                      alt={card.label} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-[18%] flex items-center pl-2">
                    <span className="font-serif italic text-sm text-cafe-dark/70 font-semibold transition-opacity duration-300">
                      {card.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="absolute bottom-4 right-1/4 translate-x-12 hidden md:block">
            <span className="text-xs font-serif italic text-cafe-dark/50 pointer-events-none">
              *Click the photos
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;