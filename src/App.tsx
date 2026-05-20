// src/App.tsx
import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { JapaneseRevealProvider } from './components/ui/JapaneseRevealClean'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImgSection from './components/imgSection'
import AboutSection from './components/AboutSection'
import DivisionsSection from './components/DivisionsSection'
import TeamSection from './components/TeamSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import TeamDetails from './components/TeamDetails'
import SakuraScattering from './components/SakuraScattering'

const faqSectionImages = [
  "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551158423-100d177bfaae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734279135115-6d8984e08206?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ImgSection />
      <AboutSection />
      <DivisionsSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ImgSection images={faqSectionImages} />
    </main>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  useEffect(() => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <JapaneseRevealProvider>
      <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
        <SakuraScattering />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team/:id" element={<TeamDetails />} />
        </Routes>
        <Footer />
      </div>
    </JapaneseRevealProvider>
  )
}
