
import React from 'react';

const About: React.FC = () => {
  const values = [
    { 
      title: 'الريادة', 
      desc: 'الابتكار المستمر في الاستثمار والخدمات', 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15L15 12M15 12L12 9M15 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#017768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V12L15 15" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'الاستدامة', 
      desc: 'تحقيق أثر طويل المدى مالياً واجتماعياً', 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#017768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 12L10 15L17 8" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'التكامل', 
      desc: 'العمل المشترك مع الجمعية والشركاء', 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="#017768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 17H10M7 10V14" stroke="#017768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'الموثوقية', 
      desc: 'الشفافية والنزاهة في جميع الأعمال', 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#017768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      title: 'خدمة الضيوف', 
      desc: 'جعل راحة ضيوف الرحمن محور اهتمامنا', 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="#017768" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#b9995e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  const goals = [
    'تنويع المحفظة الاستثمارية بما يحقق النمو المستدام',
    'تعظيم العوائد لدعم برامج ومبادرات الجمعية',
    'تطوير شراكات استراتيجية مع القطاعين العام والخاص',
    'تبني مشاريع ذات أثر اجتماعي واقتصادي إيجابي',
    'تعزيز الهوية المؤسسية في خدمة ضيوف الرحمن',
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-4 bg-[#017768]/10 text-[#017768] rounded-full text-sm font-bold tracking-wide">
              من نحن
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#017768] mb-8 leading-tight">
              نطور الاستثمار <br /> <span className="text-[#b9995e]">لنرتقي بالخدمة</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                شركة هدية الخير هي الذراع الاستثماري الرسمي لجمعية هدية الحاج والمعتمر، تأسست لتكون حجر الزاوية في تحقيق الاستدامة المالية للجمعية.
              </p>
              <p>
                نعمل من خلال رؤية طموحة تدمج بين كفاءة القطاع الخاص وأهداف القطاع غير الربحي، لضمان تقديم خدمات استثنائية تليق بضيوف بيت الله الحرام وزوار مسجد نبيه صلى الله عليه وسلم.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 gap-8">
            <div className="group bg-gray-50 p-10 rounded-3xl border-r-8 border-[#b9995e] shadow-sm hover:shadow-xl transition-all duration-300">
              <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#b9995e] transition-colors">رؤيتنا</h4>
              <p className="text-gray-600 text-lg leading-relaxed italic">"أن نكون النموذج الرائد عالمياً في الاستثمار غير الربحي المتخصص في خدمة ضيوف الرحمن، محققين التوازن بين العائد المالي والأثر الاجتماعي."</p>
            </div>
            <div className="group bg-[#017768] p-10 rounded-3xl border-r-8 border-[#b9995e] shadow-lg text-white hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-4">رسالتنا</h4>
              <p className="opacity-90 text-lg leading-relaxed">تمكين موارد الجمعية من خلال إدارة استثمارات مستدامة ومبتكرة، وبناء شراكات فاعلة تسهم في إثراء تجربة الحاج والمعتمر وتضمن نمو العطاء.</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-16 relative">
            قيمنا المؤسسية
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b9995e]"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover-lift text-center group">
                <div className="flex justify-center mb-6 transition-transform group-hover:scale-110 duration-300">
                  {v.icon}
                </div>
                <h4 className="font-extrabold text-xl mb-3 text-[#017768]">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100">
            <h3 className="text-3xl font-bold mb-8 text-[#017768]">أهدافنا الاستراتيجية</h3>
            <div className="space-y-6">
              {goals.map((goal, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <span className="bg-[#b9995e] text-white rounded-xl w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0 group-hover:rotate-12 transition-transform">{i+1}</span>
                  <p className="text-gray-700 text-lg font-medium py-1.5">{goal}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[400px] rounded-[2rem] overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800" alt="Mecca" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#017768]/90 to-transparent flex items-end p-10">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-3">المسؤولية المجتمعية</h3>
                <p className="opacity-90 leading-relaxed text-lg font-light">
                  نحن لا نستثمر فقط في الأصول، بل نستثمر في الإنسان والأثر. كل عائد تحققه الشركة يتحول إلى وجبة، سقيا، أو خدمة تيسر على ضيوف الرحمن رحلتهم الإيمانية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
