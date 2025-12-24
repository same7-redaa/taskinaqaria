
import React from 'react';
import { PROJECT_TYPES } from '../constants';

const Projects: React.FC = () => {
  const ongoingProjects = [
    { title: 'برج النخبة الإداري', progress: 65, status: 'تحت التنفيذ' },
    { title: 'مركز الخدمات اللوجستية', progress: 40, status: 'تحت التنفيذ' },
    { title: 'مجمع مكة التجاري', progress: 10, status: 'تحت الدراسة' },
  ];

  return (
    <section id="projects" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[#C9A96E] font-bold text-sm tracking-widest uppercase mb-4 block">محفظة المشاريع</span>
            <h2 className="text-3xl font-extrabold text-[#0A5C8F]">أنواع المشاريع والفرص</h2>
          </div>
          <div className="flex gap-4">
            <span className="bg-[#F3F1ED] px-6 py-2 rounded-full text-xs font-bold text-[#1a1a1a]">منفذة</span>
            <span className="bg-[#0A5C8F] px-6 py-2 rounded-full text-xs font-bold text-white">تحت التنفيذ</span>
            <span className="bg-[#F3F1ED] px-6 py-2 rounded-full text-xs font-bold text-[#1a1a1a]">تحت الدراسة</span>
          </div>
        </div>

        {/* Project Type Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {PROJECT_TYPES.map((type, idx) => (
            <div key={idx} className="group relative rounded-lg overflow-hidden aspect-[4/5] soft-glow">
              <img src={type.image} alt={type.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h4 className="text-white text-xl font-bold">{type.title}</h4>
                <div className="w-8 h-[2px] bg-[#C9A96E] mt-4 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="bg-white p-12 rounded-lg soft-glow border border-[#C9A96E]/30">
          <h3 className="text-2xl font-extrabold mb-10 text-center text-[#0A5C8F]">متابعة سير الأعمال</h3>
          <div className="grid md:grid-cols-3 gap-12">
            {ongoingProjects.map((proj, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-[#1a1a1a]">{proj.title}</h4>
                  <span className="text-xs font-bold text-[#0A5C8F] bg-[#0A5C8F]/10 px-3 py-1 rounded-full">{proj.status}</span>
                </div>
                <div className="h-3 w-full bg-[#F3F1ED] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#0A5C8F] transition-all duration-1000" 
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
                <div className="text-right mt-2 text-xs font-bold text-gray-500">{proj.progress}% مكتمل</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
