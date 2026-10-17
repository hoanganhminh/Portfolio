import React from 'react';
import {
  MapPin,
  Server,
  Database,
  ShieldCheck,
  Activity,
  Terminal,
} from 'lucide-react';
import { MagicCard } from '../magicui/MagicCard';
import { TiltCard } from '../magicui/TiltCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // ABOUT THE ENGINEER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Engineering Background
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Focused on robust backend software engineering, clean code architecture, and high-reliability enterprise systems.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait & Education */}
          <div className="lg:col-span-5 space-y-4">
            <TiltCard className="p-2 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src="/assets/minh-flower.png"
                  alt="Hoàng Anh Minh Graduation"
                  className="w-full h-full object-cover object-center filter saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-500 dark:text-sky-400 font-semibold">FPT University</span>
                    <span className="text-slate-500 dark:text-slate-400">2019 — 2023</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    Bachelor of Software Engineering
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                    <span>Hanoi, Vietnam</span>
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Pure Backend Developer Narrative & 4 Focus Areas */}
          <div className="lg:col-span-7 space-y-5">
            
            <MagicCard className="p-6 sm:p-7" gradientColor="#38bdf8" gradientOpacity={0.12}>
              <div className="space-y-3.5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100">
                  Hi, I'm <strong className="text-sky-500 dark:text-sky-400">Hoàng Anh Minh</strong>, a Backend Software Engineer currently working at <span className="font-semibold text-slate-900 dark:text-slate-100">CMC Global</span>.
                </p>
                <p>
                  With 4+ years of professional development experience, I specialize in architecting and maintaining mission-critical backend systems using <strong className="text-slate-900 dark:text-slate-100 font-semibold">C#</strong> within the <strong className="text-slate-900 dark:text-slate-100 font-semibold">.NET ecosystem</strong>.
                </p>
                <p>
                  My work spans healthcare clinical systems (HIS), enterprise Single Sign-On (SSO) identity federation, and cross-border production support. I prioritize clean domain architecture, query optimization, and building resilient APIs that scale under high concurrency.
                </p>
              </div>
            </MagicCard>

            {/* 4 Pure Backend Engineering Focus Areas */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-sky-500 dark:text-sky-400">
                  <Server className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    C# & .NET Core Services
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Clean Architecture, RESTful Web APIs, asynchronous request handling, and dependency injection patterns.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-500 dark:text-emerald-400">
                  <Database className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Database Optimization
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Entity Framework Core, Dapper micro-ORM, complex T-SQL queries, indexing, and PostgreSQL schemas.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-500 dark:text-indigo-400">
                  <ShieldCheck className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Enterprise SSO & Identity
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Centralized token authentication integrating Auth0, Azure AD, and OpenID Connect protocols for healthcare platforms.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/50 backdrop-blur-sm space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400">
                  <Activity className="w-4 h-4" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Production Support & SLA
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  L2/L3 triage, automated diagnostic batch jobs, emergency hotfixes, and zero-downtime operational support.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
