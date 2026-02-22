
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 bg-[#b9995e]/10 text-[#b9995e] rounded-full text-sm font-bold tracking-wide">
            تواصل مباشر
          </div>
          <h2 className="text-4xl font-extrabold text-[#017768] mb-4">يسعدنا تواصلكم</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">نرحب بكافة الاستفسارات المؤسسية وفرص الشراكة الواعدة.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <div className="bg-gray-50 p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-[#017768]">نموذج الاستفسار المؤسسي</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-700 pr-2">الاسم الكامل</label>
                  <input type="text" className="p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#017768] focus:border-transparent outline-none transition-all" placeholder="الاسم كما في الهوية" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-700 pr-2">الجهة / المؤسسة</label>
                  <input type="text" className="p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#017768] focus:border-transparent outline-none transition-all" placeholder="اسم الشركة أو الجمعية" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-700 pr-2">البريد الإلكتروني</label>
                  <input type="email" className="p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#017768] focus:border-transparent outline-none transition-all text-left" placeholder="example@domain.com" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-700 pr-2">نوع الاستفسار</label>
                  <select className="p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#017768] outline-none bg-white transition-all appearance-none cursor-pointer">
                    <option>شراكات استراتيجية</option>
                    <option>فرص استثمارية</option>
                    <option>استفسار إعلامي</option>
                    <option>أخرى</option>
                  </select>
                </div>
                <div className="md:col-span-2 flex flex-col gap-3">
                  <label className="text-sm font-bold text-gray-700 pr-2">تفاصيل الرسالة</label>
                  <textarea rows={5} className="p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#017768] outline-none transition-all resize-none" placeholder="اكتب استفسارك هنا بكل وضوح..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-[#017768] text-white py-5 rounded-2xl font-extrabold text-lg hover:bg-[#b9995e] shadow-lg transition-all active:scale-95">إرسال الطلب</button>
                  <p className="text-sm text-gray-400 mt-4 text-center">نلتزم بالرد على طلباتكم الرسمية خلال 48 ساعة عمل.</p>
                </div>
              </form>
            </div>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div className="bg-[#b9995e] p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-8">معلومات الاتصال</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">المقر الرئيسي</div>
                    <div className="text-sm opacity-90 font-medium">مكة المكرمة - العزيزية<br />المملكة العربية السعودية</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.89 13.26C11.5522 13.7013 12.4478 13.7013 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">البريد الإلكتروني</div>
                    <div className="text-sm opacity-90 font-medium font-sans">info@hadiyah-alkhair.sa</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1865 21.9482 20.4504 21.8443 20.6959C21.7404 20.9413 21.5877 21.1633 21.3953 21.3481C21.203 21.533 20.975 21.6769 20.7251 21.7709C20.4752 21.8649 20.2084 21.9071 19.94 21.92C17.15 21.6 14.47 20.59 12.17 19.01C10.03 17.58 8.21 15.76 6.78 13.62C5.19 11.31 4.18 8.63 3.86 5.83C3.84714 5.56191 3.88939 5.29524 3.98402 5.04561C4.07865 4.79599 4.22374 4.56847 4.41 4.3768C4.59626 4.18514 4.81987 4.03322 5.06734 3.93041C5.31481 3.82759 5.58097 3.77601 5.85 3.77857H8.85C9.33 3.77857 9.77 4.14857 9.87 4.61857C10.05 5.52857 10.27 6.41857 10.53 7.27857C10.66 7.72857 10.55 8.21857 10.23 8.53857L8.96 9.80857C10.29 12.14 12.23 14.08 14.56 15.41L15.83 14.14C16.15 13.82 16.64 13.71 17.09 13.84C17.95 14.1 18.84 14.32 19.75 14.5C20.22 14.6 20.59 15.04 20.59 15.52V18.52" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg">مركز الاتصال</div>
                    <div className="text-sm opacity-90 font-medium font-sans text-left" dir="ltr">+966 12 550 0000</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#017768]/5 p-10 rounded-[3rem] border border-[#017768]/10">
              <h3 className="text-xl font-bold mb-4 text-[#017768]">ساعات العمل</h3>
              <p className="text-gray-600 font-medium leading-relaxed">نستقبل زياراتكم واستفساراتكم من الأحد إلى الخميس، من الساعة 8:00 صباحاً وحتى 4:00 مساءً.</p>
              <div className="mt-6 flex items-center gap-2 text-[#b9995e] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#b9995e] animate-ping"></span>
                متاح الآن للاستفسارات
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
