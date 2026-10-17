import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Home,
  User,
  Cpu,
  Briefcase,
  Award,
  Layers,
  Mail,
  Sun,
  Moon,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';

interface DockItemProps {
  mouseX: any;
  children: React.ReactNode;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  isActive?: boolean;
  className?: string;
}

const DockItem: React.FC<DockItemProps> = ({
  mouseX,
  children,
  label,
  onClick,
  href,
  isActive = false,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [38, 56, 38]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 14 });

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={`group relative flex items-center justify-center rounded-2xl border transition-colors shadow-md cursor-pointer ${
        isActive
          ? 'bg-sky-500/20 border-sky-400 text-sky-500 dark:text-sky-400 shadow-sky-500/20'
          : className ||
            'bg-white/90 dark:bg-slate-900/80 border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-sky-400/80 hover:text-sky-500 dark:hover:text-sky-400'
      }`}
      onClick={onClick}
    >
      {/* Tooltip with centered pop-up */}
      <span className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 scale-75 opacity-0 rounded-lg bg-slate-900/95 text-slate-100 dark:bg-white/95 dark:text-slate-950 px-2.5 py-1 text-[11px] font-mono font-medium shadow-2xl border border-slate-700/60 dark:border-slate-200/60 backdrop-blur-md transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap z-50">
        {label}
      </span>
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" aria-label={label}>
        {content}
      </a>
    );
  }

  return content;
};

interface DockProps {
  isDark: boolean;
  onToggleTheme: (e?: React.MouseEvent) => void;
  activeSection: string;
}

export const Dock: React.FC<DockProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center gap-1.5 sm:gap-2 rounded-3xl border border-slate-300/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 p-1.5 sm:p-2.5 shadow-2xl backdrop-blur-2xl overflow-visible"
      >
        <DockItem mouseX={mouseX} label="Home" href="#home" isActive={activeSection === 'home'}>
          <Home className="size-4 sm:size-5" />
        </DockItem>
        <DockItem mouseX={mouseX} label="About" href="#about" isActive={activeSection === 'about'}>
          <User className="size-4 sm:size-5" />
        </DockItem>
        <DockItem mouseX={mouseX} label="Skills" href="#skills" isActive={activeSection === 'skills'}>
          <Cpu className="size-4 sm:size-5" />
        </DockItem>
        <DockItem mouseX={mouseX} label="Certificates" href="#certificates" isActive={activeSection === 'certificates'}>
          <Award className="size-4 sm:size-5" />
        </DockItem>
        <DockItem mouseX={mouseX} label="Experience" href="#experience" isActive={activeSection === 'experience'}>
          <Briefcase className="size-4 sm:size-5" />
        </DockItem>
        <DockItem mouseX={mouseX} label="Projects" href="#projects" isActive={activeSection === 'projects'}>
          <Layers className="size-4 sm:size-5" />
        </DockItem>
        <DockItem mouseX={mouseX} label="Contact" href="#contact" isActive={activeSection === 'contact'}>
          <Mail className="size-4 sm:size-5" />
        </DockItem>

        <div className="h-5 sm:h-6 w-[1px] bg-slate-300 dark:bg-slate-700/60 mx-0.5 sm:mx-1 shrink-0" />

        <DockItem
          mouseX={mouseX}
          label="LinkedIn"
          href="https://linkedin.com/in/hoanganhminh/"
          className="bg-white/90 dark:bg-slate-900/80 border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
        >
          <LinkedinIcon className="size-4 sm:size-5" />
        </DockItem>
        <DockItem
          mouseX={mouseX}
          label="GitHub"
          href="https://github.com/hoanganhminh"
          className="bg-white/90 dark:bg-slate-900/80 border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-500/10"
        >
          <GithubIcon className="size-4 sm:size-5" />
        </DockItem>

        <DockItem
          mouseX={mouseX}
          label={isDark ? "Light Mode" : "Dark Mode"}
          onClick={(e) => onToggleTheme(e)}
        >
          {isDark ? <Sun className="size-4 sm:size-5 text-amber-400" /> : <Moon className="size-4 sm:size-5 text-indigo-500" />}
        </DockItem>
      </motion.div>
    </div>
  );
};
