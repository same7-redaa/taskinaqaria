
import React from 'react';
import { DEVELOPMENT_SERVICES, ASSET_SERVICES, INVESTMENT_SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[#C9A96E] font-black text-sm tracking-widest uppercase mb-4 block">خدماتنا التخصصية</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A5C8F]">حلول متكاملة للعقارات التجارية والإدارية والطبية</h2>
        </div>

        {/* Development Management */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h3 className="text-2xl font-black whitespace-nowrap">إدارة التطوير العقاري</h3>
            <div className="h-[2px] flex-1 bg-gradient-to-l from-[#C9A96E]/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {DEVELOPMENT_SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF9F6] p-8 rounded-lg hover:bg-white hover:soft-glow border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-[#C9A96E] mb-8 shadow-sm group-hover:bg-[#0A5C8F] group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-black mb-3 text-[#1a1a1a]">{service.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns for Asset and Investment */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Asset Management */}
          <div className="bg-[#F3F1ED] p-6 md:p-12 rounded-lg border border-[#C9A96E]/20">
            <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-[#0A5C8F]">إدارة وتشغيل الأصول</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {ASSET_SERVICES.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 md:p-5 rounded-lg hover:bg-white transition-all duration-300 border border-[#C9A96E]/20">
                  <div className="bg-[#C9A96E]/30 p-2 rounded-lg shrink-0">
                    <CheckCircle2 size={18} className="text-[#0A5C8F]" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-gray-800 leading-tight break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Management */}
          <div className="bg-[#1a1a1a] p-8 md:p-12 rounded-lg text-white overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-8">إدارة الاستثمار العقاري</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
                {INVESTMENT_SERVICES.map((service, idx) => (
                  <div key={idx} className="flex flex-col gap-3 md:gap-5 border border-white/10 p-4 md:p-8 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                    <div className="text-[#C9A96E] bg-white/5 w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center">
                      {React.cloneElement(service.icon as React.ReactElement, { size: 20, className: "md:w-7 md:h-7" })}
                    </div>
                    <h4 className="font-black text-sm md:text-xl leading-tight">{service.title}</h4>
                  </div>
                ))}
              </div>
            </div>
            {/* Aesthetic Background Shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#C9A96E]/10 rounded-full blur-3xl group-hover:bg-[#C9A96E]/20 transition-colors duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
