import {
  badgeDefinitions as badgeManifest,
  defaultLocale,
  homeQuestManifest,
  moduleManifest,
  navigationItems as navigationManifest,
  reactTopicDeckOrder,
  setupChecklistOrder,
  supportedLocales,
  taskCategoryIds,
  toolingDeckOrder,
} from './courseManifest';
import { commonResources, courseResources } from '../i18n/resources';

export const learningModules = moduleManifest;
export const navigationItems = navigationManifest;
export const badgeDefinitions = badgeManifest;
export { defaultLocale, supportedLocales, taskCategoryIds };

export function getLocalizedCourseContent(locale = defaultLocale) {
  const normalizedLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
  const pack = courseResources[normalizedLocale] ?? courseResources[defaultLocale];
  const common = commonResources[normalizedLocale] ?? commonResources[defaultLocale];

  const modulesById = Object.fromEntries(
    moduleManifest.map((module) => {
      const localizedModule = pack.modules[module.id];

      return [
        module.id,
        {
          ...module,
          ...localizedModule,
          navLabel: pack.navigation[module.id],
        },
      ];
    }),
  );

  const homeQuests = homeQuestManifest.map((quest) => ({
    ...quest,
    ...pack.home.quests[quest.id],
  }));

  const badgeCopy = Object.fromEntries(
    badgeManifest.map((badge) => [badge.id, { ...badge, ...pack.badges[badge.id] }]),
  );

  const setupChecklist = setupChecklistOrder.map((id) => ({
    id,
    ...pack.modules.setup.checklist[id],
  }));

  const toolingDeck = toolingDeckOrder.map((id) => ({
    id,
    ...pack.modules.tooling.tools[id],
  }));

  const reactTopicDeck = reactTopicDeckOrder.map((id) => ({
    id,
    ...pack.modules.react.topics[id],
  }));

  return {
    common,
    home: pack.home,
    homeQuests,
    learningModules: Object.values(modulesById),
    modules: modulesById,
    navigationItems: [
      { id: 'home', path: '/', navLabel: pack.navigation.home },
      ...moduleManifest.map((module) => ({
        id: module.id,
        path: module.path,
        navLabel: pack.navigation[module.id],
      })),
    ],
    badges: badgeCopy,
    badgeList: Object.values(badgeCopy),
    setupChecklist,
    toolingDeck,
    reactTopicDeck,
    packageManagerComparison: pack.modules.tooling.packageManagerComparison,
    commandCards: pack.modules.tooling.commandCards,
    jsCheatSheet: pack.modules.js.cheatSheet,
    routingNotes: pack.modules.effects.routingNotes,
    quizzes: pack.quizzes,
    taskManager: pack.taskManager,
    coach: pack.coach,
  };
}
