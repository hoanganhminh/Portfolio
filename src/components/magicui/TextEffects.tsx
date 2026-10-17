import React, { useEffect, useState, useRef } from 'react';

// 1. Aurora Text (Rainbow / Cyber flowing gradient)
export const AuroraText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <span
      className={`relative inline-block bg-gradient-to-r from-sky-400 via-indigo-400 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x font-bold ${className}`}
    >
      {children}
    </span>
  );
};

// 2. Typing Animation
export const TypingAnimation: React.FC<{
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800,
  className = '',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      <span>{currentText}</span>
      <span className="inline-block w-2 h-5 bg-sky-400 ml-1 animate-pulse" />
    </span>
  );
};

// 3. Number Ticker (Smooth counting animation on view)
export const NumberTicker: React.FC<{
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}> = ({ value, duration = 2, suffix = '', className = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const current = Math.round(end * (progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)));
      setDisplayValue(current);

      if (frame === totalFrames) {
        clearInterval(counter);
        setDisplayValue(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className={`font-mono font-bold tracking-tight ${className}`}>
      {displayValue}
      {suffix}
    </span>
  );
};
