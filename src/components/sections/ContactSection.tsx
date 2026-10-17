import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Terminal,
} from 'lucide-react';
import { MagicCard } from '../magicui/MagicCard';
import { triggerConfetti } from '../magicui/Confetti';
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  YoutubeIcon,
  CredlyIcon,
  LeetcodeIcon,
  HackerrankIcon,
  CourseraIcon,
} from '../icons/BrandIcons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const email = 'hoanganhminh120601@gmail.com';
  const phone = '+84 354250443';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    triggerConfetti(0.5, 0.6);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: 'https://linkedin.com/in/hoanganhminh/',
      hoverClass:
        'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.45)]',
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: 'https://github.com/hoanganhminh',
      hoverClass:
        'hover:bg-[#24292F] hover:text-white hover:border-[#404954] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
    },
    {
      name: 'Credly',
      icon: CredlyIcon,
      url: 'https://www.credly.com/users/hoanganhminh',
      hoverClass:
        'hover:bg-[#FF6A00] hover:text-white hover:border-[#FF6A00] hover:shadow-[0_0_20px_rgba(255,106,0,0.45)]',
    },
    {
      name: 'LeetCode',
      icon: LeetcodeIcon,
      url: 'https://leetcode.com/u/hoanganhminh/',
      hoverClass:
        'hover:bg-[#FFA116] hover:text-slate-950 hover:border-[#FFA116] hover:shadow-[0_0_20px_rgba(255,161,22,0.45)]',
    },
    {
      name: 'HackerRank',
      icon: HackerrankIcon,
      url: 'https://www.hackerrank.com/hoanganhminh1201',
      hoverClass:
        'hover:bg-[#2EC866] hover:text-slate-950 hover:border-[#2EC866] hover:shadow-[0_0_20px_rgba(46,200,102,0.45)]',
    },
    {
      name: 'Coursera',
      icon: CourseraIcon,
      url: 'https://www.coursera.org/user/d288bdeabfee27414144f68200e879fc',
      hoverClass:
        'hover:bg-[#0056D2] hover:text-white hover:border-[#0056D2] hover:shadow-[0_0_20px_rgba(0,86,210,0.45)]',
    },
    {
      name: 'YouTube',
      icon: YoutubeIcon,
      url: 'https://youtube.com/c/@TheBattleCatsVietNam',
      hoverClass:
        'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.45)]',
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      url: 'https://www.facebook.com/profile.php?id=100006564360112',
      hoverClass:
        'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.45)]',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Contact & Collaboration
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Open to senior backend engineering roles, .NET architectural consulting, or professional inquiries.
          </p>
        </div>

        {/* Full-Width 2-Column Layout matching other sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: DIRECT_CHANNELS */}
          <div className="lg:col-span-6 flex flex-col">
            <MagicCard className="h-full p-6 sm:p-8 space-y-5 rounded-3xl" gradientColor="#38bdf8" gradientOpacity={0.12}>
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-3.5">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-500 dark:text-sky-400 font-semibold tracking-wider">
                  <Terminal className="w-4 h-4" />
                  <span>DIRECT_CHANNELS</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  <span className="text-[11px] font-mono text-emerald-500 dark:text-emerald-400 font-medium">ACTIVE</span>
                </div>
              </div>

              {/* Primary Email with copy button */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Primary Email
                </span>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors truncate"
                    >
                      {email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-600 dark:text-sky-300 border border-sky-400/30 text-xs font-mono transition-all duration-150 shrink-0 cursor-pointer hover:scale-105 active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                        <span className="text-emerald-500 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Phone
                </span>
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-sky-400/50 hover:bg-slate-200/50 dark:hover:bg-slate-900/60 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    {phone}
                  </span>
                </a>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                  Location
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <MapPin className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    Vo Chi Cong, Tay Ho, Hanoi, Vietnam
                  </span>
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Card 2: CONNECTED PROFILES */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-lg space-y-6">
            <div className="space-y-5">
              <div className="border-b border-slate-200 dark:border-slate-800/80 pb-3.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                  CONNECTED PROFILES
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-slate-100/90 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${s.hoverClass}`}
                    >
                      <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                      <span>{s.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Engagement Status */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-sky-400 inline-block animate-ping" />
                <span>Open for backend &amp; consulting discussions</span>
              </span>
              <span className="text-sky-500 dark:text-sky-400 font-semibold">Response: &lt; 24h</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center space-y-1.5">
          <p className="text-xs font-mono text-slate-500">
            Built with React, Vite, Three.js WebGL, Shaders, Lenis & Tailwind CSS.
          </p>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Hoàng Anh Minh. All rights reserved. Hanoi, Vietnam.
          </p>
        </div>

      </div>
    </section>
  );
};
