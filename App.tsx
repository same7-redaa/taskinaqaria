
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#B59876]/30">
      <Header />
      <main>
        <Hero />
        <div className="reveal"><Stats /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Certificate /></div>
        <div className="reveal"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
