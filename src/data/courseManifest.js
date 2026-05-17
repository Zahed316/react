export const supportedLocales = ['fa', 'en'];
export const defaultLocale = 'fa';

export const moduleManifest = [
  { id: 'setup', path: '/setup', accent: '#0f766e', xpReward: 60, nextId: 'tooling' },
  { id: 'tooling', path: '/tooling', accent: '#7c3aed', xpReward: 70, nextId: 'js' },
  { id: 'js', path: '/js', accent: '#d97706', xpReward: 80, nextId: 'react' },
  { id: 'react', path: '/react', accent: '#2563eb', xpReward: 90, nextId: 'events-forms' },
  {
    id: 'events-forms',
    path: '/events-forms',
    accent: '#0ea5e9',
    xpReward: 90,
    nextId: 'effects',
  },
  { id: 'effects', path: '/effects', accent: '#7c3aed', xpReward: 90, nextId: 'routing' },
  {
    id: 'routing',
    path: '/routing',
    accent: '#db2777',
    xpReward: 100,
    nextId: 'context-state',
  },
  {
    id: 'context-state',
    path: '/context-state',
    accent: '#0891b2',
    xpReward: 100,
    nextId: 'project',
  },
  { id: 'project', path: '/project', accent: '#059669', xpReward: 130, nextId: null },
];

export const navigationItems = [
  { id: 'home', path: '/' },
  ...moduleManifest.map(({ id, path }) => ({ id, path })),
];

export const badgeDefinitions = [
  {
    id: 'first-step',
    icon: '🌱',
    test: ({ completedCount }) => completedCount >= 1,
  },
  {
    id: 'prepared',
    icon: '🧰',
    test: ({ completedSet }) => completedSet.has('setup') && completedSet.has('tooling'),
  },
  {
    id: 'quiz-solver',
    icon: '🧠',
    test: ({ solvedQuizCount }) => solvedQuizCount >= 3,
  },
  {
    id: 'builder',
    icon: '🏗️',
    test: ({ completedCount }) => completedCount >= 3,
  },
  {
    id: 'streak-3',
    icon: '🔥',
    test: ({ streakDays }) => streakDays >= 3,
  },
  {
    id: 'ship-it',
    icon: '🚀',
    test: ({ completedCount, totalCount }) => totalCount > 0 && completedCount === totalCount,
  },
];

export const homeQuestManifest = [
  { id: 'setup', moduleId: 'setup', reward: 60 },
  { id: 'tooling', moduleId: 'tooling', reward: 70 },
  { id: 'quiz', moduleId: 'js', reward: 35, requirement: { solvedQuizCount: 2 } },
  { id: 'project', moduleId: 'project', reward: 130 },
];

export const setupChecklistOrder = ['browser', 'editor', 'git', 'node', 'npm', 'devtools'];

export const toolingDeckOrder = ['npm', 'pnpm', 'vite', 'eslint', 'prettier'];
export const reactTopicDeckOrder = [
  'htmlDom',
  'domTree',
  'browserRendering',
  'jsx',
  'reactRendering',
];
export const effectsTopicDeckOrder = [
  'sideEffects',
  'lifecycleCleanup',
  'dependencies',
  'browserSync',
  'avoidEffects',
];

export const taskCategoryIds = ['js', 'react', 'effects', 'routing'];
