export interface SkillCategory {
  key: string;
  skills: string[];
  fullWidth?: boolean;
}

export const skillCategories: SkillCategory[] = [
  { key: 'frontend', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Astro', 'Redux', 'Storybook', 'W3C'] },
  { key: 'backend',  skills: ['PHP', 'Laravel', 'Python', 'FastAPI', 'Django'] },
  { key: 'databases', skills: ['MySQL', 'SQL', 'PostgreSQL', 'MongoDB'] },
  { key: 'ai',       skills: ['Claude Code', 'Codex'] },
  { key: 'other',    skills: ['Git', 'Jira', 'SOLID', 'Ports & Adapters', 'Agile methodologies'], fullWidth: true },
];
