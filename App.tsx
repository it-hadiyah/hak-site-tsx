
import React, { useState, useEffect } from 'react';
import { PageId, NavItem } from './types';
import { LogoHorizontal } from './components/Logos';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Governance from './components/Governance';
import MediaCenter from './components/MediaCenter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NewsArchive from './components/NewsArchive';

const HomePage: React.FC<{ onNavigate: (id: PageId) => void }> = ({ onNavigate }) => {
  return (
    <div className="animate-reveal">
      <Hero onCtaClick={() => onNavigate('about')} />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1.5 mb-4 bg-[#017768]/10 text-[#017768] rounded-full text-sm font-bold">من نحن</div>
              <h2 className="text-4xl font-extrabold text-[#017768] mb-6">نطور الاستثمار <span className="text-[#b9995e]">لنرتقي بالخدمة</span></h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                شركة هدية الخير هي الذراع الاستثماري الرسمي لجمعية هدية الحاج والمعتمر، تأسست لتكون حجر الزاوية في تحقيق الاستدامة المالية للجمعية وتقديم خدمات استثنائية لضيوف الرحمن.
              </p>
              <button onClick={() => onNavigate('about')} className="text-[#017768] font-bold border-b-2 border-[#b9995e] pb-1 hover:text-[#b9995e] transition-colors">
                اقرأ المزيد عن رؤيتنا
              </button>
            </div>
            <div className="md:w-1/2">
               <img src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800" alt="Mecca" className="rounded-[2.5rem] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 geometric-pattern">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#017768] mb-12">شركاء النجاح والداعمون</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 opacity-70">
            {['شراكات حكومية', 'القطاع الخاص', 'القطاع الثالث', 'شركاء التشغيل'].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center font-bold text-gray-400 grayscale hover:grayscale-0 transition-all">{p}</div>
            ))}
          </div>
          <button onClick={() => onNavigate('governance')} className="bg-[#017768] text-white px-10 py-3 rounded-full font-bold hover:bg-[#b9995e] transition-all">مشاهدة تفاصيل الشراكات</button>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'مجالات العمل' },
    { id: 'governance', label: 'الشراكات والحوكمة' },
    { id: 'media', label: 'المركز الإعلامي' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (id: PageId) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={navigateTo} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'governance': return <Governance />;
      case 'media': return <MediaCenter onReadMore={() => navigateTo('news-archive')} />;
      case 'news-archive': return <NewsArchive onBack={() => navigateTo('media')} />;
      case 'contact': return <Contact />;
      default: return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-tajawal">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-1' : 'bg-white/90 backdrop-blur-md py-3'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer py-1" onClick={() => navigateTo('home')}>
             <LogoHorizontal className={`transition-all duration-300 ${isScrolled ? 'h-14 w-auto' : 'h-20 w-auto'}`} />
          </div>
          <ul className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button onClick={() => navigateTo(item.id)} className={`text-sm font-bold transition-all relative py-2 ${currentPage === item.id ? 'text-[#017768]' : 'text-gray-600 hover:text-[#017768]'}`}>
                  {item.label}
                  {(currentPage === item.id || (currentPage === 'news-archive' && item.id === 'media')) && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b9995e] animate-reveal"></span>}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={() => navigateTo('contact')} className="hidden md:block bg-[#017768] hover:bg-[#b9995e] text-white px-8 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">تواصل معنا</button>
            <button className="lg:hidden p-2 text-[#017768]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
          <ul className="py-4 px-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}><button onClick={() => navigateTo(item.id)} className={`block w-full text-right text-base font-bold py-2 ${currentPage === item.id ? 'text-[#017768]' : 'text-gray-600'}`}>{item.label}</button></li>
            ))}
            <li className="pt-4"><button onClick={() => navigateTo('contact')} className="w-full bg-[#017768] text-white py-3 rounded-xl font-bold">تواصل معنا</button></li>
          </ul>
        </div>
      </nav>
      <main className="flex-grow pt-24">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
