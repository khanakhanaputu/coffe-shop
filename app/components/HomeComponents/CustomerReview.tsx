'use client';

import React, { useRef } from 'react';

// Data Mockup untuk ulasan (didobel agar slider bisa digeser)
const reviewsData = [
  {
    id: 1,
    name: 'JANE SMITH',
    text: "The Coffee at this shop absolutely really amzazing. It's rich flavourful and always brewed to perfectioon.",
    rating: '5.0',
    image: 'barista.webp',
  },
  {
    id: 2,
    name: 'ADAM SIMONS',
    text: "The Coffee at this shop absolutely really amzazing. It's rich flavourful and always brewed to perfectioon.",
    rating: '5.0',
    image: 'barista.webp',
  },
  {
    id: 3,
    name: 'SARAH CONNOR',
    text: "The best atmospheric cafe in town. Their artisan approach to brewing makes every cup an absolute delight.",
    rating: '5.0',
    image: 'barista.webp',
  },
  {
    id: 4,
    name: 'MICHAEL DOE',
    text: "Pure Coffe, pure community, pure experience. I can never have too much coffee from this place in my life.",
    rating: '4.9',
    image: 'barista.webp',
  }
];

export const CustomerReviews: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fungsi navigasi slider
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-cafe-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          
          <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-sans font-black tracking-tighter uppercase leading-[0.95] text-cafe-dark">
            Customer <br /> Reviews
          </h2>
          
          <div className="max-w-sm flex flex-col md:items-end text-left md:text-right">
            <p className="text-sm md:text-base font-serif text-cafe-dark/80 italic leading-relaxed mb-6">
              There's always room for coffe, it's not just coffee, <br className="hidden md:block" />
              its's an experience, life is better with coffee.
            </p>
            
            {/* NAVIGATION BUTTONS */}
            <div className="flex gap-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full bg-cafe-dark text-cafe-bg flex items-center justify-center hover:bg-cafe-dark-hover transition-colors shadow-md focus:outline-none"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full bg-cafe-dark text-cafe-bg flex items-center justify-center hover:bg-cafe-dark-hover transition-colors shadow-md focus:outline-none"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL SLIDER */}
      <div 
        ref={sliderRef}
        // Tambahkan pt-12 khusus mobile agar foto yang menonjol ke atas tidak terpotong
        className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-12 pt-12 md:pt-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        {reviewsData.map((review) => (
          <div 
            key={review.id} 
            // Mobile: pt-12 px-6 (karena foto di atas). Desktop kembali ke asli: md:py-8 md:pl-12 md:pr-6
            className="relative snap-center shrink-0 w-[340px] md:w-[480px] pt-12 pb-6 px-6 md:py-8 md:pl-12 md:pr-6"
          >
            {/* BACKGROUND BOX KREM */}
            {/* Mobile: full (left-0). Desktop kembali ke asli: md:left-24 */}
            <div className="absolute inset-y-0 right-0 left-0 md:left-24 bg-[#e5e1d5] -z-10 shadow-sm" />
            
            {/* CONTAINER KONTEN */}
            {/* Mobile: flex-col, p-4. Desktop kembali ke asli: md:flex-row, bg-amber-50, md:p-0 */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center h-full bg-amber-50 rounded-lg md:rounded-none p-4 md:p-0">
              
              {/* GAMBAR BARISTA SQUARE OVERLAPPING */}
              {/* Mobile: -mt-16 (nembus ke atas). Desktop kembali ke asli: md:mt-0 md:-ml-12 md:-mb-10 */}
              <div className="w-24 h-24 md:w-36 md:h-36 shrink-0 border-[3px] md:border-[4px] border-cafe-dark relative -mt-16 md:mt-0 md:-ml-12 shadow-lg bg-cafe-bg md:-mb-10">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* KONTEN TEXT ULASAN */}
              {/* Mobile: text-center. Desktop: md:text-left */}
              <div className="flex flex-col py-2 text-center md:text-left items-center md:items-start">
                <h4 className="text-lg md:text-xl font-black font-sans uppercase tracking-wider text-cafe-dark mb-2 md:mb-3">
                  {review.name}
                </h4>
                
                <p className="font-serif text-sm leading-relaxed text-cafe-dark/80 mb-4 md:pr-2">
                  {review.text}
                </p>
                
                {/* RATING STARS */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-cafe-dark" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-sans font-semibold text-cafe-dark/90 mt-0.5">
                    {review.rating} rating
                  </span>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;