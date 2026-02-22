
import React from 'react';

const Services: React.FC = () => {
  const domains = [
    {
      title: 'الاستثمار العقاري',
      desc: 'تطوير وإدارة أصول عقارية وفندقية تخدم ضيوف الرحمن في مكة المكرمة والمدينة المنورة، بما يحقق عوائد مستدامة.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 21V11L13 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H11" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 13H11" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 17H11" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['فنادق ووحدات سكنية', 'إدارة أصول احترافية', 'مشاريع تطوير عقاري']
    },
    {
      title: 'الخدمات اللوجستية',
      desc: 'بناء بنية تحتية لوجستية متطورة تدعم عمليات الجمعية الميدانية وتسهل وصول الخدمات للحجاج في المشاعر المقدسة.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 17H15M10 13H17M13 9H17" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9L6 3H14L17 9H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['إدارة الأسطول', 'سلاسل الإمداد والتخزين', 'دعم ميداني متكامل']
    },
    {
      title: 'الأغذية والضيافة',
      desc: 'الاستثمار في مشاريع الإعاشة والتموين الغذائي التي توفر وجبات صحية وآمنة لضيوف الرحمن بمعايير عالمية.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 10.2091 16.2091 12 14 12C11.7909 12 10 10.2091 10 8C10 5.79086 11.7909 4 14 4C16.2091 4 18 5.79086 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 12V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 20V4" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8H9" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['مطابخ مركزية', 'تموين المشاعر', 'خدمات ضيافة متميزة']
    },
    {
      title: 'التقنيات الرقمية',
      desc: 'تطوير منصات وتطبيقات ذكية تسهم في أتمتة الخدمات وإثراء تجربة الحاج الرقمية وتسهل الوصول للمعلومات.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="#b9995e" strokeWidth="3" strokeLinecap="round"/>
          <path d="M9 6H15" stroke="#b9995e" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: ['تطبيقات ذكية', 'أنظمة إدارة متطورة', 'حلول رقمية مبتكرة']
    },
    {
      title: 'الخدمات الإعلامية',
      desc: 'تقديم حلول إعلامية وتسويقية متكاملة تبرز الجهود المبذولة في خدمة ضيوف الرحمن وتعزز الوعي المجتمعي.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ['إنتاج محتوى إبداعي', 'إدارة منصات التواصل', 'حملات تسويق مؤسسي']
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#f8f9fa] geometric-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 bg-[#b9995e]/10 text-[#b9995e] rounded-full text-sm font-bold tracking-wide">
            مجالات العمل
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#017768] mb-6">منظومة استثمارية متكاملة</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            تتعدد مساراتنا الاستثمارية لتغطي كافة احتياجات ضيف الرحمن، من السكن والإعاشة إلى الخدمات اللوجستية والتقنية، لضمان استدامة الأثر.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {domains.map((domain, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-[#b9995e]/30 hover-lift transition-all group">
              <div className="w-16 h-16 bg-[#017768]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#017768] group-hover:text-white transition-all duration-300 text-[#017768]">
                {domain.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#017768]">{domain.title}</h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed h-20 overflow-hidden">{domain.desc}</p>
              <div className="space-y-3">
                {domain.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-[#b9995e]"></span> {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#017768] p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <h3 className="text-3xl font-bold mb-4 text-white">كيف نختار مجالاتنا؟</h3>
              <p className="text-white/80 leading-relaxed text-lg font-medium">
                تعتمد "هدية الخير" معايير دقيقة في اختيار استثماراتها، ترتكز على مدى التكامل مع أهداف رؤية المملكة 2030 في خدمة ضيوف الرحمن، والقدرة على تحقيق عوائد مالية مجزية تضمن استمرارية العطاء الخيري.
              </p>
            </div>
            <div className="md:w-1/3 text-center">
              <div className="inline-block px-10 py-4 bg-[#b9995e] text-white rounded-full font-bold text-xl shadow-lg hover:scale-110 transition-transform cursor-default">
                الاستدامة هي جوهر عملنا
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
