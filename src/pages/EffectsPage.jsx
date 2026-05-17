import { useEffect, useState } from 'react';
import { LessonTemplate } from '../components/LessonTemplate';
import { LessonSection } from '../components/LessonSection';
import { LiveLabFrame } from '../components/LiveLabFrame';
import { DeepDivePanel } from '../components/deepLesson';
import { QuizPanel } from '../components/QuizPanel';
import { SummaryPanel } from '../components/SummaryPanel';
import { TipsPanel } from '../components/TipsPanel';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const NOTE_STORAGE_KEY = 'react-lab.effects-note.v3';

function ClockPanel({ content, language }) {
  const [tick, setTick] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTick(new Date());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const locale = language === 'fa' ? 'fa-IR' : 'en-US';
    document.title = `${content.common.appName} · ${tick.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    })}`;

    return () => {
      document.title = `${content.common.appName} · ${content.common.appSubtitle}`;
    };
  }, [content.common.appName, content.common.appSubtitle, language, tick]);

  return (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{content.modules.effects.clock.eyebrow}</span>
        <h2>{content.modules.effects.clock.title}</h2>
      </div>

      <div className="clock-face">
        <strong>
          {tick.toLocaleTimeString(language === 'fa' ? 'fa-IR' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })}
        </strong>
        <span>{content.modules.effects.clock.lead}</span>
      </div>
    </section>
  );
}

function DebouncedSearch({ content }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const concepts = ['props', 'state', 'effect', 'router', 'context', 'memo', 'ref'];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedQuery(query.trim().toLowerCase());
    }, 350);

    return () => window.clearTimeout(timeoutId);
  }, [query]);

  const results = concepts.filter((item) => item.includes(debouncedQuery));

  return (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{content.eyebrow}</span>
        <h2>{content.title}</h2>
      </div>

      <p className="quiet">{content.lead}</p>

      <label className="field">
        <span>{content.searchLabel}</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={content.placeholder}
        />
      </label>

      <div className="chip-row">
        {results.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="answer-box subtle">
        <strong>{content.lastQuery}</strong>
        <p>{debouncedQuery || content.empty}</p>
      </div>
    </section>
  );
}

function NoteSaver({ content }) {
  const [note, setNote] = useLocalStorageState(NOTE_STORAGE_KEY, content.initial, {
    legacyKeys: ['react-lab.effects-note.v1'],
  });

  return (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{content.eyebrow}</span>
        <h2>{content.title}</h2>
      </div>

      <p className="quiet">{content.lead}</p>

      <label className="field">
        <span>{content.label}</span>
        <textarea rows="4" value={note} onChange={(event) => setNote(event.target.value)} />
      </label>
    </section>
  );
}

function renderEffectsTopicDetail(topic, detailCopy) {
  function renderDetailSection({ eyebrow, title, lead, children }) {
    return (
      <LessonSection eyebrow={eyebrow} title={title} lead={lead}>
        {children}
      </LessonSection>
    );
  }

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

  return (
    <div className="stack">
      <article className="tool-spotlight" style={{ '--tool-accent': topic.accent ?? '#7c3aed' }}>
        <div className="tool-spotlight-header">
          <span className="pill">{topic.badge}</span>
          <span className="tool-glow" aria-hidden="true" />
        </div>
        <h3>{topic.title}</h3>
        <p>{topic.summary}</p>
      </article>

      <section className="split-layout">
        {renderDetailSection({
          eyebrow: detailCopy.sections.definition,
          title: topic.title,
          lead: topic.summary,
        })}

        {renderDetailSection({
          eyebrow: detailCopy.sections.whyExists,
          title: topic.title,
          lead: topic.whyExists,
        })}
      </section>

      <section className="split-layout">
        {renderDetailSection({
          eyebrow: detailCopy.sections.problem,
          title: topic.title,
          lead: topic.problem,
        })}

        {renderDetailSection({
          eyebrow: detailCopy.sections.howItWorks,
          title: topic.title,
          children: (
            <div className="tool-story-grid">
              {topic.howItWorks.map((item) => (
                <article className="story-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          ),
        })}
      </section>

      <LessonSection
        eyebrow={detailCopy.sections.simulation}
        title={topic.title}
        lead={detailCopy.simulationIntro}
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

      <LessonSection eyebrow={detailCopy.sections.example} title={topic.example.title}>
        <div className="code-grid">
          {renderCodeCard(topic.example.title, topic.example.code)}
          <article className="story-card">
            <strong>{topic.title}</strong>
            <p>{topic.example.explanation}</p>
          </article>
        </div>
      </LessonSection>

      <LessonSection eyebrow={detailCopy.sections.beforeAfter} title={topic.title}>
        <div className="code-grid">
          {renderCodeCard(detailCopy.beforeLabel, topic.comparison.before)}
          {renderCodeCard(detailCopy.afterLabel, topic.comparison.after)}
        </div>
        <article className="story-card">
          <p>{topic.comparison.takeaway}</p>
        </article>
      </LessonSection>

      <section className="split-layout">
        <LessonSection eyebrow={detailCopy.sections.mistakes} title={topic.title}>
          <ul className="bullet-list">
            {topic.mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection eyebrow={detailCopy.sections.usage} title={topic.title}>
          <ul className="bullet-list">
            {topic.realUsage.map((usage) => (
              <li key={usage}>{usage}</li>
            ))}
          </ul>
        </LessonSection>
      </section>

      <section className="split-layout">
        {renderDetailSection({
          eyebrow: detailCopy.sections.practice,
          title: detailCopy.practiceQuestion,
          lead: topic.practice.question,
        })}

        {renderDetailSection({
          eyebrow: detailCopy.sections.practice,
          title: detailCopy.practiceTask,
          lead: topic.practice.task,
        })}
      </section>

      <LessonSection eyebrow={detailCopy.sections.summary} title={topic.title}>
        <ul className="bullet-list">
          {topic.summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </LessonSection>
    </div>
  );
}

function EffectsTopicLesson({ content, activeTopicId, onSelect, language }) {
  const detailCopy = content.modules.effects.deepDive;
  const isFa = language === 'fa';
  const summaryNextStep = isFa
    ? 'بعدی: یک موضوع را برای مرور جزئیات انتخاب کن.'
    : 'Next: choose a topic to review the details.';

  return (
    <div className="stack">
      <SummaryPanel
        label={content.modules.effects.stageLabel}
        title={content.modules.effects.title}
        titleAs="h2"
        intro={content.modules.effects.summary.intro}
        learningGoals={content.modules.effects.summary.points}
        keyPoints={content.modules.effects.summary.story}
        learningGoalsLabel={isFa ? 'هدف‌های یادگیری' : 'Learning goals'}
        prerequisitesLabel={isFa ? 'پیش‌نیازها' : 'Prerequisites'}
        keyPointsLabel={isFa ? 'نکات کلیدی' : 'Key points'}
        footer={summaryNextStep}
      />

      <DeepDivePanel
        label={detailCopy.eyebrow}
        title={detailCopy.title}
        description={detailCopy.lead}
        topics={content.effectsTopicDeck}
        activeId={activeTopicId}
        onSelect={onSelect}
        pickerLabel={detailCopy.chooserLabel}
        renderTopic={(selectedTopic) => renderEffectsTopicDetail(selectedTopic, detailCopy)}
      />
    </div>
  );
}

export function EffectsPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();
  const [selectedTopicId, setSelectedTopicId] = useState(
    () => content.effectsTopicDeck[0]?.id ?? 'sideEffects',
  );

  const activeTopic =
    content.effectsTopicDeck.find((topic) => topic.id === selectedTopicId) ??
    content.effectsTopicDeck[0];

  const lesson = {
    hero: content.modules.effects.hero,
    tabs: {
      summary: content.common.summaryTab,
      live: content.common.liveTab,
      quiz: content.common.quizTab,
      tips: content.common.tipsTab,
      ariaLabel: content.modules.effects.title,
    },
  };
  const secondaryActionLabel =
    content.modules.effects.hero.secondaryAction ??
    (language === 'fa' ? 'رفتن به پروژه' : 'Go to project');

  const renderSummary = () => (
    <EffectsTopicLesson
      content={content}
      topic={activeTopic}
      activeTopicId={selectedTopicId}
      onSelect={setSelectedTopicId}
    />
  );

  const renderLive = () => (
    <LiveLabFrame
      label={content.modules.effects.live.eyebrow}
      title={content.modules.effects.live.title}
      description={content.modules.effects.live.lead}
      guidance={
        language === 'fa'
          ? 'سه نمایش را دنبال کن: تغییر زمان، جست‌وجوی با تأخیر، و ذخیره یادداشت.'
          : 'Follow three related demos: changing time, delayed search, and saved notes.'
      }
      stateNote={
        language === 'fa'
          ? 'Clock هر ثانیه تغییر می‌کند، search با تأخیر به‌روزرسانی می‌شود، و note در مرورگر ذخیره می‌شود.'
          : 'The clock ticks every second, search updates after a delay, and the note is saved in the browser.'
      }
    >
      <div className="stack">
        <LessonSection
          eyebrow={content.modules.effects.live.eyebrow}
          title={content.modules.effects.live.title}
          lead={content.modules.effects.live.lead}
        >
          <div className="tool-story-grid">
            {content.modules.effects.live.story.map((item, index) => (
              <article className="story-card" key={item.title}>
                <strong>
                  {index + 1}. {item.title}
                </strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </LessonSection>

        <div className="split-layout split-layout-compact">
          <ClockPanel content={content} language={language} />
          <DebouncedSearch content={content.modules.effects.debounce} />
        </div>
        <NoteSaver content={content.modules.effects.note} />
      </div>
    </LiveLabFrame>
  );

  const renderQuiz = () => (
    <QuizPanel
      label={content.common.quizTab}
      title={content.modules.effects.quizTitle}
      titleAs="h2"
      quizzes={content.quizzes.effects}
    />
  );

  const renderTips = () => (
    <TipsPanel
      label={content.common.tipsTab}
      title={content.modules.effects.tipsTitle}
      titleAs="h2"
      intro={
        language === 'fa'
          ? 'یادآوری‌های کوتاه، یک تمرین سریع، و چند هشدار رایج.'
          : 'Short reminders, one quick practice prompt, and a few common pitfalls.'
      }
      tips={[...content.modules.effects.routingNotes, ...content.modules.effects.tips]}
      practicePrompts={[
        {
          id: 'effects-practice',
          title: language === 'fa' ? 'تمرین کوتاه' : 'Quick practice',
          prompt: activeTopic.practice.question,
          hint: content.modules.effects.deepDive.practiceTask,
          expectedOutcome: activeTopic.practice.task,
        },
      ]}
      mistakes={activeTopic.mistakes}
      rememberLabel={language === 'fa' ? 'آنچه باید به خاطر بسپاری' : 'What to remember'}
      practiceLabel={language === 'fa' ? 'تمرین' : 'Practice'}
      practiceTitle={language === 'fa' ? 'یک بار دیگر امتحان کن' : 'Try it'}
      mistakesLabel={language === 'fa' ? 'چه چیزی را باید از آن دوری کنی' : 'What to avoid'}
      mistakesTitle={language === 'fa' ? 'اشتباه‌های رایج' : 'Common mistakes'}
      mistakesDescription={
        language === 'fa' ? 'این یادآوری‌ها را سریع مرور کن.' : 'Use these as quick reminders.'
      }
    />
  );

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={content.modules.effects.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('effects')}
      secondaryActionLabel={secondaryActionLabel}
      secondaryActionTo={localizedPath(language, '/project')}
      renderSummary={renderSummary}
      renderLive={renderLive}
      renderQuiz={renderQuiz}
      renderTips={renderTips}
    />
  );
}
