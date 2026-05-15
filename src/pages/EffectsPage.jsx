import { useEffect, useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonPageShell } from '../components/LessonPageShell';
import { LessonTabs } from '../components/LessonTabs';
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

export function EffectsPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();

  const tabs = [
    {
      id: 'summary',
      label: content.common.summaryTab,
      content: (
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
        </section>
      ),
    },
    {
      id: 'live',
      label: content.common.liveTab,
      content: (
        <div className="stack">
          <div className="split-layout split-layout-compact">
            <ClockPanel content={content} language={language} />
            <DebouncedSearch content={content.modules.effects.debounce} />
          </div>
          <NoteSaver content={content.modules.effects.note} />
        </div>
      ),
    },
    {
      id: 'quiz',
      label: content.common.quizTab,
      content: (
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
      ),
    },
    {
      id: 'tips',
      label: content.common.tipsTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.tipsTab}</span>
            <h2>{content.modules.effects.title}</h2>
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
      ),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={content.modules.effects.hero.eyebrow}
      title={content.modules.effects.hero.title}
      lead={content.modules.effects.hero.lead}
      primaryActionLabel={content.modules.effects.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('effects')}
      secondaryActionLabel={content.modules.effects.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/project')}
    >
      <LessonTabs tabs={tabs} ariaLabel={content.modules.effects.title} />
    </LessonPageShell>
  );
}
