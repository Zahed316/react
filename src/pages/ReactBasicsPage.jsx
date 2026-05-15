import { useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonPageShell } from '../components/LessonPageShell';
import { LessonTabs } from '../components/LessonTabs';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

function ProfileCard({ name, role, accent, visits, copy, visitsLabel }) {
  return (
    <article className="profile-card" style={{ '--card-accent': accent }}>
      <span className="profile-role">{role}</span>
      <h3>{name}</h3>
      <p>{copy}</p>
      <div className="profile-foot">
        <span>{visitsLabel}</span>
        <strong>{visits}</strong>
      </div>
    </article>
  );
}

function PropsLab({ content }) {
  const [name, setName] = useState(content.defaults.name);
  const [role, setRole] = useState(content.defaults.role);
  const [accent, setAccent] = useState('#2563eb');
  const [visits, setVisits] = useState(1);

  return (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{content.eyebrow}</span>
        <h2>{content.title}</h2>
      </div>

      <div className="profile-layout">
        <ProfileCard
          name={name}
          role={role}
          accent={accent}
          visits={visits}
          copy={content.lead}
          visitsLabel={content.visitsLabel}
        />

        <div className="field-grid">
          <label className="field">
            <span>{content.fields.name}</span>
            <input value={name} onChange={(event) => setName(event.target.value)} />
          </label>

          <label className="field">
            <span>{content.fields.role}</span>
            <input value={role} onChange={(event) => setRole(event.target.value)} />
          </label>

          <label className="field">
            <span>{content.fields.accent}</span>
            <input
              type="color"
              value={accent}
              onChange={(event) => setAccent(event.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="hero-actions">
        <button
          type="button"
          className="secondary-button"
          onClick={() => setVisits((value) => value + 1)}
        >
          {content.actions.addVisit}
        </button>
        <button type="button" className="ghost-button" onClick={() => setVisits(1)}>
          {content.actions.resetVisit}
        </button>
      </div>
    </section>
  );
}

function EventLab({ content }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const step = 2;

  return (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{content.eyebrow}</span>
        <h2>{content.title}</h2>
      </div>

      <p className="quiet">{content.lead}</p>

      <div className="counter-display">
        <strong>{count}</strong>
        <span>{content.counterLabel}</span>
      </div>

      <div className="hero-actions">
        <button
          type="button"
          className="primary-button"
          onClick={() => setCount((value) => value + step)}
        >
          {content.actions.increment}
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => setCount((value) => value - 1)}
        >
          {content.actions.decrement}
        </button>
        <button
          type="button"
          className={liked ? 'ghost-button ghost-button-active' : 'ghost-button'}
          onClick={() => setLiked((value) => !value)}
        >
          {content.actions.toggleLiked}
        </button>
      </div>
    </section>
  );
}

export function ReactBasicsPage() {
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
            <span className="eyebrow">{content.modules.react.stageLabel}</span>
            <h2>{content.modules.react.title}</h2>
          </div>
          <p className="quiet">{content.modules.react.summary.intro}</p>
          <ul className="bullet-list">
            {content.modules.react.summary.points.map((point) => (
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
        <div className="split-layout">
          <PropsLab key={language} content={content.modules.react.propsLab} />
          <EventLab content={content.modules.react.eventLab} />
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
            <h2>{content.modules.react.quizTitle}</h2>
          </div>
          <div className="stack">
            {content.quizzes.react.map((question) => (
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
            <h2>{content.modules.react.title}</h2>
          </div>
          <ul className="bullet-list bullet-list-compact">
            {content.modules.react.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      ),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={content.modules.react.hero.eyebrow}
      title={content.modules.react.hero.title}
      lead={content.modules.react.hero.lead}
      primaryActionLabel={content.modules.react.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('react')}
      secondaryActionLabel={content.modules.react.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/effects')}
    >
      <LessonTabs tabs={tabs} ariaLabel={content.modules.react.title} />
    </LessonPageShell>
  );
}
