export const en = {
  // Navigation
  'nav.projects': 'PROJECTS',
  'nav.about': 'ABOUT',
  'nav.experience': 'EXPERIENCE',
  'nav.skills': 'SKILLS',
  'nav.contact': 'CONTACT',

  // Hero
  'hero.name': 'ALBERTO ROMERO',
  'hero.role': 'FRONTEND DEVELOPER // WEB ARCHITECT',
  'hero.welcome': '// WELCOME TO MY PORTFOLIO',
  'hero.cta': '>> GET IN TOUCH',

  // Status panel (top-left HUD)
  'status.visual': 'VISUAL: ONLINE',
  'status.active': 'STATUS: ACTIVE',

  // Panels
  'panels.projects.title': 'PROJECTS',
  'panels.projects.lastDeploy': 'LAST DEPLOY',
  'panels.projects.stack': 'ASTRO / REACT / TAILWIND',
  'panels.projects.cta': 'VIEW CASE STUDIES >>',

  'panels.about.title': 'ABOUT ME',
  'panels.about.skills': 'SKILLS',
  'panels.about.experience': 'EXPERIENCE',

  'panels.contact.title': 'CONTACT',
  'panels.contact.links': 'LINKS',
  'panels.contact.status': 'STATUS: AVAILABLE',
  'panels.contact.connect': 'CONNECT',
  'panels.contact.message': 'SEND',

  // Footer
  'footer.ready': '// 1337-READY',
  'footer.protocol': 'PROTOCOL 47.3',
  'footer.security': 'SECURITY: STABLE',
  'footer.comp': 'COMP: 100%',
  'footer.copyright': '© 2026 — ALL RIGHTS RESERVED',

  // Section headings (single-page scroll sections)
  'sections.about': '// ABOUT ME',
  'sections.experience': '// EXPERIENCE',
  'sections.projects': '// PROJECTS',
  'sections.skills': '// SKILLS',
  'skills.frontend': 'FRONTEND',
  'skills.backend': 'BACKEND',
  'skills.databases': 'DATABASES',
  'skills.ai': 'AI TOOLS',
  'skills.other': 'OTHER TOOLS',
  'sections.contact': '// CONTACT',
  'sections.underConstruction': '// UNDER CONSTRUCTION',
  'sections.wipText': 'THIS SECTION IS UNDER ACTIVE DEVELOPMENT',

  // About section
  'about.bio1': "I've been building web applications for over 15 years, from interfaces to full systems that work and scale.",
  'about.bio2': 'Although my specialty is frontend with React, I have always worked on the backend too — giving me a holistic view of development and the ability to understand the product beyond the code. I like building clean, accessible, well-crafted interfaces, while also making the technical decisions that make everything fit together.',
  'about.bio3': 'I enjoy tackling complex problems, working on products that evolve and improve over time, and constantly learning along the way.',
  'about.subject': 'SUBJECT',
  'about.status': 'STATUS: ACTIVE',

  // Hero scroll CTA
  'hero.scrollCta': 'SCROLL',

  // Lang toggle
  'lang.toggle.en': 'EN',
  'lang.toggle.es': 'ES',
} as const;

export type TranslationKey = keyof typeof en;
