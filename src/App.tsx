// src/App.tsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
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
    </main>
  );
}

export default function App() {
  return (
    <JapaneseRevealProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:id" element={<TeamDetails />} />
      </Routes>
      <Footer />
    </JapaneseRevealProvider>
  )
}
