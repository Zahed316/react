import { useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonTemplate } from '../components/LessonTemplate';
import { DeepLessonTopicPicker } from '../components/deepLesson';
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

function ReactTopicLesson({ content, topic, activeTopicId, onSelect }) {
  const detailCopy = content.modules.react.deepDive;

  return (
    <div className="stack">
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

        <div className="tool-story-grid">
          {content.modules.react.summary.story.map((item) => (
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
          items={content.reactTopicDeck}
          activeId={activeTopicId}
          onSelect={onSelect}
          ariaLabel={detailCopy.chooserLabel}
        />

        <article className="tool-spotlight" style={{ '--tool-accent': topic.accent ?? '#2563eb' }}>
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

export function ReactBasicsPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();
  const [selectedTopicId, setSelectedTopicId] = useState(
    () => content.reactTopicDeck[0]?.id ?? 'htmlDom',
  );

  const activeTopic =
    content.reactTopicDeck.find((topic) => topic.id === selectedTopicId) ??
    content.reactTopicDeck[0];

  const lesson = {
    hero: content.modules.react.hero,
    tabs: {
      summary: content.common.summaryTab,
      live: content.common.liveTab,
      quiz: content.common.quizTab,
      tips: content.common.tipsTab,
      ariaLabel: content.modules.react.title,
    },
  };

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={content.modules.react.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('react')}
      secondaryActionLabel={content.modules.react.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/effects')}
      renderSummary={() => (
        <ReactTopicLesson
          content={content}
          topic={activeTopic}
          activeTopicId={selectedTopicId}
          onSelect={setSelectedTopicId}
        />
      )}
      renderLive={() => (
        <div className="stack">
          <section className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{content.modules.react.live.eyebrow}</span>
              <h2>{content.modules.react.live.title}</h2>
            </div>
            <p className="quiet">{content.modules.react.live.lead}</p>
            <div className="tool-story-grid">
              {content.modules.react.live.story.map((item, index) => (
                <article className="story-card" key={item.title}>
                  <strong>
                    {index + 1}. {item.title}
                  </strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="split-layout">
            <PropsLab key={language} content={content.modules.react.propsLab} />
            <EventLab content={content.modules.react.eventLab} />
          </div>
        </div>
      )}
      renderQuiz={() => (
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
      )}
      renderTips={() => (
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
              <span className="eyebrow">{content.modules.react.deepDive.sections.summary}</span>
              <h2>{content.modules.react.tipsTitle}</h2>
            </div>
            <ul className="bullet-list bullet-list-compact">
              {content.modules.react.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    />
  );
}
