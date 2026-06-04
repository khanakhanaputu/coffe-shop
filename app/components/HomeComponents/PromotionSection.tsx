import React from 'react';

export const PromoSection: React.FC = () => {
  return (
    // Outer Wrapper
    <section className="bg-cafe-bg py-12 px-4 md:px-8 lg:px-16 flex justify-center">
      
      {/* Inner Card (Beige Background) */}
      <div className="bg-[#e4dfd4] w-full max-w-7xl flex flex-col md:flex-row items-center justify-between shadow-sm overflow-hidden rounded-2xl md:rounded-none">
        
        {/* KONTEN KIRI - TEKS & CTA */}
        <div className="flex-1 p-10 md:p-16 lg:p-20 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tighter uppercase text-[#3d352e] leading-[1.1]">
            Your Perfect Cup <br /> Awaits
          </h2>
          
          <p className="text-sm md:text-base font-serif text-[#3d352e]/85 leading-relaxed max-w-md">
            There's always room for coffe, it's not just coffee, its's an experience, life is better with coffee.
          </p>
          
          <div className="pt-2">
            <button className="bg-[#3d352e] text-[#fbf9f6] px-8 py-3.5 font-serif font-semibold text-sm hover:bg-[#2b2520] transition-colors shadow-md hover:shadow-lg">
              Order Now
            </button>
          </div>
          
        </div>

        {/* KONTEN KANAN - BENTO GRID LAYOUT */}
        <div className="flex-1 w-full flex justify-center md:justify-end p-6 sm:p-10 md:p-12 lg:p-16">
          
          {/* Grid Container 
            Membagi area menjadi 2 kolom.
            Gap diatur agar memberi jarak estetik antar foto.
          */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
            
            {/* ITEM 1: Foto Utama (Kiri, Tinggi Penuh) */}
            {/* row-span-2 membuatnya memakan 2 baris vertikal sekaligus */}
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-lg group">
              <img 
                src="kopi.webp" 
                alt="Perfect Cup of Coffee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            
            {/* ITEM 2: Foto Detail 1 (Kanan Atas, Kotak) */}
            {/* aspect-square memastikan bentuknya selalu rasio 1:1 sempurna */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-md aspect-square group">
              <img 
                src="barista.webp" 
                alt="Our Artisan Barista" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

            {/* ITEM 3: Foto Detail 2 (Kanan Bawah, Kotak) */}
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-md aspect-square group">
              <img 
                src="kopi.webp" 
                alt="Coffee Beans" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoSection;