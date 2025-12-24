
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-bold text-lg mb-8">روابط سريعة</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">خدماتنا</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">المشاريع</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">خدماتنا</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>إدارة التطوير</li>
              <li>إدارة الأصول</li>
              <li>صناعة الفرص</li>
              <li>دراسات الجدوى</li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <a href="#" className="mb-6 block">
              <img 
                src="/Artboard 5@4x-8.png" 
                alt="نخبة Taskin" 
                className="h-32 md:h-40 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 text-center max-w-md">
              شركة سعودية رائدة في صناعة الفرص العقارية المستدامة وإدارة الأصول باحترافية عالية.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#0A5C8F] hover:border-[#0A5C8F] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} نخبة Taskin العقارية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
