import { useState } from 'react';
import { LessonTemplate } from '../components/LessonTemplate';
import { LiveLabFrame } from '../components/LiveLabFrame';
import { LessonSection } from '../components/LessonSection';
import { DeepDivePanel } from '../components/deepLesson';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

const TOPIC_ORDER = [
  'test-levels',
  'user-centric-testing',
  'accessible-labels-semantics',
  'keyboard-focus',
  'contrast-feedback',
  'aria-when-needed',
];

const EXPLORER_ORDER = [
  'unit-tests',
  'integration-tests',
  'user-centric-testing',
  'accessible-labels',
  'keyboard-navigation',
  'semantic-html',
  'focus-management',
  'contrast-and-aria',
];

function renderBullets(items, className = 'bullet-list bullet-list-compact') {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function renderTopicDetail(topic, copy) {
  return (
    <div className="stack">
      <article className="story-card">
        <span className="pill">{topic.badge}</span>
        <h3>{topic.title}</h3>
        <p>{topic.summary}</p>
      </article>

      <section className="split-layout">
        <LessonSection
          eyebrow={copy.sections.definition}
          title={topic.title}
          titleAs="h3"
          lead={topic.definition}
        />
        <LessonSection
          eyebrow={copy.sections.whyExists}
          title={topic.title}
          titleAs="h3"
          lead={topic.whyExists}
        />
      </section>

      <LessonSection
        eyebrow={copy.sections.problem}
        title={topic.title}
        titleAs="h3"
        lead={topic.problem}
      />

      <LessonSection eyebrow={copy.sections.howItWorks} title={topic.title} titleAs="h3">
        <div className="tool-story-grid">
          {topic.howItWorks.map((item) => (
            <article className="story-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </LessonSection>

      <LessonSection eyebrow={copy.sections.example} title={topic.example.title} titleAs="h3">
        <div className="code-grid">
          <article className="code-card" dir="ltr">
            <strong>{topic.example.title}</strong>
            <pre dir="ltr" lang="en" translate="no">
              <code>{topic.example.code}</code>
            </pre>
          </article>
          <article className="story-card">
            <strong>{topic.title}</strong>
            <p>{topic.example.explanation}</p>
          </article>
        </div>
      </LessonSection>

      <section className="split-layout">
        <LessonSection eyebrow={copy.sections.mistakes} title={topic.title} titleAs="h3">
          {renderBullets(topic.mistakes)}
        </LessonSection>
        <LessonSection eyebrow={copy.sections.usage} title={topic.title} titleAs="h3">
          {renderBullets(topic.realUsage)}
        </LessonSection>
      </section>

      <section className="split-layout">
        <LessonSection
          eyebrow={copy.sections.practice}
          title={copy.practicePromptTitle}
          titleAs="h3"
          lead={topic.practice.prompt}
        />
        <LessonSection eyebrow={copy.sections.summary} title={copy.summaryTitle} titleAs="h3">
          {renderBullets(topic.summaryPoints, 'bullet-list')}
        </LessonSection>
      </section>
    </div>
  );
}

function TestingAccessibilityExplorer({ content, activeItemId, onSelect }) {
  const activeItem = content.items.find((item) => item.id === activeItemId) ?? content.items[0];

  return (
    <div className="stack">
      <article className="story-card">
        <strong>{content.selectorLabel}</strong>
        <div className="chip-row" role="group" aria-label={content.selectorLabel}>
          {content.items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeItem.id === item.id ? 'pill pill-active' : 'pill'}
              aria-pressed={activeItem.id === item.id}
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p>{content.readOnlyNote}</p>
      </article>

      <div className="split-layout">
        <article className="story-card" aria-live="polite">
          <div className="chip-row">
            <span className="pill">{activeItem.decisionLabel}</span>
            <span className="pill">
              {content.selectedLabel}: {activeItem.label}
            </span>
          </div>
          <h3>{activeItem.label}</h3>
          <p>{activeItem.definition}</p>
          <p className="quiet">{activeItem.whyItMatters}</p>
        </article>

        <article className="story-card">
          <strong>{content.sections.examples}</strong>
          <ul className="bullet-list bullet-list-compact">
            {activeItem.examples.map((example) => (
              <li key={example} dir="ltr">
                <code>{example}</code>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="tool-story-grid">
        <article className="story-card">
          <strong>{content.sections.lookFor}</strong>
          {renderBullets(activeItem.lookFor)}
        </article>
        <article className="story-card">
          <strong>{content.sections.avoid}</strong>
          {renderBullets(activeItem.avoid)}
        </article>
      </div>
    </div>
  );
}

export function TestingAccessibilityPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();
  const moduleContent = content.modules['testing-accessibility'];
  const topics = TOPIC_ORDER.map((id) => ({ id, ...moduleContent.topics[id] })).filter(
    (topic) => topic && topic.id && topic.title,
  );
  const explorerItems = EXPLORER_ORDER.map((id) => ({
    id,
    ...moduleContent.live.items[id],
  })).filter((item) => item && item.id && item.label);
  const [selectedTopicId, setSelectedTopicId] = useState(() => topics[0]?.id ?? TOPIC_ORDER[0]);
  const [selectedExplorerId, setSelectedExplorerId] = useState(
    () => explorerItems[0]?.id ?? EXPLORER_ORDER[0],
  );

  return (
    <LessonTemplate
      lesson={{
        hero: moduleContent.hero,
        tabs: {
          summary: content.common.summaryTab,
          live: content.common.liveTab,
          quiz: content.common.quizTab,
          tips: content.common.tipsTab,
          ariaLabel: moduleContent.title,
        },
      }}
      primaryActionLabel={moduleContent.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('testing-accessibility')}
      secondaryActionLabel={moduleContent.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/project')}
      summary={{
        label: moduleContent.stageLabel,
        title: moduleContent.title,
        titleAs: 'h2',
        intro: moduleContent.summary.intro,
        learningGoals: moduleContent.summary.points,
        prerequisites: moduleContent.summary.prerequisites,
        keyPoints: moduleContent.summary.keyPoints,
        learningGoalsLabel: language === 'fa' ? 'هدف‌های یادگیری' : 'Learning goals',
        prerequisitesLabel: language === 'fa' ? 'پیش‌نیازها' : 'Prerequisites',
        keyPointsLabel: language === 'fa' ? 'نکات کلیدی' : 'Key points',
      }}
      renderLive={() => (
        <div className="stack">
          <LiveLabFrame
            label={moduleContent.live.eyebrow}
            title={moduleContent.live.title}
            description={moduleContent.live.lead}
            guidance={moduleContent.live.guidance}
            stateNote={moduleContent.live.stateNote}
          >
            <TestingAccessibilityExplorer
              content={{ ...moduleContent.live, items: explorerItems }}
              activeItemId={selectedExplorerId}
              onSelect={setSelectedExplorerId}
            />
          </LiveLabFrame>

          <DeepDivePanel
            label={moduleContent.deepDive.eyebrow}
            title={moduleContent.deepDive.title}
            description={moduleContent.deepDive.lead}
            topics={topics}
            activeId={selectedTopicId}
            onSelect={setSelectedTopicId}
            pickerLabel={moduleContent.deepDive.chooserLabel}
            renderTopic={(topic) => renderTopicDetail(topic, moduleContent.deepDive)}
          />
        </div>
      )}
      quiz={{
        label: content.common.quizTab,
        title: moduleContent.quizTitle,
        titleAs: 'h2',
        quizzes: content.quizzes['testing-accessibility'],
      }}
      tips={{
        label: content.common.tipsTab,
        title: moduleContent.tipsTitle,
        titleAs: 'h2',
        intro: moduleContent.tipsIntro,
        tips: moduleContent.tips,
        practicePrompts: moduleContent.practicePrompts,
        mistakes: moduleContent.mistakes,
        rememberLabel: language === 'fa' ? 'آنچه باید به خاطر بسپاری' : 'What to remember',
        practiceLabel: language === 'fa' ? 'تمرین' : 'Practice',
        practiceTitle: language === 'fa' ? 'یک تمرین کوتاه' : 'Try it',
        mistakesLabel: language === 'fa' ? 'چه چیزی را باید از آن دوری کنی' : 'What to avoid',
        mistakesTitle: language === 'fa' ? 'اشتباه‌های رایج' : 'Common mistakes',
        mistakesDescription:
          language === 'fa'
            ? 'این‌ها کیفیت یادگیری، آزمون‌پذیری و دسترس‌پذیری را در کنار هم نگه می‌دارند.'
            : 'Use these to keep testing quality and accessibility aligned.',
      }}
    />
  );
}
