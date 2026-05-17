import { useEffect, useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonTemplate } from '../components/LessonTemplate';
import { DeepLessonTopicPicker } from '../components/deepLesson';
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

function EffectsTopicLesson({ content, topic, activeTopicId, onSelect }) {
  const detailCopy = content.modules.effects.deepDive;

  return (
    <div className="stack">
      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.modules.effects.stageLabel}</span>
          <h2>{content.modules.effects.title}</h2>
        </div>
        <p className="quiet">{content.modules.effects.summary.intro}</p>
        <ul className="bullet-list">
          {content.modules.effects.summary.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="tool-story-grid">
          {content.modules.effects.summary.story.map((item) => (
            <article className="story-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{detailCopy.eyebrow}</span>
          <h2>{detailCopy.title}</h2>
          <p className="quiet">{detailCopy.lead}</p>
        </div>

        <DeepLessonTopicPicker
          items={content.effectsTopicDeck}
          activeId={activeTopicId}
          onSelect={onSelect}
          ariaLabel={detailCopy.chooserLabel}
        />

        <article className="tool-spotlight" style={{ '--tool-accent': topic.accent ?? '#7c3aed' }}>
          <div className="tool-spotlight-header">
            <span className="pill">{topic.badge}</span>
            <span className="tool-glow" aria-hidden="true" />
          </div>
          <h3>{topic.title}</h3>
          <p>{topic.summary}</p>
        </article>
      </section>

      <section className="split-layout">
        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.definition}</span>
            <h2>{topic.title}</h2>
          </div>
          <p className="quiet">{topic.summary}</p>
        </article>

        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.whyExists}</span>
            <h2>{topic.title}</h2>
          </div>
          <p className="quiet">{topic.whyExists}</p>
        </article>
      </section>

      <section className="split-layout">
        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.problem}</span>
            <h2>{topic.title}</h2>
          </div>
          <p className="quiet">{topic.problem}</p>
        </article>

        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.howItWorks}</span>
            <h2>{topic.title}</h2>
          </div>
          <div className="tool-story-grid">
            {topic.howItWorks.map((item) => (
              <article className="story-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{detailCopy.sections.simulation}</span>
          <h2>{topic.title}</h2>
          <p className="quiet">{detailCopy.simulationIntro}</p>
        </div>
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
      </section>

      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{detailCopy.sections.example}</span>
          <h2>{topic.example.title}</h2>
        </div>
        <div className="code-grid">
          <article className="code-card">
            <strong>{topic.example.title}</strong>
            <pre>{topic.example.code}</pre>
          </article>
          <article className="story-card">
            <strong>{topic.title}</strong>
            <p>{topic.example.explanation}</p>
          </article>
        </div>
      </section>

      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{detailCopy.sections.beforeAfter}</span>
          <h2>{topic.title}</h2>
        </div>
        <div className="code-grid">
          <article className="code-card">
            <strong>{detailCopy.beforeLabel}</strong>
            <pre>{topic.comparison.before}</pre>
          </article>
          <article className="code-card">
            <strong>{detailCopy.afterLabel}</strong>
            <pre>{topic.comparison.after}</pre>
          </article>
        </div>
        <article className="story-card">
          <p>{topic.comparison.takeaway}</p>
        </article>
      </section>

      <section className="split-layout">
        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.mistakes}</span>
            <h2>{topic.title}</h2>
          </div>
          <ul className="bullet-list">
            {topic.mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </article>

        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.usage}</span>
            <h2>{topic.title}</h2>
          </div>
          <ul className="bullet-list">
            {topic.realUsage.map((usage) => (
              <li key={usage}>{usage}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="split-layout">
        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.practice}</span>
            <h2>{detailCopy.practiceQuestion}</h2>
          </div>
          <p className="quiet">{topic.practice.question}</p>
        </article>

        <article className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.practice}</span>
            <h2>{detailCopy.practiceTask}</h2>
          </div>
          <p className="quiet">{topic.practice.task}</p>
        </article>
      </section>

      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{detailCopy.sections.summary}</span>
          <h2>{topic.title}</h2>
        </div>
        <ul className="bullet-list">
          {topic.summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
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

  const renderSummary = () => (
    <EffectsTopicLesson
      content={content}
      topic={activeTopic}
      activeTopicId={selectedTopicId}
      onSelect={setSelectedTopicId}
    />
  );

  const renderLive = () => (
    <div className="stack">
      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.modules.effects.live.eyebrow}</span>
          <h2>{content.modules.effects.live.title}</h2>
        </div>
        <p className="quiet">{content.modules.effects.live.lead}</p>
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
      </section>

      <div className="split-layout split-layout-compact">
        <ClockPanel content={content} language={language} />
        <DebouncedSearch content={content.modules.effects.debounce} />
      </div>
      <NoteSaver content={content.modules.effects.note} />
    </div>
  );

  const renderQuiz = () => (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{content.common.quizTab}</span>
        <h2>{content.modules.effects.quizTitle}</h2>
      </div>
      <div className="stack">
        {content.quizzes.effects.map((question) => (
          <QuizBlock key={question.id} {...question} />
        ))}
      </div>
    </section>
  );

  const renderTips = () => (
    <div className="stack">
      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.common.tipsTab}</span>
          <h2>{activeTopic.title}</h2>
        </div>
        <ul className="bullet-list bullet-list-compact">
          {activeTopic.mistakes.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.modules.effects.deepDive.sections.summary}</span>
          <h2>{content.modules.effects.tipsTitle}</h2>
        </div>
        <ul className="bullet-list bullet-list-compact">
          {content.modules.effects.routingNotes.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {content.modules.effects.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={content.modules.effects.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('effects')}
      secondaryActionLabel={content.modules.effects.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/project')}
      renderSummary={renderSummary}
      renderLive={renderLive}
      renderQuiz={renderQuiz}
      renderTips={renderTips}
    />
  );
}
