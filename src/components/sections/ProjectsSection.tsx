import React from 'react';
import { Layers, ShieldCheck, Activity, ArrowUpRight } from 'lucide-react';
import { MagicCard } from '../magicui/MagicCard';
import { YoutubeIcon } from '../icons/BrandIcons';

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  icon: any;
  accent: string;
  highlights: string[];
  stack: string[];
  link?: string;
  linkText?: string;
}

const projects: Project[] = [
  {
    id: 'hospital-sso',
    title: 'Hospital Single Sign-On (SSO) Enterprise System',
    tagline: 'Federated identity orchestration for healthcare networks & medical portals.',
    category: 'Security & Enterprise Architecture',
    icon: ShieldCheck,
    accent: '#38bdf8',
    highlights: [
      'Implemented OpenID Connect & OAuth2 protocols integrating Auth0 with enterprise Azure AD.',
      'Protected sensitive patient and hospital staff records with role-based access control (RBAC).',
      'Designed PostgreSQL schema and asynchronous token synchronization with ASP.NET Core.',
      'Reduced login friction across 5+ clinical sub-portals down to a single secure credential.',
    ],
    stack: ['C#', '.NET Core', 'Auth0', 'Azure AD', 'PostgreSQL', 'Entity Framework', 'AWS S3'],
  },
  {
    id: 'his-healthcare',
    title: 'HIS GHC Healthcare Core Engine',
    tagline: 'Production backend serving clinical workflows and patient care pipelines.',
    category: 'Healthcare Backend & Operations',
    icon: Activity,
    accent: '#10b981',
    highlights: [
      'L2/L3 production engineering maintaining strict system availability standards.',
      'Automated batch job pipelines for nocturnal data patching, invoice reconciliation, and database defragmentation.',
      'Optimized heavy T-SQL stored procedures reducing query latency significantly.',
      'Coordinated rapid bug fixes and emergency hotfix deployments for hospital operations.',
    ],
    stack: ['.NET Core', 'C#', 'Microsoft SQL Server', 'Production Support', 'Incident Response'],
  },
  {
    id: 'battle-cats',
    title: 'The Battle Cats Gaming Channel',
    tagline: 'Personal hobby gaming channel sharing walkthrough guides and video editing.',
    category: 'Personal Gaming Channel',
    icon: YoutubeIcon,
    accent: '#f43f5e',
    highlights: [
      'Created strategic guides and game walkthroughs for the player community.',
      'Hosted livestreams and shared gameplay experiences.',
      'Video production and creative editing with Adobe Premiere Pro.',
    ],
    stack: ['YouTube', 'Adobe Premiere Pro', 'Video Production', 'Livestreaming'],
    link: 'https://youtube.com/c/@TheBattleCatsVietNam',
    linkText: 'Visit Channel',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>05 // FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Key Systems & Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Enterprise backend initiatives demonstrating distributed systems, identity security, and production support.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <MagicCard
                key={project.id}
                className="p-6 sm:p-7 flex flex-col justify-between"
                gradientColor={project.accent}
                gradientOpacity={0.14}
              >
                <div className="space-y-5">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                      {project.category}
                    </span>
                    <div
                      className="size-9 rounded-xl flex items-center justify-center border shadow-sm"
                      style={{
                        backgroundColor: `${project.accent}15`,
                        borderColor: `${project.accent}40`,
                        color: project.accent,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                      Technical Scope:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                        >
                          <span
                            className="size-1.5 rounded-full shrink-0 mt-1.5"
                            style={{ backgroundColor: project.accent }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack & Link */}
                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 dark:text-rose-400 hover:text-rose-600 dark:hover:text-rose-300 transition-colors pt-1"
                    >
                      <span>{project.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </MagicCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
