import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Award } from 'lucide-react';
import { AuroraText, TypingAnimation, NumberTicker } from '../magicui/TextEffects';
import { Meteors } from '../magicui/Meteors';
import { InteractiveGridPattern } from '../magicui/InteractiveGridPattern';
import { triggerConfetti } from '../magicui/Confetti';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background visual layers */}
      <InteractiveGridPattern className="opacity-30" />
      <Meteors number={14} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium"
            >
              <span>Backend Software Engineer · .NET Ecosystem</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-slate-100">
                Hi, I'm <br />
                <AuroraText className="text-5xl sm:text-7xl lg:text-8xl">
                  Hoàng Anh Minh
                </AuroraText>
              </h1>

              <div className="text-lg sm:text-2xl font-mono text-sky-400 flex items-center gap-2 pt-2">
                <span className="text-slate-500">&gt;</span>
                <TypingAnimation
                  words={[
                    'C# & .NET Core Backend Engineer',
                    'Healthcare SSO & Architecture',
                    'Enterprise Database Optimization',
                    '4+ Years Practical Experience',
                  ]}
                  typingSpeed={75}
                  deletingSpeed={40}
                  pauseTime={1900}
                />
              </div>
            </motion.div>

            {/* Concise, Professional Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Specializing in building robust, high-performance distributed backend services on the{' '}
              <strong className="text-sky-400 font-semibold">.NET ecosystem</strong>. Currently working at{' '}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">
                CMC Global
              </span>
              , with extensive engineering experience at{' '}
              <span className="text-slate-900 dark:text-slate-100 font-semibold">
                FPT Software
              </span>
              .
            </motion.p>

            {/* Clean CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#skills"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/20 transition-all duration-200"
              >
                <span>View Technical Stack</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#certificates"
                onClick={() => triggerConfetti(0.4, 0.5)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-300 transition-all duration-200"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Certificates</span>
              </a>
            </motion.div>

            {/* Core Stack Pill Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500">Core:</span>
              {['C#', '.NET 8/9', 'ASP.NET Core', 'PostgreSQL', 'SQL Server', 'Auth0', 'Azure AD', 'Docker'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>

          {/* Right Column: Clean, Elegant Portrait Frame (Fixed clipping & removed cheesy badges) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-500/20 via-transparent to-indigo-500/20 rounded-3xl blur-xl opacity-60 pointer-events-none" />

              {/* Clean Frame - No awkward cut-off tags */}
              <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-2 shadow-2xl backdrop-blur-xl overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-950">
                  <img
                    src="/assets/minh-hero.png"
                    alt="Hoàng Anh Minh"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Understated Minimalist Tag */}
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                        Hoàng Anh Minh
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Software Engineer @ CMC Global</p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 dark:text-sky-400 border border-sky-400/20">
                      .NET
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Metrics Bar (Accurate & grounded metrics) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/50 backdrop-blur-lg shadow-sm"
        >
          <div className="space-y-1 text-center md:text-left border-r border-slate-200 dark:border-slate-800/50 last:border-none p-2">
            <p className="text-2xl sm:text-3xl font-display font-bold text-sky-500 dark:text-sky-400">
              <NumberTicker value={4} suffix="+" />
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Years Experience
            </p>
          </div>

          <div className="space-y-1 text-center md:text-left border-r border-slate-200 dark:border-slate-800/50 last:border-none p-2">
            <p className="text-2xl sm:text-3xl font-display font-bold text-indigo-500 dark:text-indigo-400">
              .NET & C#
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Core Specialty
            </p>
          </div>

          <div className="space-y-1 text-center md:text-left border-r border-slate-200 dark:border-slate-800/50 last:border-none p-2">
            <p className="text-2xl sm:text-3xl font-display font-bold text-emerald-500 dark:text-emerald-400">
              Enterprise
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Healthcare & Telecom
            </p>
          </div>

          <div className="space-y-1 text-center md:text-left p-2">
            <p className="text-2xl sm:text-3xl font-display font-bold text-amber-500 dark:text-amber-400">
              <NumberTicker value={6} suffix="" />
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Verified Certificates
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
