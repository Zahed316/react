import { useState } from 'react';
import { LessonSection } from '../components/LessonSection';
import { DeepDivePanel } from '../components/deepLesson';
import { LessonTemplate } from '../components/LessonTemplate';
import { LiveLabFrame } from '../components/LiveLabFrame';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

const TOPIC_ORDER = [
  'prop-drilling',
  'state-placement',
  'provider-consumer',
  'custom-context-hooks',
  'language-progress-contexts',
  'context-tradeoffs',
];

function renderCodeCard(title, code) {
  return (
    <article className="code-card" dir="ltr">
      <strong>{title}</strong>
      <pre dir="ltr" lang="en" translate="no">
        <code>{code}</code>
      </pre>
    </article>
  );
}

function renderBullets(items, className = 'bullet-list bullet-list-compact') {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ul className={className}>
      {items.map((item, index) => {
        const text = typeof item === 'string' ? item : (item.title ?? item.label ?? item.text);
        const key = typeof item === 'string' ? item : (item.id ?? text ?? index);

        if (!text) {
          return null;
        }

        return <li key={key}>{text}</li>;
      })}
    </ul>
  );
}

function renderStoryCards(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="tool-story-grid">
      {items.map((item, index) => {
        const title = typeof item === 'string' ? null : (item.title ?? item.label ?? item.id);
        const body =
          typeof item === 'string'
            ? item
            : (item.body ?? item.description ?? item.detail ?? item.explanation ?? item.text);
        const key = typeof item === 'string' ? item : (item.id ?? title ?? index);

        if (!title && !body) {
          return null;
        }

        return (
          <article className="story-card" key={key}>
            {title ? <strong>{title}</strong> : null}
            {body ? <p>{body}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

function renderTopicDetail(topic, copy) {
  return (
    <div className="stack">
      <article className="tool-spotlight" style={{ '--tool-accent': topic.accent ?? '#0891b2' }}>
        <div className="tool-spotlight-header">
          <span className="pill">{topic.badge}</span>
          <span className="tool-glow" aria-hidden="true" />
        </div>
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
        {renderStoryCards(topic.howItWorks)}
      </LessonSection>

      <LessonSection
        eyebrow={copy.sections.simulation}
        title={topic.title}
        titleAs="h3"
        lead={copy.simulationIntro}
      >
        <div className="tool-story-grid">
          {topic.simulation.map((step, index) => (
            <article className="story-card" key={step.title}>
              <strong>
                {index + 1}. {step.title}
              </strong>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </LessonSection>

      <LessonSection eyebrow={copy.sections.example} title={topic.example.title} titleAs="h3">
        <div className="code-grid">
          {renderCodeCard(topic.example.title, topic.example.code)}
          <article className="story-card">
            <strong>{topic.title}</strong>
            <p>{topic.example.explanation}</p>
          </article>
        </div>
      </LessonSection>

      <LessonSection eyebrow={copy.sections.beforeAfter} title={topic.title} titleAs="h3">
        <div className="code-grid">
          {renderCodeCard(copy.beforeLabel, topic.comparison.before)}
          {renderCodeCard(copy.afterLabel, topic.comparison.after)}
        </div>
        <article className="story-card">
          <p>{topic.comparison.takeaway}</p>
        </article>
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
          title={copy.practiceQuestion}
          titleAs="h3"
          lead={topic.practice.question}
        />

        <LessonSection
          eyebrow={copy.sections.practice}
          title={copy.practiceTask}
          titleAs="h3"
          lead={topic.practice.task}
        />
      </section>

      <LessonSection eyebrow={copy.sections.summary} title={topic.title} titleAs="h3">
        {renderBullets(topic.summaryPoints, 'bullet-list')}
      </LessonSection>
    </div>
  );
}

function SharedStateSimulator({ content }) {
  const modeEntries = ['local', 'lifted', 'context'].map((key) => ({
    id: key,
    ...content.modes[key],
  }));
  const valueOptions = content.valueOptions;
  const [mode, setMode] = useState('local');
  const [sharedValue, setSharedValue] = useState(valueOptions[1]?.value ?? valueOptions[0]?.value);
  const [leftValue, setLeftValue] = useState(valueOptions[0]?.value ?? '');
  const [rightValue, setRightValue] = useState(valueOptions[2]?.value ?? valueOptions[0]?.value);

  const activeMode = modeEntries.find((entry) => entry.id === mode) ?? modeEntries[0];
  const sharedValueLabel =
    valueOptions.find((option) => option.value === sharedValue)?.label ?? sharedValue;
  const localMode = mode === 'local';
  const boundaryValue = localMode ? null : sharedValueLabel;
  const valueControlLabel = localMode
    ? content.localValueControlLabel
    : activeMode.valueControlLabel;
  const valueHint = localMode ? content.localValueHint : activeMode.valueHint;

  function renderValueSelect(value, onChange, label) {
    return (
      <label className="field">
        <span>{label}</span>
        <select value={value} onChange={(event) => onChange(event.target.value)}>
          {valueOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  function renderSiblingCard(sideLabel, value, onChange, controlLabel, note) {
    const resolvedValue = valueOptions.find((option) => option.value === value)?.label ?? value;

    return (
      <article className="story-card" aria-live="polite">
        <strong>{sideLabel}</strong>
        {localMode ? (
          <div className="stack">
            {renderValueSelect(value, onChange, controlLabel)}
            <div className="chip-row">
              <span className="pill">{resolvedValue}</span>
            </div>
          </div>
        ) : (
          <div className="chip-row">
            <span className="pill">{resolvedValue}</span>
          </div>
        )}
        <p>{note}</p>
      </article>
    );
  }

  return (
    <div className="stack">
      <div className="split-layout split-layout-compact">
        <article className="story-card">
          <strong>{content.modeLabel}</strong>
          <div className="chip-row" role="group" aria-label={content.modeLabel}>
            {modeEntries.map((entry) => (
              <button
                key={entry.id}
                type="button"
                className={mode === entry.id ? 'pill pill-active' : 'pill'}
                aria-pressed={mode === entry.id}
                onClick={() => setMode(entry.id)}
              >
                {entry.label}
              </button>
            ))}
          </div>
          <p>{activeMode.summary}</p>
        </article>

        <article className="story-card">
          <strong>{content.valueLabel}</strong>
          {renderValueSelect(sharedValue, setSharedValue, valueControlLabel)}
          <p>{valueHint}</p>
        </article>
      </div>

      <div className="tool-story-grid">
        {renderSiblingCard(
          content.siblingLabels.left,
          localMode ? leftValue : sharedValue,
          setLeftValue,
          content.localLabels.leftControl,
          localMode ? content.localLabels.leftNote : activeMode.panelNote,
        )}
        {renderSiblingCard(
          content.siblingLabels.right,
          localMode ? rightValue : sharedValue,
          setRightValue,
          content.localLabels.rightControl,
          localMode ? content.localLabels.rightNote : activeMode.panelNote,
        )}
      </div>

      <article className="story-card" aria-live="polite">
        <strong>{content.boundary.title}</strong>
        <div className="chip-row">
          <span className="pill">{content.boundary.outside}</span>
          <span className="pill">{content.boundary.provider}</span>
          <span className="pill">{content.boundary.consumerA}</span>
          <span className="pill">{content.boundary.consumerB}</span>
        </div>
        <p>{content.boundary.explanation}</p>
        <p className="quiet">{localMode ? content.boundary.localNote : activeMode.boundaryNote}</p>
        <p className="quiet">
          {boundaryValue
            ? `${content.boundary.currentValue}: ${boundaryValue}`
            : content.boundary.noValue}
        </p>
      </article>

      <div className="split-layout">
        <article className="story-card">
          <strong>{content.modeFitLabel}</strong>
          <p>{activeMode.fits}</p>
        </article>
        <article className="story-card">
          <strong>{content.modeTradeoffLabel}</strong>
          <p>{activeMode.tradeoff}</p>
        </article>
      </div>
    </div>
  );
}

export function ContextSharedStatePage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();
  const contextModule = content.modules['context-state'];
  const topics = TOPIC_ORDER.map((id) => ({ id, ...contextModule.topics[id] })).filter(
    (topic) => topic && topic.id && topic.title,
  );
  const [selectedTopicId, setSelectedTopicId] = useState(() => topics[0]?.id ?? 'prop-drilling');

  return (
    <LessonTemplate
      lesson={{
        hero: contextModule.hero,
        tabs: {
          summary: content.common.summaryTab,
          live: content.common.liveTab,
          quiz: content.common.quizTab,
          tips: content.common.tipsTab,
          ariaLabel: contextModule.title,
        },
      }}
      primaryActionLabel={contextModule.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('context-state')}
      secondaryActionLabel={contextModule.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/project-architecture')}
      summary={{
        label: contextModule.stageLabel,
        title: contextModule.title,
        titleAs: 'h2',
        intro: contextModule.summary.intro,
        learningGoals: contextModule.summary.points,
        prerequisites: contextModule.summary.prerequisites,
        keyPoints: contextModule.summary.keyPoints,
        learningGoalsLabel: language === 'fa' ? 'هدف‌های یادگیری' : 'Learning goals',
        prerequisitesLabel: language === 'fa' ? 'پیش‌نیازها' : 'Prerequisites',
        keyPointsLabel: language === 'fa' ? 'نکات کلیدی' : 'Key points',
      }}
      renderLive={() => (
        <div className="stack">
          <LiveLabFrame
            label={contextModule.live.eyebrow}
            title={contextModule.live.title}
            description={contextModule.live.lead}
            guidance={contextModule.live.guidance}
            stateNote={contextModule.live.stateNote}
          >
            <SharedStateSimulator content={contextModule.live} />
          </LiveLabFrame>

          <DeepDivePanel
            label={contextModule.deepDive.eyebrow}
            title={contextModule.deepDive.title}
            description={contextModule.deepDive.lead}
            topics={topics}
            activeId={selectedTopicId}
            onSelect={setSelectedTopicId}
            pickerLabel={contextModule.deepDive.chooserLabel}
            renderTopic={(topic) => renderTopicDetail(topic, contextModule.deepDive)}
          />
        </div>
      )}
      quiz={{
        label: content.common.quizTab,
        title: contextModule.quizTitle,
        titleAs: 'h2',
        quizzes: content.quizzes['context-state'],
      }}
      tips={{
        label: content.common.tipsTab,
        title: contextModule.title,
        titleAs: 'h2',
        intro: contextModule.tipsIntro,
        tips: contextModule.tips,
        practicePrompts: contextModule.practicePrompts,
        mistakes: contextModule.mistakes,
        rememberLabel: language === 'fa' ? 'آنچه باید به خاطر بسپاری' : 'What to remember',
        practiceLabel: language === 'fa' ? 'تمرین' : 'Practice',
        practiceTitle: language === 'fa' ? 'یک تمرین کوتاه' : 'Try it',
        mistakesLabel: language === 'fa' ? 'چه چیزی را باید از آن دوری کنی' : 'What to avoid',
        mistakesTitle: language === 'fa' ? 'اشتباه‌های رایج' : 'Common mistakes',
        mistakesDescription:
          language === 'fa' ? 'این یادآوری‌ها را سریع مرور کن.' : 'Use these as quick reminders.',
      }}
    />
  );
}
