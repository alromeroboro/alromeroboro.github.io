export const en = {
  // Navigation
  'nav.projects': 'PROJECTS',
  'nav.about': 'ABOUT',
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
  'sections.projects': '// PROJECTS',
  'sections.contact': '// CONTACT',
  'sections.underConstruction': '// UNDER CONSTRUCTION',
  'sections.wipText': 'THIS SECTION IS UNDER ACTIVE DEVELOPMENT',

  // Hero scroll CTA
  'hero.scrollCta': 'SCROLL',

  // Lang toggle
  'lang.toggle.en': 'EN',
  'lang.toggle.es': 'ES',
} as const;

export type TranslationKey = keyof typeof en;
