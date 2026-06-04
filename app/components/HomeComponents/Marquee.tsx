import React from 'react';

// Daftar teks kopi yang akan ditampilkan
// Dibuat agak panjang agar layarnya penuh
const coffeeList = [
  'DOPPIO', 
  'GALAO', 
  'CAPPUCCINO', 
  'MOCHA', 
  'ESPRESSO', 
  'CORTADO'
];

export const Marquee: React.FC = () => {
  return (
    <section className="bg-cafe-dark text-cafe-bg py-6  overflow-hidden relative flex border-y-4 border-cafe-bg/10 shadow-inner">
      
      {/* INJECT KEYFRAMES UNTUK ANIMASI MARQUEE */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          /* Ubah 20s menjadi lebih kecil (misal 10s) jika ingin jalannya lebih cepat */
          animation: marquee-scroll 30s linear infinite;
        }
        /* Menghentikan animasi jika user menaruh kursor di atasnya (Opsional) */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* KONTENER ANIMASI (Lebarnya menyesuaikan isi) */}
      <div className="flex w-max animate-marquee items-center cursor-default hover:opacity-90 transition-opacity">
        
        {/* KITA LOOP 2 KALI (Index 0 dan 1) AGAR LOOPINGNYA SEAMLESS / TIDAK PUTUS */}
        {[...Array(2)].map((_, containerIndex) => (
          <div 
            key={containerIndex} 
            className="flex items-center justify-around shrink-0 px-4 md:px-8 gap-8 md:gap-16"
          >
            {coffeeList.map((coffee, index) => (
              <React.Fragment key={`${containerIndex}-${index}`}>
                
                {/* TEKS KOPI */}
                <span className="text-2xl md:text-3xl font-black font-sans uppercase tracking-widest whitespace-nowrap">
                  {coffee}
                </span>
                
                {/* GAMBAR SEPARATOR (CUP KOPI) */}
                <img 
                  src="kopi-mini.webp" 
                  alt="Coffee Cup" 
                  className="w-10 h-14 md:w-14 md:h-20 object-contain drop-shadow-xl"
                />
                
              </React.Fragment>
            ))}
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Marquee;