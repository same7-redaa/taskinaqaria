
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#FAF9F6] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#0A5C8F]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#C9A96E] font-bold text-sm tracking-widest uppercase mb-4 block">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A5C8F] mb-4">دعنا نتحدث عن فرصتك القادمة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نحن هنا لمساعدتك في تحقيق أهدافك العقارية والاستثمارية
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg soft-glow border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 transition-all group">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0A5C8F] to-[#0A5C8F]/80 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-[#0A5C8F]">العنوان</h4>
                    <a 
                      href="https://maps.app.goo.gl/hQQnLPQUSqsS2hDe7?g_st=iwb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 leading-relaxed text-sm hover:text-[#0A5C8F] transition-colors"
                    >
                      مكة المكرمة – الحي جبل النور <br />
                      طريق الملك فيصل الفرعي – بجوار مكتبة جرير <br />
                      الدور السادس – مكتب 3 / مكتب 4
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg soft-glow border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 transition-all group">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0A5C8F] to-[#0A5C8F]/80 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-[#0A5C8F]">الهاتف</h4>
                    <a href="tel:+966560044172" className="text-gray-600 text-sm hover:text-[#0A5C8F] transition-colors block" dir="ltr">+966 56 004 4172</a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg soft-glow border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 transition-all group">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0A5C8F] to-[#0A5C8F]/80 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2 text-[#0A5C8F]">البريد الإلكتروني</h4>
                    <a href="mailto:info@taskeen-estate.com" className="text-gray-600 text-sm hover:text-[#0A5C8F] transition-colors block">info@taskeen-estate.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:row-span-1">
            <div className="bg-white p-2 rounded-lg soft-glow border border-[#C9A96E]/30">
              <div className="rounded-lg overflow-hidden h-[400px] lg:h-full">
                <iframe
                  src="https://maps.google.com/maps?q=21.4203,39.8260&hl=ar&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
