import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedThemeToggler } from '../magicui/AnimatedThemeToggler';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: (e?: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/60 shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand: Clean Developer Monogram */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="font-mono text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-sky-400 transition-colors">
            <span className="text-sky-400 font-extrabold">&lt;</span>
            <span>Hoàng Anh Minh</span>
            <span className="text-sky-400 font-extrabold"> /&gt;</span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500 dark:text-slate-400 pl-2 border-l border-slate-300 dark:border-slate-800">
            Backend Software Engineer
          </span>
        </a>

        {/* Right Actions: Animated Theme Toggler & Clean Contact Button */}
        <div className="flex items-center gap-3">
          <AnimatedThemeToggler isDark={isDark} onToggle={onToggleTheme} />

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-sky-500/40 hover:border-sky-400 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 font-mono text-xs sm:text-sm font-semibold transition-all duration-200"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
