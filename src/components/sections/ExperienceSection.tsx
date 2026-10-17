import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Building,
  ChevronRight,
  ExternalLink,
  Award,
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
  links?: { label: string; url: string }[];
  badges?: string[];
}

const experiences: Job[] = [
  {
    id: 'omifit-fullstack',
    role: 'Full Stack Engineer',
    company: 'CÔNG TY TNHH OMIFIT (Remote / Part-time)',
    period: 'Apr 2025 — Present',
    category: 'enterprise',
    summary:
      'Engineered digital health & fitness technology platforms connecting users, fitness centers, and trainers through an integrated training, analytics, and community ecosystem.',
    keyPoints: [
      'Architected and integrated cross-system RESTful APIs, background services, and automated notification pipelines.',
      'Developed responsive UI components, high-conversion landing pages, and administrative management dashboards.',
      'Designed end-to-end solutions for new platform features, handled production bug mitigation, and conducted rigorous data validation.',
      'Led UI/UX design, created multimedia technical marketing assets, and collaborated directly with clients to drive rapid product iterations.',
    ],
    skills: ['Full Stack', 'API Integration', 'React / UI', 'Node.js', 'System Architecture', 'UI/UX Design'],
    accentColor: '#38bdf8',
    links: [
      { label: 'Website (omifit.com.vn)', url: 'https://omifit.com.vn/' },
      { label: 'App Store', url: 'https://apps.apple.com/vn/app/omifit/id6757610000?l=vi' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.omifit.client' },
    ],
    badges: [
      'Unikorn.vn Product Of The Day 1st',
      'I-StartUp 2026 TOP 15 — NEU',
    ],
  },
  {
    id: 'cmc-construction',
    role: 'Back End Developer',
    company: 'CMC Global (Construction Management Platform)',
    period: 'Sep 2025 — Present',
    category: 'enterprise',
    summary:
      'Core backend development in C# for an enterprise-scale construction management platform, focusing on robust data synchronization and high-load database performance.',
    keyPoints: [
      'Engineered resilient APIs for high-volume data synchronization across disparate enterprise systems.',
      'Implemented comprehensive business validation pipelines, advanced index tuning, and database query optimization.',
      'Refactored mission-critical legacy modules and created shared utility libraries to ensure platform stability and maintainability.',
      'Mentored junior engineers through rigorous code reviews and established technical documentation standards.',
    ],
    skills: ['C#', '.NET', 'Data Sync APIs', 'Query Optimization', 'Legacy Refactoring', 'Code Reviews'],
    accentColor: '#10b981',
  },
  {
    id: 'cmc-japan-tax',
    role: 'Back End Developer',
    company: 'CMC Global (Japanese Accounting & Tax Platform)',
    period: 'Jun 2025 — Sep 2025',
    category: 'enterprise',
    summary:
      'Backend engineering on an accounting, tax processing, and automated financial report generation platform for an enterprise Japanese client.',
    keyPoints: [
      'Analyzed complex functional specifications and technical architecture documents provided by Bridge Software Engineers (BRSE).',
      'Developed high-accuracy tax calculation and reporting APIs with robust error handling and frontend contract integration.',
      'Authored automated unit test suites ensuring comprehensive code coverage and financial calculation stability.',
      'Optimized Microsoft SQL Server database schemas, stored procedures, and enforced quality control via peer code reviews.',
    ],
    skills: ['Microsoft SQL Server', '.NET Core', 'C#', 'Unit Testing', 'BRSE Collaboration', 'Tax & Accounting Systems'],
    accentColor: '#818cf8',
  },
  {
    id: 'fpt-support',
    role: 'Production Support C# Developer',
    company: 'FPT Software (HIS GHC Healthcare)',
    period: 'Feb 2024 — Jun 2025',
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
    accentColor: '#0ea5e9',
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
    accentColor: '#14b8a6',
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
    accentColor: '#6366f1',
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
            Professional journey across enterprise engineering, healthcare systems, full-stack platforms, and cloud architecture.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {[
              { key: 'all', label: 'All Roles' },
              { key: 'enterprise', label: '.NET & Full Stack' },
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
          {/* Vertical Timeline Axis */}
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
                {/* Node Dot */}
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

                    {/* External Project Links (if available) */}
                    {exp.links && exp.links.length > 0 && (
                      <div className="pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Live &amp; Stores:</span>
                        {exp.links.map((link, lIdx) => (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-400/30 text-[11px] font-mono transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Recognition / Badges (if available) */}
                    {exp.badges && exp.badges.length > 0 && (
                      <div className="pt-1 flex flex-wrap items-center gap-1.5">
                        {exp.badges.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-400/30 text-[10px] font-mono font-medium"
                          >
                            <Award className="w-3 h-3" />
                            <span>{badge}</span>
                          </span>
                        ))}
                      </div>
                    )}

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
