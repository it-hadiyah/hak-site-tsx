
import React from 'react';
import { LogoVertical } from './Logos';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'X', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, hoverBg: 'hover:bg-black' },
    { name: 'LinkedIn', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>, hoverBg: 'hover:bg-[#0077B5]' }
  ];

  return (
    <footer className="bg-[#017768] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b9995e] to-transparent"></div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white p-6 rounded-3xl inline-block mb-8 shadow-xl transition-transform hover:scale-105 duration-300">
              <LogoVertical className="h-28 md:h-36" />
            </div>
            <p className="text-white/70 max-w-md text-lg leading-relaxed mb-8">
              شركة هدية الخير هي الذراع الاستثماري غير الربحي لجمعية هدية الحاج والمعتمر، نهدف لتحويل الاستثمار إلى أثر مستدام يخدم ضيوف الرحمن.
            </p>
            <div className="flex gap-4">
               {socialLinks.map((social, i) => (
                 <a key={i} href="#" className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-all duration-300 ${social.hoverBg} hover:-translate-y-1 hover:shadow-lg`}>{social.icon}</a>
               ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 text-[#b9995e]">روابط سريعة</h4>
            <ul className="space-y-4">
              {['عن الشركة', 'مجالات العمل', 'الشراكات', 'المركز الإعلامي', 'تواصل معنا'].map((link, i) => (
                <li key={i}><a href="#" className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#b9995e] opacity-0 group-hover:opacity-100 transition-opacity"></span>{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 text-[#b9995e]">المعلومات القانونية</h4>
            <ul className="space-y-4">
              {['سياسة الخصوصية', 'شروط الاستخدام', 'الحوكمة والامتثال', 'التقارير السنوية'].map((link, i) => (
                <li key={i}><a href="#" className="text-white/70 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/50 text-center md:text-right">© {new Date().getFullYear()} شركة هدية الخير للاستثمار. جميع الحقوق محفوظة لجمعية هدية الحاج والمعتمر.</p>
          <div className="flex items-center gap-2 text-sm text-white/50"><span>صنع بكل حب لخدمة ضيوف الرحمن</span><span className="text-red-500">❤️</span></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none -mb-10 -mr-10">
        <LogoVertical className="w-80" light />
      </div>
    </footer>
  );
};

export default Footer;
