
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certificate: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FAF9F6] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A5C8F]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full soft-glow mb-6">
            <Award className="text-[#C9A96E]" size={24} />
            <span className="text-[#C9A96E] font-black text-sm tracking-widest uppercase">موثقة ومعتمدة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A5C8F] mb-4">شهادة السجل التجاري</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نخبة تسكين العقارية شركة مسجلة ومعتمدة رسمياً في المملكة العربية السعودية
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg soft-glow p-4 md:p-8 border border-[#C9A96E]/40 hover:border-[#C9A96E]/70 transition-all duration-300">
            <div className="relative group">
              <img 
                src="/شهادة السجل التجاري.jpg" 
                alt="شهادة السجل التجاري لشركة نخبة تسكين العقارية" 
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Certificate features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A5C8F]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="text-[#0A5C8F]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">مرخصة رسمياً</h4>
                  <p className="text-xs text-gray-500">معتمدة من وزارة التجارة</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A5C8F]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="text-[#0A5C8F]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">موثوقة ومعتمدة</h4>
                  <p className="text-xs text-gray-500">سجل تجاري نشط</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A5C8F]/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle className="text-[#0A5C8F]" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">ملتزمة بالأنظمة</h4>
                  <p className="text-xs text-gray-500">وفقاً للقوانين السعودية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
