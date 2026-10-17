import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Building,
  ChevronRight,
} from 'lucide-react';

interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  category: 'enterprise' | 'support' | 'creator';
  summary: string;
  keyPoints: string[];
  skills: string[];
  accentColor: string;
}

const experiences: Job[] = [
  {
    id: 'fpt-support',
    role: 'Production Support C# Developer',
    company: 'FPT Software (HIS GHC Healthcare)',
    period: 'Feb 2024 — Present',
    category: 'support',
    summary:
      'L2/L3 production engineering for Hospital Information Systems (HIS). Ensuring high system availability, real-time client engagement, and high-frequency bug mitigation.',
    keyPoints: [
      'Diagnostic root-cause analysis for high-priority production incidents and hospital workflow halts.',
      'Manual and automated batch job execution, data patch scripts, and transactional recovery.',
      'Feature enhancements and performance tuning for critical C# healthcare backend modules.',
      'Direct client communication and SLA alignment with international healthcare operators.',
    ],
    skills: ['C#', '.NET', 'Production Support', 'Incident Management', 'Healthcare Systems'],
    accentColor: '#38bdf8',
  },
  {
    id: 'ghc-fhs',
    role: 'C# Developer & SSO Specialist',
    company: 'GHC FHS',
    period: 'Oct 2023 — Present',
    category: 'enterprise',
    summary:
      'Architected and implemented enterprise Hospital Single Sign-On (SSO) infrastructure, centralizing identity across medical portals.',
    keyPoints: [
      'End-to-end integration of Auth0 and Azure Active Directory (Azure AD) for secure staff authentication.',
      'RESTful API development with ASP.NET Core & PostgreSQL using Entity Framework Core.',
      'Amazon S3 integration for medical document attachments and encrypted transmission.',
      'Drafted technical Proof-of-Concept (POC) specifications and conducted internal developer training.',
    ],
    skills: ['Auth0', 'Azure AD', 'C#', '.NET Core', 'PostgreSQL', 'Entity Framework', 'AWS S3'],
    accentColor: '#10b981',
  },
  {
    id: 'fhn-mas',
    role: 'C# Backend Developer',
    company: 'FHN MAS',
    period: 'Nov 2021 — Present',
    category: 'enterprise',
    summary:
      'Core backend engineer maintaining high-traffic enterprise solutions with complex database schemas.',
    keyPoints: [
      'Full lifecycle feature design, database schema migration, and backend service maintenance.',
      'Stored procedure optimization and query tuning on Microsoft SQL Server for high-concurrency loads.',
      'Refactored legacy modules into modern .NET Core services with enhanced testability.',
      'Collaborated within Scrum sprint cadences to ensure predictable bi-weekly releases.',
    ],
    skills: ['Microsoft SQL Server', '.NET Core', 'C#', 'ASP.NET MVC', 'Entity Framework'],
    accentColor: '#818cf8',
  },
  {
    id: 'fhn-tcs',
    role: 'Production Support Engineer',
    company: 'FHN TCS (StarHub Singapore Project)',
    period: 'Nov 2021 — Dec 2022',
    category: 'support',
    summary:
      'Cross-border production support for major Singapore telecommunications provider PCCW StarHub.',
    keyPoints: [
      'Managed mission-critical incidents, ticket escalation, and severity-1 system alarms.',
      'Performed log analysis, telemetry inspection, and emergency batch executions.',
      'Daily standup collaboration and technical status reporting directly with Singapore leads.',
      'Authored automated shell maintenance scripts to minimize recurring manual interventions.',
    ],
    skills: ['.NET Core', 'SQL', 'Production Support', 'Shell Scripting', 'Client Comms'],
    accentColor: '#a855f7',
  },
  {
    id: 'youtube-creator',
    role: 'Gaming Content Creator',
    company: 'YouTube (@TheBattleCatsVietNam)',
    period: 'Jul 2019 — Present',
    category: 'creator',
    summary:
      'Personal creative channel with 10k+ subscribers, producing game guides and strategy breakdowns.',
    keyPoints: [
      'Created analytical level guides and strategic game walkthroughs.',
      'Live streamed and engaged an active viewer community.',
      'Video production and editing with Adobe Premiere Pro.',
    ],
    skills: ['Video Production', 'Adobe Premiere Pro', 'Community Engagement', 'Streaming'],
    accentColor: '#f43f5e',
  },
];

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'enterprise' | 'support' | 'creator'>('all');

  const filteredExperiences = experiences.filter(
    (exp) => filter === 'all' || exp.category === filter
  );

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Professional journey across enterprise healthcare, international telecoms, and systems maintenance.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {[
              { key: 'all', label: 'All Roles' },
              { key: 'enterprise', label: '.NET Development' },
              { key: 'support', label: 'Production Engineering' },
              { key: 'creator', label: 'Creator Channel' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  filter === tab.key
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Axis - Exactly centered at left-6 (mobile) and left-8 (tablet/desktop) */}
          <div className="absolute left-6 sm:left-8 top-3 bottom-3 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400 via-indigo-500 to-slate-300 dark:to-slate-800/40" />

          <div className="space-y-8">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Node Dot - Exactly centered on the vertical line (left-6 / left-8 with -translate-x-1/2) */}
                <div
                  className="absolute left-6 sm:left-8 top-7 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white dark:border-slate-950 shadow-[0_0_12px_currentColor] z-10"
                  style={{ backgroundColor: exp.accentColor, color: exp.accentColor }}
                />

                {/* Experience Card */}
                <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <div className="space-y-3">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-sky-500 dark:text-sky-400 flex items-center gap-1.5 pt-0.5">
                          <Building className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                        <Calendar className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Key Responsibilities */}
                    <ul className="space-y-1.5 pt-1">
                      {exp.keyPoints.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
