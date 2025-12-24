
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-1 shadow-sm' : 'bg-transparent py-2'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-3">
            <img 
              src={scrolled ? "/Artboard 1@4x-8.png" : "/Artboard 5@4x-8.png"}
              alt="نخبة تسكين" 
              className="h-14 md:h-16 lg:h-18 w-auto object-contain transition-all duration-300"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0A5C8F]' : 'text-white hover:text-[#C9A96E] drop-shadow-lg'}`}>من نحن</a>
            <a href="#services" className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0A5C8F]' : 'text-white hover:text-[#C9A96E] drop-shadow-lg'}`}>خدماتنا</a>
            <a href="#projects" className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0A5C8F]' : 'text-white hover:text-[#C9A96E] drop-shadow-lg'}`}>المشاريع</a>
            <a href="#contact" className={`text-sm font-semibold transition-colors ${scrolled ? 'text-gray-700 hover:text-[#0A5C8F]' : 'text-white hover:text-[#C9A96E] drop-shadow-lg'}`}>تواصل معنا</a>
          </nav>
        </div>
        <a href="#contact" className="bg-[#0A5C8F] text-white px-8 py-3 rounded-full text-sm font-bold soft-glow hover:bg-[#084a73] transition-all">
          استثمارك يبدأ هنا
        </a>
      </div>
    </header>
  );
};

export default Header;
