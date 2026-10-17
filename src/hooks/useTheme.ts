import { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true; // Default dark
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextDark = !isDark;

    // View Transitions API circular expansion (MagicUI AnimatedThemeToggler style)
    if (
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      let x = e ? e.clientX : window.innerWidth / 2;
      let y = e ? e.clientY : window.innerHeight / 2;
      if (x === 0 && y === 0) {
        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(() => {
        // flushSync ensures React immediately commits the DOM updates and class changes
        flushSync(() => {
          setIsDark(nextDark);
          const root = document.documentElement;
          if (nextDark) {
            root.classList.add('dark');
            root.classList.remove('light');
            localStorage.setItem('theme', 'dark');
          } else {
            root.classList.remove('dark');
            root.classList.add('light');
            localStorage.setItem('theme', 'light');
          }
        });
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        document.documentElement.animate(
          { clipPath },
          {
            duration: 500,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      setIsDark(nextDark);
    }
  };

  return { isDark, toggleTheme };
};
