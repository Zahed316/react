import {
  effectsTopicDeckOrder,
  moduleManifest,
  reactTopicDeckOrder,
  toolingDeckOrder,
} from '../src/data/courseManifest.js';
import { commonEn } from '../src/i18n/common/en.js';
import { commonFa } from '../src/i18n/common/fa.js';
import { courseEn } from '../src/i18n/course/en.js';
import { courseFa } from '../src/i18n/course/fa.js';

const errors = [];
const notes = [];

function fail(message) {
  errors.push(message);
}

function note(message) {
  notes.push(message);
}

function ensure(condition, message) {
  if (!condition) {
    fail(message);
  }
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function compareKeySets(label, left, right) {
  const leftKeys = Object.keys(left).sort();
  const rightKeys = Object.keys(right).sort();

  for (const key of leftKeys) {
    ensure(key in right, `${label}: missing key in FA: "${key}"`);
  }

  for (const key of rightKeys) {
    ensure(key in left, `${label}: missing key in EN: "${key}"`);
  }
}

function ensureString(value, label) {
  ensure(typeof value === 'string', `${label} must be a string.`);
  ensure(value.trim().length > 0, `${label} must not be empty.`);
}

function ensureArray(value, label) {
  ensure(Array.isArray(value), `${label} must be an array.`);
}

function ensureObject(value, label) {
  ensure(isPlainObject(value), `${label} must be an object.`);
}

function ensureDeepLessonTopic(topic, label, options = {}) {
  const requiredKeys = [
    'title',
    'badge',
    'accent',
    'summary',
    'whyExists',
    'problem',
    'howItWorks',
    'simulation',
    'example',
    'comparison',
    'mistakes',
    'realUsage',
    'practice',
    'summaryPoints',
  ];

  if (!topic) {
    fail(`${label} is missing.`);
    return;
  }

  ensureObject(topic, label);

  for (const key of requiredKeys) {
    ensure(key in topic, `${label} is missing required key "${key}".`);
  }

  if (options.includeToolingExtras) {
    for (const key of ['why', 'command', 'note']) {
      ensure(key in topic, `${label} is missing tooling key "${key}".`);
    }
  }

  ensureString(topic.title, `${label}.title`);
  ensureString(topic.badge, `${label}.badge`);
  ensureString(topic.accent, `${label}.accent`);
  ensureString(topic.summary, `${label}.summary`);
  ensureString(topic.whyExists, `${label}.whyExists`);
  ensureString(topic.problem, `${label}.problem`);
  ensureArray(topic.howItWorks, `${label}.howItWorks`);
  ensureArray(topic.simulation, `${label}.simulation`);
  ensureObject(topic.example, `${label}.example`);
  ensureObject(topic.comparison, `${label}.comparison`);
  ensureArray(topic.mistakes, `${label}.mistakes`);
  ensureArray(topic.realUsage, `${label}.realUsage`);
  ensureObject(topic.practice, `${label}.practice`);
  ensureArray(topic.summaryPoints, `${label}.summaryPoints`);

  if (options.includeToolingExtras) {
    ensureString(topic.why, `${label}.why`);
    ensureString(topic.command, `${label}.command`);
    ensureString(topic.note, `${label}.note`);
  }

  ensureString(topic.example.title, `${label}.example.title`);
  ensureString(topic.example.code, `${label}.example.code`);
  ensureString(topic.example.explanation, `${label}.example.explanation`);
  ensureString(topic.comparison.before, `${label}.comparison.before`);
  ensureString(topic.comparison.after, `${label}.comparison.after`);
  ensureString(topic.practice.question, `${label}.practice.question`);
}

function ensureQuizGroup(localeLabel, quizzes) {
  ensureObject(quizzes, `${localeLabel}.quizzes`);

  for (const [groupKey, questions] of Object.entries(quizzes)) {
    ensureArray(questions, `${localeLabel}.quizzes.${groupKey}`);

    const ids = new Set();
    for (const question of questions) {
      const base = `${localeLabel}.quizzes.${groupKey}`;
      ensureObject(question, `${base}[]`);
      ensureString(question.id, `${base}[].id`);
      ensureString(question.title, `${base}[${question.id}].title`);
      ensureString(question.prompt, `${base}[${question.id}].prompt`);
      ensureArray(question.options, `${base}[${question.id}].options`);
      ensure(
        Number.isInteger(question.answerIndex),
        `${base}[${question.id}].answerIndex must be an integer.`,
      );
      ensureString(question.explanation, `${base}[${question.id}].explanation`);
      ensure(!ids.has(question.id), `${base} contains duplicate quiz id "${question.id}".`);
      ids.add(question.id);
    }
  }
}

function compareQuizGroups() {
  compareKeySets('quizzes', courseEn.quizzes, courseFa.quizzes);

  for (const groupKey of Object.keys(courseEn.quizzes)) {
    const enQuestions = courseEn.quizzes[groupKey] ?? [];
    const faQuestions = courseFa.quizzes[groupKey] ?? [];

    ensure(
      enQuestions.length === faQuestions.length,
      `quizzes.${groupKey}: EN/FA count mismatch (${enQuestions.length} vs ${faQuestions.length}).`,
    );

    const enIds = enQuestions.map((question) => question.id);
    const faIds = faQuestions.map((question) => question.id);

    ensure(
      JSON.stringify(enIds) === JSON.stringify(faIds),
      `quizzes.${groupKey}: EN/FA quiz ID mismatch.\nEN: ${enIds.join(', ')}\nFA: ${faIds.join(', ')}`,
    );
  }
}

function ensureNavigationAndLabels() {
  const requiredNavigationKeys = ['home', ...moduleManifest.map((module) => module.id)];

  for (const key of requiredNavigationKeys) {
    ensureString(courseEn.navigation[key], `courseEn.navigation.${key}`);
    ensureString(courseFa.navigation[key], `courseFa.navigation.${key}`);
  }

  const requiredCommonKeys = [
    'summaryTab',
    'liveTab',
    'quizTab',
    'tipsTab',
    'navigationAria',
    'openModule',
    'continueLesson',
    'backHome',
  ];

  for (const key of requiredCommonKeys) {
    ensureString(commonEn[key], `commonEn.${key}`);
    ensureString(commonFa[key], `commonFa.${key}`);
  }
}

function compareModulesAndTopics() {
  compareKeySets('modules', courseEn.modules, courseFa.modules);

  for (const moduleId of Object.keys(courseEn.modules)) {
    ensureObject(courseEn.modules[moduleId], `courseEn.modules.${moduleId}`);
    ensureObject(courseFa.modules[moduleId], `courseFa.modules.${moduleId}`);
  }

  for (const topicId of toolingDeckOrder) {
    const enTopic = courseEn.modules.tooling.tools?.[topicId];
    const faTopic = courseFa.modules.tooling.tools?.[topicId];
    ensureDeepLessonTopic(enTopic, `courseEn.modules.tooling.tools.${topicId}`, {
      includeToolingExtras: true,
    });
    ensureDeepLessonTopic(faTopic, `courseFa.modules.tooling.tools.${topicId}`, {
      includeToolingExtras: true,
    });
  }

  for (const topicId of reactTopicDeckOrder) {
    const enTopic = courseEn.modules.react.topics?.[topicId];
    const faTopic = courseFa.modules.react.topics?.[topicId];
    ensureDeepLessonTopic(enTopic, `courseEn.modules.react.topics.${topicId}`);
    ensureDeepLessonTopic(faTopic, `courseFa.modules.react.topics.${topicId}`);
  }

  for (const topicId of effectsTopicDeckOrder) {
    const enTopic = courseEn.modules.effects.topics?.[topicId];
    const faTopic = courseFa.modules.effects.topics?.[topicId];
    ensureDeepLessonTopic(enTopic, `courseEn.modules.effects.topics.${topicId}`);
    ensureDeepLessonTopic(faTopic, `courseFa.modules.effects.topics.${topicId}`);
  }

  compareKeySets(
    'tooling topic keys',
    courseEn.modules.tooling.tools,
    courseFa.modules.tooling.tools,
  );
  compareKeySets('react topic keys', courseEn.modules.react.topics, courseFa.modules.react.topics);
  compareKeySets(
    'effects topic keys',
    courseEn.modules.effects.topics,
    courseFa.modules.effects.topics,
  );

  ensureArray(
    courseEn.modules.tooling.packageManagerComparison,
    'courseEn.modules.tooling.packageManagerComparison',
  );
  ensureArray(
    courseFa.modules.tooling.packageManagerComparison,
    'courseFa.modules.tooling.packageManagerComparison',
  );
  ensureArray(courseEn.modules.tooling.commandCards, 'courseEn.modules.tooling.commandCards');
  ensureArray(courseFa.modules.tooling.commandCards, 'courseFa.modules.tooling.commandCards');
  ensureArray(courseEn.modules.effects.routingNotes, 'courseEn.modules.effects.routingNotes');
  ensureArray(courseFa.modules.effects.routingNotes, 'courseFa.modules.effects.routingNotes');
}

function main() {
  ensureObject(courseEn, 'courseEn');
  ensureObject(courseFa, 'courseFa');
  ensureObject(commonEn, 'commonEn');
  ensureObject(commonFa, 'commonFa');

  compareKeySets('top-level course keys', courseEn, courseFa);
  ensureNavigationAndLabels();
  compareModulesAndTopics();
  ensureQuizGroup('courseEn', courseEn.quizzes);
  ensureQuizGroup('courseFa', courseFa.quizzes);
  compareQuizGroups();

  note(`Checked ${Object.keys(courseEn.modules).length} modules.`);
  note(`Checked ${Object.keys(courseEn.quizzes).length} quiz groups.`);
  note(
    `Checked deep lesson topics: tooling(${toolingDeckOrder.length}), react(${reactTopicDeckOrder.length}), effects(${effectsTopicDeckOrder.length}).`,
  );

  if (notes.length > 0) {
    console.log('Content check notes:');
    for (const message of notes) {
      console.log(`- ${message}`);
    }
    console.log('');
  }

  if (errors.length > 0) {
    console.error('Content check failed:');
    for (const message of errors) {
      console.error(`- ${message}`);
    }
    process.exit(1);
  }

  console.log('Content check passed.');
}

main();
