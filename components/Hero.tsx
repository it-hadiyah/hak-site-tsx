
import React from 'react';
import { LogoVertical } from './Logos';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white geometric-pattern pt-16">
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#017768]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#b9995e]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8 flex justify-center animate-reveal">
           <div className="relative group">
             <div className="absolute -inset-10 bg-gradient-to-tr from-[#017768]/10 to-[#b9995e]/15 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
             <LogoVertical className="w-56 md:w-72 lg:w-80 relative transition-transform duration-700 hover:rotate-1" />
           </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-[#017768] leading-tight animate-reveal" style={{ animationDelay: '0.2s' }}>
          نطور الاستثمار <br className="hidden md:block" /> 
          <span className="text-[#b9995e]">لنرتقي بالخدمة</span>
        </h1>
        
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-gray-700 leading-relaxed font-medium animate-reveal" style={{ animationDelay: '0.4s' }}>
          الذراع الاستثماري الرسمي لجمعية هدية الحاج والمعتمر، نحو استدامة مالية تخدم ضيوف الرحمن بأعلى معايير الجودة.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-reveal" style={{ animationDelay: '0.6s' }}>
          <button onClick={onCtaClick} className="group relative bg-[#017768] text-white overflow-hidden px-12 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-[#017768]/30 hover:scale-105 active:scale-95">
            <span className="relative z-10">عن هدية الخير</span>
            <div className="absolute inset-0 bg-[#b9995e] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          <button className="group px-12 py-5 rounded-full font-bold text-lg border-2 border-[#b9995e] text-[#b9995e] hover:bg-[#b9995e] hover:text-white transition-all duration-300 active:scale-95">مجالات الاستثمار</button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L1440 120L1440 0C1440 0 1152 120 720 120C288 120 0 0 0 0L0 120Z" fill="#fdfdfc"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
