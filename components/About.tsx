
import React from 'react';
import { ShieldCheck, Lightbulb, Users, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: 'الاحترافية', icon: <ShieldCheck className="text-[#C9A96E]" /> },
    { title: 'الشفافية', icon: <BarChart3 className="text-[#C9A96E]" /> },
    { title: 'الابتكار', icon: <Lightbulb className="text-[#C9A96E]" /> },
    { title: 'الاستدامة', icon: <Users className="text-[#C9A96E]" /> },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <span className="text-[#C9A96E] font-black text-sm tracking-widest uppercase mb-4 block">نبذة عن الشركة</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0A5C8F] mb-8 leading-tight">
              نعمل على تحويل الأفكار إلى <br /> <span className="text-[#C9A96E]">فرص استثمارية ناجحة</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              نخبة تسكين العقارية شركة ذات مسؤولية محدودة، متخصصة في <strong className="text-[#0A5C8F]">العقارات التجارية والإدارية والطبية</strong>. نقدم خدمات متكاملة في إدارة الاستثمار وتطوير المشاريع، ونحول الأفكار إلى فرص استثمارية ناجحة من خلال التخطيط الاستراتيجي والتحليل المالي والإدارة الاحترافية للأصول.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg soft-glow border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 transition-all duration-300">
                <h3 className="text-xl font-black mb-4 text-[#0A5C8F]">رؤيتنا</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">أن نكون الشريك الاستثماري العقاري الأكثر ثقة في المملكة العربية السعودية.</p>
              </div>
              <div className="bg-white p-8 rounded-lg soft-glow border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 transition-all duration-300">
                <h3 className="text-xl font-black mb-4 text-[#0A5C8F]">رسالتنا</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">خلق قيمة استثمارية مستدامة لعملائنا عبر حلول متكاملة قائمة على المعرفة والخبرة.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden soft-glow aspect-square md:aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Office Professional" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0A5C8F]/10 mix-blend-multiply"></div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-8 -right-8 md:-right-12 bg-[#0A5C8F] text-white p-12 rounded-full soft-glow text-center shadow-2xl shadow-[#0A5C8F]/40 hover:scale-110 transition-transform duration-300">
              <p className="text-5xl font-black mb-1">15+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em]">عاماً من الخبرة</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-[#0A5C8F]">قيمنا الجوهرية</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-10 rounded-lg text-center soft-glow border border-[#C9A96E]/30 hover:-translate-y-3 hover:border-[#C9A96E]/70 transition-all duration-500 group">
              <div className="w-20 h-20 bg-[#F3F1ED] rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C9A96E] transition-colors duration-300">
                {React.cloneElement(val.icon as React.ReactElement, { className: "group-hover:text-white transition-colors duration-300", size: 32 })}
              </div>
              <h4 className="font-black text-lg text-[#1a1a1a]">{val.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
