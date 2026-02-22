
import React from 'react';

interface MediaCenterProps {
  onReadMore?: () => void;
}

const MediaCenter: React.FC<MediaCenterProps> = ({ onReadMore }) => {
  const news = [
    { title: 'إطلاق مشروع استثماري جديد لخدمة ضيوف الرحمن', date: '15 أكتوبر 2024', excerpt: 'أعلنت الشركة عن إطلاق مشروع نوعي يخدم قطاع الضيافة في المنطقة المركزية بمكة المكرمة...' },
    { title: 'اعتماد شراكة استراتيجية مع جهات تقنية رائدة', date: '02 نوفمبر 2024', excerpt: 'توقيع اتفاقية تعاون مع إحدى الجهات الرائدة لتطوير الحلول الرقمية الخاصة بخدمات الحجاج...' },
    { title: 'إصدار تقرير الاستدامة السنوي للعام المالي الحالي', date: '10 ديسمبر 2024', excerpt: 'نشر التقرير السنوي الذي يبرز أثر الاستثمارات على برامج جمعية هدية الحاج والمعتمر...' },
  ];

  return (
    <section id="media" className="py-24 bg-gray-50 geometric-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-[#007361]/10 text-[#007361] rounded-full text-sm font-bold tracking-wide">
            آخر الأخبار
          </div>
          <h2 className="text-4xl font-extrabold text-[#007361] mb-4">المركز الإعلامي</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">نافذة هدية الخير الرسمية لعرض أهم المبادرات والإنجازات.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {news.map((item, i) => (
            <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:border-[#b0914f]/30 hover-lift transition-all group">
              <div className="h-56 relative overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1565463661121-6548773e3a89?auto=format&fit=crop&q=80&w=600`} alt="news" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#007361]">
                  {item.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 text-[#007361] line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-base mb-6 line-clamp-3 font-medium leading-relaxed">{item.excerpt}</p>
                <button 
                  onClick={onReadMore}
                  className="flex items-center gap-2 text-[#b0914f] font-bold hover:gap-4 transition-all duration-300"
                >
                  قراءة المزيد
                  <span className="text-xl">←</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
           <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-2 h-full bg-[#b0914f]"></div>
             <h3 className="text-2xl font-bold mb-6 text-[#007361]">الإعلانات المؤسسية</h3>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">نشر الإعلانات الرسمية المتعلقة بالمشاريع والشراكات التي تنفذها الشركة لضمان الشفافية والامتثال.</p>
             <div className="flex flex-wrap gap-3">
               {['طرح مشاريع', 'بيانات الشراكات', 'التقارير السنوية'].map(tag => (
                 <span key={tag} className="px-5 py-2 bg-gray-50 text-gray-500 rounded-xl text-sm font-bold">{tag}</span>
               ))}
             </div>
           </div>
           <div className="bg-[#007361] p-10 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-2 h-full bg-[#b0914f]"></div>
             <h3 className="text-2xl font-bold mb-6">المشاركات والفعاليات</h3>
             <p className="text-white/80 text-lg mb-8 leading-relaxed">إبراز الحضور المؤسسي في الفعاليات والمنتديات المرتبطة بالاستثمار والقطاع غير الربحي وخدمة الحجاج.</p>
             <div className="flex flex-wrap gap-3">
               {['مؤتمرات', 'ندوات إقليمية', 'معارض دولية'].map(tag => (
                 <span key={tag} className="px-5 py-2 bg-white/10 text-white rounded-xl text-sm font-bold border border-white/20">{tag}</span>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCenter;
