import { useState } from 'react';

interface Project {
  name: string;
  skills: string[];
}

interface Job {
  name: string;
  icon: string;
  position: string;
  date: string;
  location: string;
  description: string;
  skills?: string[];
  projects?: Project[];
}

interface Props {
  jobs: Job[];
  skillIcons: Record<string, string>;
}

export default function ExperienceAccordion({ jobs, skillIcons }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  function SkillTag({ skill }: { skill: string }) {
    const slug = skillIcons[skill];
    return (
      <span className="skill-tag">
        {slug && (
          <img
            src={`https://cdn.simpleicons.org/${slug}`}
            alt=""
            className="skill-icon"
            width="16"
            height="16"
            loading="lazy"
          />
        )}
        {skill}
      </span>
    );
  }

  return (
    <div className="flex flex-col divide-y divide-accent/20 border border-accent/30 bg-[rgba(18,0,4,0.85)] shadow-[0_0_18px_rgba(255,0,60,0.12)]">
      {jobs.map((job, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            {/* Header */}
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-3 px-5 py-4 hover:bg-accent/5 transition-colors text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded bg-white/50 border border-white/20 p-1">
                <img
                  src={job.icon}
                  alt={job.name}
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-display text-accent text-sm tracking-widest flex-1">
                {job.name}
              </span>
              <span className="text-muted/60 text-xs tracking-widest hidden sm:block">
                {job.date}
              </span>
              <svg
                className={`w-4 h-4 text-accent/60 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Body */}
            <div
              className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
            >
              <div className="px-5 pb-6 pt-1 border-t border-accent/10">
                {/* Position + location row */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 gap-y-1 mb-3">
                  <span className="font-display text-accent/80 text-xs tracking-widest">
                    {job.position}
                  </span>
                  <span className="text-muted/60 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </span>
                  <span className="text-muted/60 text-xs sm:hidden">{job.date}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted/80 leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Skills */}
                {job.skills && job.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {job.skills.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                )}

                {/* Projects sub-table */}
                {job.projects && job.projects.length > 0 && (
                  <div className="mt-4">
                    <p className="font-display text-accent/70 text-xs tracking-widest mb-2">
                      PROJECTS
                    </p>
                    <div className="border border-accent/20 flex flex-col divide-y divide-accent/20">
                      {job.projects.map((project, pi) => (
                        <div key={pi} className="px-3 py-3">
                          <span className="text-muted/80 font-display tracking-wide text-xs block mb-2">
                            {project.name}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.skills.map((skill) => (
                              <SkillTag key={skill} skill={skill} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
