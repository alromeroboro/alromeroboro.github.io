export interface Project {
  name: string;
  skills: string[];
}

export interface Job {
  name: string;
  icon: string;
  position: string;
  date: string;
  location: string;
  description: string;
  skills?: string[];
  projects?: Project[];
}

export const jobs: Record<string, Job[]> = {
  en: [
    {
      name: 'Blinklearning',
      icon: '/images/bl.png',
      position: 'Senior Frontend Developer',
      date: '2022 – 2026',
      location: 'Madrid, Spain',
      description: 'As a Senior Frontend Developer at BlinkLearning, I built modern applications using React and TypeScript in agile environments. I designed and implemented scalable, maintainable interfaces, managing application state with Redux. I contributed to the creation and evolution of design systems through Storybook, developing reusable components. I was also responsible for ensuring compliance with accessibility standards to deliver inclusive products. I applied key technologies such as HTML, CSS, and JavaScript on demanding projects since 2022.',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Storybook', 'W3C', 'Agile methodologies'],
    },
    {
      name: 'Vocces',
      icon: '/images/vo.png',
      position: 'Backend Developer',
      date: '2021 – 2022',
      location: 'Granada, Spain',
      description: 'As a Senior Backend Developer at Vocces, I developed solutions using Laravel and PHP, applying hexagonal architecture and SOLID principles to ensure clean, maintainable code. I designed and implemented robust, scalable REST APIs, as well as managing MySQL databases. I worked in development environments with tools like Laragon, optimizing application performance and structure. My focus was on software quality, scalability, and backend development best practices.',
      skills: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Ports & Adapters', 'SOLID principles'],
    },
    {
      name: 'Local Concept',
      icon: '/images/lc.svg',
      position: 'Fullstack Developer',
      date: '2007 – 2021',
      location: 'Madrid, Spain',
      description: 'As a Fullstack Developer at Local Concept Inc in Madrid, I developed web interfaces using HTML, CSS, and JavaScript, integrating them with backend systems. I was involved in translation management using technologies such as PHP and MySQL, ensuring correct data structuring and persistence. I also worked on glossary management tools using Vue.js and MySQL databases. Additionally, I implemented solutions for Machine Translation queries using Python and Google Cloud services such as AutoML and Storage. My work combined frontend and backend development, focusing on functional and efficient solutions.',
      projects: [
        { name: 'Translation Management System', skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'] },
        { name: 'Glossary Management System', skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'MySQL'] },
        { name: 'ML Query System', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'MySQL', 'Google Cloud AutoML', 'Google Cloud Storage'] },
      ],
    },
  ],
  es: [
    {
      name: 'Blinklearning',
      icon: '/images/bl.png',
      position: 'Desarrollador Frontend Senior',
      date: '2022 – 2026',
      location: 'Madrid, España',
      description: 'Como Senior Frontend Developer en BlinkLearning, desarrollé aplicaciones modernas utilizando React y TypeScript dentro de entornos ágiles. Me encargué de diseñar e implementar interfaces escalables y mantenibles, gestionando el estado de la aplicación con Redux. Participé en la creación y evolución de sistemas de diseño mediante Storybook, desarrollando componentes reutilizables. También fui responsable de asegurar el cumplimiento de estándares de accesibilidad para garantizar productos inclusivos. Utilicé tecnologías clave como HTML, CSS y JavaScript en proyectos exigentes desde 2022.',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Storybook', 'W3C', 'Agile methodologies'],
    },
    {
      name: 'Vocces',
      icon: '/images/vo.png',
      position: 'Desarrollador Backend',
      date: '2021 – 2022',
      location: 'Granada, España',
      description: 'Como Senior Backend Developer en Vocces, desarrollé soluciones utilizando Laravel y PHP, aplicando arquitectura hexagonal y principios SOLID para garantizar un código limpio y mantenible. Me encargué del diseño e implementación de APIs REST robustas y escalables, así como de la gestión de bases de datos MySQL. Trabajé en entornos de desarrollo con herramientas como Laragon, optimizando el rendimiento y la estructura de las aplicaciones. Mi enfoque estuvo orientado a la calidad del software, la escalabilidad y las buenas prácticas de desarrollo backend.',
      skills: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Ports & Adapters', 'SOLID principles'],
    },
    {
      name: 'Local Concept',
      icon: '/images/lc.svg',
      position: 'Desarrollador Fullstack',
      date: '2007 – 2021',
      location: 'Madrid, España',
      description: 'Como Fullstack Developer en Local Concept Inc en Madrid, desarrollé interfaces web utilizando HTML, CSS y JavaScript, integrándolas con sistemas backend. Participé en la gestión de traducciones mediante tecnologías como PHP y MySQL, asegurando la correcta estructuración y persistencia de los datos. También trabajé en el desarrollo de herramientas de gestión de glosarios utilizando Vue.js y bases de datos MySQL. Además, implementé soluciones para consultas de Machine Translation utilizando Python y servicios de Google Cloud como AutoML y Storage. Mi trabajo combinó desarrollo frontend y backend, enfocándome en soluciones funcionales y eficientes.',
      projects: [
        { name: 'Translation Management System', skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'] },
        { name: 'Glossary Management System', skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'MySQL'] },
        { name: 'ML Query System', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'MySQL', 'Google Cloud AutoML', 'Google Cloud Storage'] },
      ],
    },
  ],
};

export const skillIcons: Record<string, string> = {
  'HTML':         'html5',
  'CSS':          'css',
  'JavaScript':   'javascript',
  'TypeScript':   'typescript',
  'React':        'react',
  'Vue':          'vuedotjs',
  'Vue.js':       'vuedotjs',
  'Astro':        'astro',
  'Redux':        'redux',
  'Storybook':    'storybook',
  'PHP':          'php',
  'Laravel':      'laravel',
  'Python':       'python',
  'FastAPI':      'fastapi',
  'Django':       'django',
  'MySQL':        'mysql',
  'PostgreSQL':   'postgresql',
  'MongoDB':      'mongodb',
  'Claude Code':  'anthropic',
  'Codex':        'openaigym',
  'Git':          'git',
  'Jira':         'jira',
  'Tailwind CSS': 'tailwindcss',
};
