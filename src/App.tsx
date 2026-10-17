import { useState, useEffect } from 'react';
import { useLenis, scrollToTop } from './hooks/useLenis';
import { useTheme } from './hooks/useTheme';
import { ThreeCanvas } from './components/canvas/ThreeCanvas';
import { Navbar } from './components/sections/Navbar';
import { Dock } from './components/magicui/Dock';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { BentoSkillsSection } from './components/sections/BentoSkillsSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ArrowUp } from 'lucide-react';

export function App() {
  useLenis();
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // 1. Asynchronous IntersectionObserver for active section (zero layout thrashing, zero scroll lag)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    const sections = ['home', 'about', 'skills', 'certificates', 'experience', 'projects', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 2. Throttled scroll check for back to top button
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
      {/* 3D WebGL Canvas Layer with Custom Shaders & Circular Star Dust */}
      <ThreeCanvas isDark={isDark} />

      {/* Top Navbar */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <BentoSkillsSection />
        <CertificatesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Floating Dock (macOS Style) */}
      <Dock isDark={isDark} onToggleTheme={toggleTheme} activeSection={activeSection} />

      {/* Scroll to Top FAB (uses Lenis scrollToTop for 120fps butter-smooth scroll) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-5 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-white/90 dark:bg-slate-900/85 border border-slate-300 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="size-4 sm:size-5" />
        </button>
      )}
    </div>
  );
}

export default App;
