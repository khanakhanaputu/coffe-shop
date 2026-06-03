'use client'; 

import React, { useRef, useState, useEffect } from 'react';

const coffeeData = [
  { id: 1, name: 'Cortado', rating: 4.6, volume: '160 ml', price: '27.50' },
  { id: 2, name: 'Coffe Latte', rating: 4.5, volume: '160 ml', price: '25.60' },
  { id: 3, name: 'Cappuccino', rating: 4.6, volume: '160 ml', price: '27.50' },
  { id: 4, name: 'Americano', rating: 4.8, volume: '200 ml', price: '20.00' },
  { id: 5, name: 'Macchiato', rating: 4.7, volume: '120 ml', price: '24.00' },
];

export const CoffeMenu: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const middleIndex = Math.floor(coffeeData.length / 2);
  const [activeIndex, setActiveIndex] = useState<number>(middleIndex);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    
    const centerPosition = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    const cards = container.querySelectorAll('.coffee-card-wrapper');
    
    cards.forEach((node, index) => {
      const card = node as HTMLElement;
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(centerPosition - cardCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      const cards = container.querySelectorAll('.coffee-card-wrapper');
      const targetCard = cards[middleIndex] as HTMLElement;
      
      if (targetCard) {
        const scrollPos = targetCard.offsetLeft - container.clientWidth / 2 + targetCard.clientWidth / 2;
        container.scrollTo({ left: scrollPos, behavior: 'auto' });
      }

      container.addEventListener('scroll', handleScroll);
      
      handleScroll();
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [middleIndex]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-cafe-bg py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-6 relative z-20">
          <div className="max-w-xl text-cafe-dark">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter uppercase mb-4">
              Our Coffe
            </h2>
            <p className="text-sm md:text-base font-serif text-cafe-dark/80 italic leading-relaxed">
              There's always room for coffe, it's not just coffee, <br className="hidden md:block"/>
              its's an experience, life is better with coffee.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-cafe-dark text-cafe-bg flex items-center justify-center hover:bg-cafe-dark-hover transition-colors shadow-md focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-cafe-dark text-cafe-bg flex items-center justify-center hover:bg-cafe-dark-hover transition-colors shadow-md focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={sliderRef}
        className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-24 pt-16 -mt-16 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full"
      >
        {/* SPACER KIRI */}
        <div className="shrink-0 w-[calc(50vw-9rem)] md:w-[calc(50vw-10rem)] snap-center"></div>

        {coffeeData.map((coffee, index) => (
          <CoffeeCard 
            key={coffee.id} 
            coffee={coffee} 
            isActive={index === activeIndex} 
          />
        ))}

        <div className="shrink-0 w-[calc(50vw-9rem)] md:w-[calc(50vw-10rem)] snap-center"></div>
      </div>
    </section>
  );
};

const CoffeeCard = ({ coffee, isActive }: { coffee: typeof coffeeData[0], isActive: boolean }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); 
  };

  return (
    <div 
      className={`coffee-card-wrapper relative mt-20 snap-center shrink-0 w-64 md:w-[280px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isActive 
          ? 'scale-110 opacity-100 z-30' 
          : 'scale-85 opacity-50 z-10'
      }`}
    >
      
      <div className={`absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-48 md:h-48 z-10 rounded-full shadow-2xl p-2 bg-cafe-bg/10 backdrop-blur-sm transition-transform duration-700 ${isActive ? '-translate-y-4' : 'translate-y-0'}`}>
        <img 
          src="kopi.webp" 
          alt={coffee.name} 
          className="w-full h-full object-cover rounded-full shadow-inner border border-cafe-bg/20"
        />
      </div>

      <div className={`bg-cafe-dark text-cafe-bg pt-28 pb-8 px-6 md:pt-32 md:px-8 h-full flex flex-col justify-between transition-shadow duration-700 ${isActive ? 'shadow-2xl shadow-cafe-dark/40' : 'shadow-none'}`}>
        <div>
          <h3 className="text-xl md:text-2xl font-black font-sans uppercase tracking-wider mb-3">
            {coffee.name}
          </h3>
          
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-sm mb-4">
            <svg className="w-3.5 h-3.5 text-cafe-bg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold">{coffee.rating}</span>
          </div>

          <p className="text-cafe-bg/60 font-serif text-sm mb-8">
            Volume <span className="text-cafe-bg/90">{coffee.volume}</span>
          </p>
        </div>

        <div className="flex items-stretch border border-cafe-bg/30">
          <div className="flex-1 px-4 py-3 font-sans font-bold text-lg md:text-xl flex items-center">
            ${coffee.price}
          </div>
          <button 
            onClick={handleAdd}
            className={`w-14 font-sans text-2xl font-light transition-all flex items-center justify-center cursor-pointer ${
              added ? 'bg-green-500 text-white' : 'bg-[#eeebe6] text-[#3d352e] hover:bg-[#dfdad3]'
            }`}
          >
            {added ? '✔' : '+'}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default CoffeMenu