import React from 'react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '../magicui/TiltCard';
import { triggerConfetti } from '../magicui/Confetti';

interface Certificate {
  id: string;
  title: string;
  shortCode: string;
  provider: string;
  issuerLogo: string;
  image: string;
  url: string;
  color: string;
  description: string;
  level: string;
}

const certificates: Certificate[] = [
  {
    id: 'psm-2',
    title: 'Professional Scrum Master™ II',
    shortCode: 'PSM II',
    provider: 'Scrum.org',
    issuerLogo: 'Scrum.org',
    image: 'https://images.credly.com/images/d90cc9bc-3e9a-49b2-ac09-7930db400e32/image.png',
    url: 'https://www.credly.com/badges/dc9a9361-f343-4f6a-9869-3435c1b333f0/public_url',
    color: '#38bdf8',
    level: 'Advanced Master',
    description:
      'Advanced mastery of the Scrum framework, focusing on servant leadership, complex product delivery, coaching squads, and removing organizational impediments.',
  },
  {
    id: 'psm-1',
    title: 'Professional Scrum Master™ I',
    shortCode: 'PSM I',
    provider: 'Scrum.org',
    issuerLogo: 'Scrum.org',
    image: 'https://images.credly.com/size/340x340/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png',
    url: 'https://www.credly.com/badges/64f01050-58a9-4044-b334-be330924fdb7/public_url',
    color: '#818cf8',
    level: 'Professional',
    description:
      'Validates fundamental Scrum principles, roles, artifacts, and practical execution within cross-functional agile teams.',
  },
  {
    id: 'psd-1',
    title: 'Professional Scrum Developer™ I',
    shortCode: 'PSD I',
    provider: 'Scrum.org',
    issuerLogo: 'Scrum.org',
    image: 'https://images.credly.com/size/340x340/images/d2298e82-b671-434a-876b-21a0ebc3af0e/image.png',
    url: 'https://www.credly.com/badges/96f72033-7026-4d11-87f6-fc78f1b38402/public_url',
    color: '#a855f7',
    level: 'Specialist',
    description:
      'Demonstrates real-world competence in building software iteratively, test-driven development, continuous integration, and modern agile engineering practices.',
  },
  {
    id: 'google-pm',
    title: 'Google Project Management Certificate',
    shortCode: 'Google PM',
    provider: 'Google',
    issuerLogo: 'Google Career Certificates',
    image: 'https://images.credly.com/size/340x340/images/771cff46-3573-4d12-bfd8-528745f00957/GCC_badge_PGM_1000x1000.png',
    url: 'https://www.credly.com/badges/fd8b00a1-3047-461f-9a85-d7a5e66dc1e9/public_url',
    color: '#10b981',
    level: 'Professional',
    description:
      'Covers end-to-end project execution, stakeholder mapping, risk mitigation, Agile & Traditional hybrid frameworks, and strategic roadmap alignment.',
  },
  {
    id: 'google-ux',
    title: 'Google UX Design Professional',
    shortCode: 'Google UX',
    provider: 'Google',
    issuerLogo: 'Google Career Certificates',
    image: 'https://images.credly.com/size/340x340/images/f4b9febb-69f6-46d8-8797-1e504ebfe0f8/GCC_badge_UX_1000x1000.png',
    url: 'https://www.credly.com/badges/64f01050-58a9-4044-b334-be330924fdb7/public_url',
    color: '#f59e0b',
    level: 'Specialist',
    description:
      'Design thinking, user research, wireframing, high-fidelity interactive prototyping, usability metrics, and empathetic product design.',
  },
  {
    id: 'datacamp-sql',
    title: 'SQL Associate Certificate',
    shortCode: 'SQL Assoc',
    provider: 'DataCamp',
    issuerLogo: 'DataCamp Certified',
    image: 'https://media.datacamp.com/legacy/Certification/Badges%202024/outline/SQL_Associate_-_badge_with_outline.png',
    url: 'https://www.datacamp.com/certificate/SQA0010455222217',
    color: '#06b6d4',
    level: 'Associate',
    description:
      'Validates advanced querying, relational joins, complex aggregations, window functions, and data manipulation in production database environments.',
  },
];

export const CertificatesSection: React.FC = () => {
  const handleCardClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    triggerConfetti(x, y);
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-sky-500/20 bg-sky-500/5 text-sky-400 font-mono text-xs font-medium">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>03 // VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Professional badges verified via Credly & DataCamp. Click any card to inspect credentials!
          </p>
        </div>

        {/* 3D Holographic Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <TiltCard
              key={cert.id}
              onClick={() => {}}
              className="bg-white/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-lg hover:border-slate-300 dark:hover:border-slate-700"
            >
              <div
                onClick={handleCardClick}
                className="p-6 h-full flex flex-col justify-between relative group cursor-pointer"
              >
                <div>
                  {/* Top Bar with Badge level & Provider */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sky-500 dark:text-sky-400 font-semibold">
                      {cert.provider}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>

                  {/* Badge Image with glowing aura */}
                  <div className="relative mb-5 flex justify-center">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                      style={{ background: cert.color }}
                    />
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="relative z-10 h-24 w-24 object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 text-center">
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Verification Link */}
                <div className="pt-5 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">{cert.shortCode}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
