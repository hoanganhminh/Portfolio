import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Server,
  Layers,
} from 'lucide-react';
import { OrbitingCircles } from '../magicui/OrbitingCircles';

interface SkillItemProps {
  name: string;
  category: string;
  level: number;
  highlight?: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, category, level, highlight = false }) => (
  <div className="py-2.5 border-b border-slate-200/80 dark:border-slate-800/60 last:border-none flex items-center justify-between text-xs sm:text-sm">
    <div className="flex items-center gap-2.5">
      <span className={`size-1.5 rounded-full ${highlight ? 'bg-sky-400' : 'bg-slate-400 dark:bg-slate-600'}`} />
      <span className="font-semibold text-slate-800 dark:text-slate-200">
        {name}
      </span>
      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
        ({category})
      </span>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-20 sm:w-28 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden hidden xs:block">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full ${highlight ? 'bg-sky-400' : 'bg-indigo-400'}`}
        />
      </div>
      <span className="font-mono text-xs text-sky-500 dark:text-sky-400 font-semibold">{level}%</span>
    </div>
  </div>
);

export const BentoSkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Specialized Backend Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A focused breakdown of production runtimes, database engines, and architectural patterns.
          </p>
        </div>

        {/* 2-Column Clean Layout - No Russian doll nested cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Orbiting Tech Hub */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-lg space-y-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-500 dark:text-sky-400 tracking-wider">
                  Orbital Ecosystem
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 border border-sky-400/20 text-sky-500 dark:text-sky-400">
                  Interactive
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Core Runtime & Services
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Central .NET Core engine integrated with enterprise persistence and identity providers.
              </p>
            </div>

            {/* Orbiting Circles Canvas */}
            <div className="relative flex h-[300px] sm:h-[340px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-100/70 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
              {/* Center Core (.NET / C#) */}
              <div className="z-10 flex flex-col items-center justify-center size-20 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold shadow-xl shadow-sky-500/20 border border-sky-300/30">
                <span className="text-lg font-mono font-extrabold">.NET</span>
                <span className="text-[10px] text-sky-100 font-mono">C# 12</span>
              </div>

              {/* Inner Orbit (Radius 85) */}
              <OrbitingCircles radius={85} duration={16} delay={0}>
                <div className="size-9 rounded-xl bg-slate-900 border border-emerald-400/50 flex items-center justify-center text-xs font-mono font-bold text-emerald-400 shadow-md">
                  SQL
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={85} duration={16} delay={8}>
                <div className="size-9 rounded-xl bg-slate-900 border border-sky-400/50 flex items-center justify-center text-xs font-mono font-bold text-sky-400 shadow-md">
                  PG
                </div>
              </OrbitingCircles>

              {/* Outer Orbit (Radius 135, Reverse) */}
              <OrbitingCircles radius={135} duration={24} delay={0} reverse>
                <div className="size-9 rounded-xl bg-slate-900 border border-purple-400/50 flex items-center justify-center text-xs font-mono font-bold text-purple-400 shadow-md">
                  Auth0
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={135} duration={24} delay={6} reverse>
                <div className="size-9 rounded-xl bg-slate-900 border border-blue-400/50 flex items-center justify-center text-xs font-mono font-bold text-blue-400 shadow-md">
                  Azure
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={135} duration={24} delay={12} reverse>
                <div className="size-9 rounded-xl bg-slate-900 border border-amber-400/50 flex items-center justify-center text-xs font-mono font-bold text-amber-400 shadow-md">
                  AWS
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={135} duration={24} delay={18} reverse>
                <div className="size-9 rounded-xl bg-slate-900 border border-cyan-400/50 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shadow-md">
                  Docker
                </div>
              </OrbitingCircles>
            </div>
          </div>

          {/* Right Column: Clean Skill Metrics & Architectural Patterns (Flat, sleek, 0 nested cards) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Panel 1: Core Technologies List */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-lg space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Server className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Core Technologies & Proficiencies
                </h3>
              </div>

              <div className="divide-y divide-transparent">
                <SkillItem name="C# Programming (C# 10, 11, 12)" category="Language" level={90} highlight />
                <SkillItem name=".NET Core & ASP.NET Web API" category="Framework" level={88} highlight />
                <SkillItem name="Entity Framework Core & Dapper" category="ORM / Data" level={85} />
                <SkillItem name="Microsoft SQL Server (T-SQL)" category="Database" level={82} />
                <SkillItem name="PostgreSQL" category="Database" level={80} />
                <SkillItem name="Auth0 & Azure Active Directory" category="SSO / Security" level={78} />
              </div>
            </div>

            {/* Panel 2: Architectural Principles (Clean minimalist grid - NOT cards inside cards) */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-lg space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Layers className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Architectural Patterns & Methodologies
                </h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { title: 'Clean Architecture', desc: 'Strict separation of Domain, Application, and Infrastructure layers.' },
                  { title: 'CQRS & MediatR', desc: 'Segregated command handlers and optimized query pipelines.' },
                  { title: 'Hospital SSO', desc: 'Secure OAuth2 / OIDC token exchange across clinical sub-domains.' },
                  { title: 'Database Indexing', desc: 'Query plan inspection, index tuning, and latency reduction.' },
                  { title: 'Incident Diagnostics', desc: 'Automated telemetry analysis and rapid production hotfixes.' },
                  { title: 'Agile & Scrum Delivery', desc: 'Predictable sprint execution, backlog refinement, and team coaching.' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950/40 space-y-1 hover:border-sky-500/30 transition-colors shadow-xs"
                  >
                    <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">{item.title}</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
