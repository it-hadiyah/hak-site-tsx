
import React from 'react';

const Governance: React.FC = () => {
  const types = [
    { title: 'شراكات مع القطاع العام', desc: 'دعم المبادرات والمشاريع ذات العلاقة بخدمة ضيوف الرحمن' },
    { title: 'شراكات مع القطاع الخاص', desc: 'تطوير وتشغيل مشاريع استثمارية مستدامة' },
    { title: 'شراكات مع القطاع الثالث', desc: 'تكامل في المبادرات ذات الأثر الاجتماعي' },
    { title: 'شراكات تشغيلية وتقنية', desc: 'دعم كفاءة التنفيذ وجودة الخدمات' },
  ];

  return (
    <section id="governance" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-[#017768]/10 text-[#017768] rounded-full text-sm font-bold tracking-wide">
            الحوكمة والامتثال
          </div>
          <h2 className="text-4xl font-extrabold text-[#017768] mb-4">الشراكات والحوكمة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">ترسيخ الثقة المؤسسية وإبراز الإطار النظامي الذي تعمل ضمنه الشركة.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border-r-8 border-[#b9995e] shadow-sm">
            <h3 className="text-2xl font-bold text-[#017768] mb-6">الإطار النظامي والحوكمة</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">تلتزم هدية الخير بتطبيق مبادئ الحوكمة والامتثال للأنظمة واللوائح المعتمدة في المملكة العربية السعودية، بما يعزز الشفافية، ويرسخ النزاهة.</p>
            <ul className="grid grid-cols-2 gap-6">
              {['وضوح الأدوار', 'الالتزام بالأنظمة', 'الشفافية في الموارد', 'الرقابة المؤسسية'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base font-bold text-gray-700">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#b9995e]"></div> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#017768] p-10 rounded-[2.5rem] shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">نموذج الشراكات</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              تعتمد هدية الخير على نموذج شراكات تكاملي، يقوم على التعاون مع الجهات ذات العلاقة لتحقيق أهداف مشتركة، وتعظيم الأثر الاجتماعي والاقتصادي لمشاريعها الاستثمارية.
            </p>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
               <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M14 17H10M7 10V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
               <p className="text-sm font-medium">نحن نؤمن بأن النجاح الحقيقي يكمن في العمل المشترك.</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-12 text-[#017768]">أنواع الشراكات الاستراتيجية</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {types.map((t, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#b9995e]/50 hover-lift shadow-sm">
                <h4 className="font-extrabold mb-3 text-[#017768] text-lg">{t.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-10 bg-gray-50 rounded-[2rem] border border-gray-100">
             <h4 className="text-xl font-bold mb-6 text-[#017768]">معايير اختيار الشركاء</h4>
             <ul className="space-y-4 font-medium text-gray-600">
               <li className="flex gap-2"><span>•</span> التوافق مع رسالة خدمة ضيوف الرحمن</li>
               <li className="flex gap-2"><span>•</span> الالتزام بالأنظمة والمعايير المعتمدة</li>
               <li className="flex gap-2"><span>•</span> القدرة على تحقيق أثر مستدام</li>
               <li className="flex gap-2"><span>•</span> الكفاءة والخبرة في مجال الشراكة</li>
             </ul>
           </div>
           <div className="p-10 bg-[#b9995e] text-white rounded-[2rem] shadow-lg">
             <h4 className="text-xl font-bold mb-6">الامتثال والمعايير الشرعية</h4>
             <p className="opacity-90 leading-relaxed text-lg">تلتزم هدية الخير بالمعايير الشرعية والأنظمة المحلية في جميع أنشطتها واستثماراتها، بما يضمن سلامة الممارسات وتحقيق الأثر وفق إطار موثوق ومسؤول.</p>
           </div>
           <div className="p-10 bg-[#017768] text-white rounded-[2rem] shadow-lg flex flex-col justify-center">
             <h4 className="text-xl font-bold mb-4">الشفافية والاستدامة</h4>
             <p className="opacity-80 leading-relaxed">نؤمن بأن الحوكمة الفاعلة والشراكات المدروسة تشكل أساس الاستدامة، وتسهم في تعظيم العوائد وتوجيهها لدعم برامج الجمعية.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
