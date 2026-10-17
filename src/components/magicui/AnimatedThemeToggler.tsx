import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface AnimatedThemeTogglerProps {
  isDark: boolean;
  onToggle: (e: React.MouseEvent) => void;
  className?: string;
}

export const AnimatedThemeToggler: React.FC<AnimatedThemeTogglerProps> = ({
  isDark,
  onToggle,
  className = '',
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center justify-center size-10 rounded-2xl border border-slate-300/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${className}`}
    >
      <Sun
        className={`size-5 text-amber-400 transition-all duration-500 absolute ${
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0 pointer-events-none'
        }`}
      />
      <Moon
        className={`size-5 text-indigo-500 transition-all duration-500 absolute ${
          isDark
            ? 'rotate-90 scale-0 opacity-0 pointer-events-none'
            : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
};
