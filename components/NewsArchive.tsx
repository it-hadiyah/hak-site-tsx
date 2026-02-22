
import React from 'react';

interface NewsArchiveProps {
  onBack: () => void;
}

const NewsArchive: React.FC<NewsArchiveProps> = ({ onBack }) => {
  const fullNews = [
    {
      title: 'إطلاق مشروع استثماري جديد لخدمة ضيوف الرحمن',
      date: '15 أكتوبر 2024',
      category: 'مشاريع استثمارية',
      image: 'https://images.unsplash.com/photo-1565463661121-6548773e3a89?auto=format&fit=crop&q=80&w=1200',
      content: `أعلنت شركة هدية الخير عن إطلاق مشروع نوعي يهدف إلى تطوير قطاع الضيافة في المنطقة المركزية المحيطة بالحرم المكي الشريف. يأتي هذا المشروع ضمن سلسلة مبادرات تهدف إلى رفع جودة الخدمات المقدمة لضيوف الرحمن وزيادة الطاقة الاستيعابية الفندقية بمعايير عالمية. 

يتضمن المشروع إنشاء مجمع سكني وفندقي متكامل يراعي الهوية المعمارية المكية مع توظيف أحدث التقنيات الذكية لضمان راحة الحجاج والمعتمرين. كما يسعى المشروع إلى تحقيق عوائد استثمارية مستدامة تساهم بشكل مباشر في تمويل المبادرات الخيرية لجمعية هدية الحاج والمعتمر.`
    },
    {
      title: 'اعتماد شراكة استراتيجية مع جهات تقنية رائدة',
      date: '02 نوفمبر 2024',
      category: 'شراكات وتقنية',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
      content: `وقعت شركة هدية الخير اتفاقية تعاون استراتيجي مع إحدى أكبر الشركات التقنية في المملكة العربية السعودية، وذلك لتطوير منظومة رقمية متكاملة تخدم الحجاج والمعتمرين. تشمل الاتفاقية تطوير تطبيقات ذكية للإرشاد المكاني، وإدارة الوجبات, وربط المتطوعين بالخدمات الميدانية.

تهدف هذه الخطوة إلى أتمتة العمليات الاستثمارية والخدمية للشركة، مما يضمن كفاءة تشغيلية عالية وتقليل الفاقد الزمني في تقديم الخدمات، مع توفير بيانات دقيقة تساعد في اتخاذ القرارات التطويرية مستقبلاً.`
    },
    {
      title: 'إصدار تقرير الاستدامة السنوي للعام المالي الحالي',
      date: '10 ديسمبر 2024',
      category: 'تقارير مؤسسية',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      content: `أصدرت شركة هدية الخير تقريرها السنوي للاستدامة، والذي كشف عن نمو ملحوظ في الأثر الاجتماعي للاستثمارات غير الربحية. التقرير يسلط الضوء على كيفية تحويل الأرباح الاستثمارية إلى خدمات ملموسة في المشاعر المقدسة، بما في ذلك توزيع أكثر من مليون وجبة وتوفير خدمات السقيا والإرشاد.

وأكد التقرير التزام الشركة بمعايير الحوكمة العالية والشفافية المالية، موضحاً أن كافة الاستثمارات تخضع لرقابة دقيقة لضمان تحقيق أعلى عائد ممكن لخدمة أهداف الجمعية الأم ودعم رؤية المملكة 2030 في زيادة أعداد المعتمرين.`
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-50 border-b py-12">
        <div className="container mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#017768] font-bold mb-6 hover:gap-4 transition-all"
          >
            <span className="text-xl">→</span>
            العودة للمركز الإعلامي
          </button>
          <h1 className="text-4xl font-extrabold text-[#017768]">أرشيف الأخبار والتفاصيل</h1>
          <p className="text-gray-500 mt-4 text-lg">التغطية الكاملة لمسيرة هدية الخير وإنجازاتها في خدمة ضيوف الرحمن</p>
        </div>
      </div>

      {/* News List */}
      <div className="container mx-auto px-6 py-16">
        <div className="space-y-24">
          {fullNews.map((news, i) => (
            <article key={i} className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                  <img src={news.image} alt={news.title} className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-6 right-6 bg-[#b9995e] text-white px-5 py-2 rounded-full text-sm font-bold">
                    {news.category}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="text-[#b9995e] font-bold mb-4">{news.date}</div>
                <h2 className="text-3xl font-extrabold text-[#017768] mb-6 leading-tight">{news.title}</h2>
                <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line font-medium">
                  {news.content}
                </div>
                <div className="mt-10 flex gap-4">
                   <button className="px-6 py-3 border border-gray-200 rounded-xl text-gray-500 font-bold hover:bg-gray-50 transition-colors">مشاركة الخبر</button>
                   <button className="px-6 py-3 bg-[#017768]/10 text-[#017768] rounded-xl font-bold hover:bg-[#017768]/20 transition-colors">تحميل النسخة PDF</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArchive;
