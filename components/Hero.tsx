
import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "https://i.pinimg.com/1200x/aa/5f/e1/aa5fe108a7a841e1652d458e8e9b85c2.jpg",
  "https://i.pinimg.com/1200x/4c/a7/05/4ca705f927e5edeeeb0b333151f139e6.jpg",
  "https://i.pinimg.com/736x/98/95/8c/98958c55d9ad45f25ccfb71714255154.jpg"
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentImage === idx ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt={`Background ${idx}`} 
            className="w-full h-full object-cover scale-105 animate-fade"
          />
        </div>
      ))}
      
      {/* Premium Overlay - Darker gradient for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-black/60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-16 sm:pt-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="reveal active">
            <h2 className="text-[#C9A96E] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase mb-4 sm:mb-6 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full inline-block border border-white/20">
              خبرة في إدارة الاستثمار وصناعة الفرص
            </h2>
          </div>
          
          <h1 className="reveal active text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight sm:leading-[1.1] drop-shadow-2xl px-2 lg:whitespace-nowrap">
            نخبة <span className="text-[#C9A96E] drop-shadow-none">تسكين</span> العقارية
          </h1>
          
          <p className="reveal active text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-medium drop-shadow-lg px-4">
            شركة سعودية متخصصة في إدارة الاستثمار والتطوير العقاري، نقدم حلولًا متكاملة قائمة على دراسات تحليلية عميقة لخلق فرص استثمارية مستدامة.
          </p>
          
          <div className="reveal active flex flex-col sm:flex-row gap-4 sm:gap-6 w-full px-4 sm:px-0 justify-center">
            <a href="#services" className="bg-[#0A5C8F] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold soft-glow hover:scale-105 hover:bg-[#084a73] transition-all duration-300 shadow-xl shadow-[#0A5C8F]/30 text-center">
              استكشف خدماتنا
            </a>
            <a href="#contact" className="bg-white/15 backdrop-blur-xl border border-white/30 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 text-center">
              تواصل معنا
            </a>
          </div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 z-50">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 sm:h-2 transition-all duration-500 rounded-full ${
              currentImage === idx ? 'w-8 sm:w-12 bg-[#C9A96E]' : 'w-2.5 sm:w-3 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
