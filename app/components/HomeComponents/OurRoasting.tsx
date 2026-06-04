import React from "react";

// Data Mockup untuk daftar roasting (memudahkan render Zig-Zag)
const roastingData = [
  {
    id: 1,
    title: "LIGHT ROAST",
    image: "kopi.webp", // Ganti dengan nama file gambar Anda
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo",
    isImageRight: true,
  },
  {
    id: 2,
    title: "MEDIUM ROAST",
    image: "kopi.webp",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo", // Ganti dengan nama file gambar Anda
    isImageRight: false,
  },
  {
    id: 3,
    title: "DARK ROAST",
    image: "kopi.webp",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo", // Ganti dengan nama file gambar Anda
    isImageRight: true,
  },
  {
    id: 4,
    title: "MEDIUM-DARK\nROAST",
    image: "kopi.webp",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo",// Ganti dengan nama file gambar Anda
    isImageRight: false,
  },
];

export const OurRoasting: React.FC = () => {
  return (
    <section className="bg-cafe-bg py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tighter uppercase mb-6 text-cafe-dark">
            Our Roasting
          </h2>
          <p className="text-sm md:text-base font-serif text-cafe-dark/80 italic leading-relaxed">
            A cup of coffee on a warm summer day reminds you there's bright side
            to every day. There's a great big coffee world waiting for you. And
            it tastes great!
          </p>
        </div>

        {/* ZIG-ZAG CONTENT SECTION */}
        <div className="w-full flex flex-col gap-12 md:gap-0">
          {roastingData.map((item) => (
            <div
              key={item.id}
              // flex-row-reverse digunakan untuk menukar posisi kiri-kanan pada item genap
              className={`flex flex-col md:flex-row items-center justify-center ${
                item.isImageRight ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* TEXT BLOCK */}
              <div
                className={`w-full md:w-1/2 flex justify-center flex-col ${
                  item.isImageRight
                    ? "md:justify-end md:pr-12 lg:pr-20"
                    : "md:justify-start md:pl-12 lg:pl-20"
                } mb-6 md:mb-0 order-2 md:order-none`}
              >
                {/* whitespace-pre-line digunakan agar \n (enter) pada "MEDIUM-DARK ROAST" terbaca */}
                <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black font-sans uppercase tracking-wide text-cafe-dark whitespace-pre-line text-center md:text-left leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-serif text-cafe-dark/80 italic leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* IMAGE BLOCK */}
              <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none py-4 md:py-8">
                {/* Kontainer gambar dengan efek shadow tebal dan sedikit zoom saat dihover */}
                <div className="w-full max-w-[420px] aspect-[4/3] md:aspect-[3/2] overflow-hidden shadow-2xl bg-cafe-dark/5 transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurRoasting;
