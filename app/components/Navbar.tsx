"use client";
import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cafe-bg text-cafe-dark px-6 py-4 md:px-12 md:py-6 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="text-xl md:text-2xl font-black italic tracking-wide uppercase">
          Café
        </div>

        <div className="hidden md:flex items-center space-x-10 font-medium">
          <a href="#stories" className="hover:opacity-70 transition-opacity">Stories</a>
          <a href="#coffe" className="hover:opacity-70 transition-opacity">Coffe</a>
          <a href="#equipment" className="hover:opacity-70 transition-opacity">Equipment</a>
          <a href="#store" className="hover:opacity-70 transition-opacity">Store</a>
        </div>

        <div className="hidden md:block">
          <button className="bg-cafe-dark text-cafe-bg px-6 py-2.5 font-serif font-semibold text-sm hover:bg-cafe-dark-hover transition-colors">
            Order Now
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none p-2 relative w-10 h-10 flex flex-col justify-center items-center group"
            aria-label="Toggle Menu"
          >
            <span 
              className={`block absolute h-0.5 w-6 bg-cafe-dark transform transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            />
            <span 
              className={`block absolute h-0.5 w-6 bg-cafe-dark transition-all duration-200 ease-in-out ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block absolute h-0.5 w-6 bg-cafe-dark transform transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            />
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-cafe-bg border-t border-cafe-border py-4 px-6 flex flex-col space-y-4 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen 
            ? 'opacity-100 visible translate-y-0 scale-y-100' 
            : 'opacity-0 invisible -translate-y-2 scale-y-95'
        }`}
      >
        <a href="#stories" onClick={() => setIsOpen(false)} className="py-2 border-b border-cafe-border font-medium">Stories</a>
        <a href="#coffe" onClick={() => setIsOpen(false)} className="py-2 border-b border-cafe-border font-medium">Coffe</a>
        <a href="#equipment" onClick={() => setIsOpen(false)} className="py-2 border-b border-cafe-border font-medium">Equipment</a>
        <a href="#store" onClick={() => setIsOpen(false)} className="py-2 border-b border-cafe-border font-medium">Store</a>
        <div className="pt-2">
          <button className="w-full bg-cafe-dark text-cafe-bg py-3 font-serif font-semibold text-center hover:bg-cafe-dark-hover transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;