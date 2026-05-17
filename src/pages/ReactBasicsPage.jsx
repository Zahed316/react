import { useState } from 'react';
import { LessonTemplate } from '../components/LessonTemplate';
import { LessonSection } from '../components/LessonSection';
import { LiveLabFrame } from '../components/LiveLabFrame';
import { QuizPanel } from '../components/QuizPanel';
import { SummaryPanel } from '../components/SummaryPanel';
import { TipsPanel } from '../components/TipsPanel';
import { DeepDivePanel } from '../components/deepLesson';
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

function renderReactTopicDetail(topic, detailCopy) {
  return (
    <div className="stack">
      <article className="tool-spotlight" style={{ '--tool-accent': topic.accent ?? '#2563eb' }}>
        <div className="tool-spotlight-header">
          <span className="pill">{topic.badge}</span>
          <span className="tool-glow" aria-hidden="true" />
        </div>
        <h3>{topic.title}</h3>
        <p>{topic.summary}</p>
      </article>

      <section className="split-layout">
        <LessonSection
          eyebrow={detailCopy.sections.definition}
          title={topic.title}
          titleAs="h3"
          lead={topic.summary}
        />

        <LessonSection
          eyebrow={detailCopy.sections.whyExists}
          title={topic.title}
          titleAs="h3"
          lead={topic.whyExists}
        />
      </section>

      <section className="split-layout">
        <LessonSection
          eyebrow={detailCopy.sections.problem}
          title={topic.title}
          titleAs="h3"
          lead={topic.problem}
        />

        <LessonSection eyebrow={detailCopy.sections.howItWorks} title={topic.title} titleAs="h3">
          <div className="tool-story-grid">
            {topic.howItWorks.map((item) => (
              <article className="story-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </LessonSection>
      </section>

      <LessonSection
        eyebrow={detailCopy.sections.simulation}
        title={topic.title}
        titleAs="h3"
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

      <LessonSection eyebrow={detailCopy.sections.example} title={topic.example.title} titleAs="h3">
        <div className="code-grid">
          <article className="code-card">
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

      <LessonSection eyebrow={detailCopy.sections.beforeAfter} title={topic.title} titleAs="h3">
        <div className="code-grid">
          <article className="code-card">
            <strong>{detailCopy.beforeLabel}</strong>
            <pre dir="ltr" lang="en" translate="no">
              <code>{topic.comparison.before}</code>
            </pre>
          </article>
          <article className="code-card">
            <strong>{detailCopy.afterLabel}</strong>
            <pre dir="ltr" lang="en" translate="no">
              <code>{topic.comparison.after}</code>
            </pre>
          </article>
        </div>
        <article className="story-card">
          <p>{topic.comparison.takeaway}</p>
        </article>
      </LessonSection>

      <section className="split-layout">
        <LessonSection eyebrow={detailCopy.sections.mistakes} title={topic.title} titleAs="h3">
          <ul className="bullet-list">
            {topic.mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection eyebrow={detailCopy.sections.usage} title={topic.title} titleAs="h3">
          <ul className="bullet-list">
            {topic.realUsage.map((usage) => (
              <li key={usage}>{usage}</li>
            ))}
          </ul>
        </LessonSection>
      </section>

      <section className="split-layout">
        <LessonSection
          eyebrow={detailCopy.sections.practice}
          title={detailCopy.practiceQuestion}
          titleAs="h3"
          lead={topic.practice.question}
        />

        <LessonSection
          eyebrow={detailCopy.sections.practice}
          title={detailCopy.practiceTask}
          titleAs="h3"
          lead={topic.practice.task}
        />
      </section>

      <LessonSection eyebrow={detailCopy.sections.summary} title={topic.title} titleAs="h3">
        <ul className="bullet-list">
          {topic.summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </LessonSection>
    </div>
  );
}

function ReactTopicLesson({ content, activeTopicId, onSelect }) {
  const detailCopy = content.modules.react.deepDive;

  return (
    <div className="stack">
      <SummaryPanel
        label={content.modules.react.stageLabel}
        title={content.modules.react.title}
        titleAs="h2"
        intro={content.modules.react.summary.intro}
        learningGoals={content.modules.react.summary.points}
        keyPoints={content.modules.react.summary.story}
      />

      <DeepDivePanel
        label={detailCopy.eyebrow}
        title={detailCopy.title}
        description={detailCopy.lead}
        topics={content.reactTopicDeck}
        activeId={activeTopicId}
        onSelect={onSelect}
        renderTopic={(selectedTopic) => renderReactTopicDetail(selectedTopic, detailCopy)}
      />
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
      secondaryActionTo={localizedPath(language, '/events-forms')}
      renderSummary={() => (
        <ReactTopicLesson
          content={content}
          activeTopicId={selectedTopicId}
          onSelect={setSelectedTopicId}
        />
      )}
      renderLive={() => (
        <LiveLabFrame
          label={content.modules.react.live.eyebrow}
          title={content.modules.react.live.title}
          description={content.modules.react.live.lead}
          guidance={
            language === 'fa'
              ? 'این بخش نشان می‌دهد که state و eventها چگونه روی یک کارت ساده اثر می‌گذارند.'
              : 'This section shows how state and events affect a simple card.'
          }
          stateNote={
            language === 'fa'
              ? 'نام، نقش، رنگ، شمار بازدید، like و count را تغییر بده و نتیجه را ببین.'
              : 'Change the name, role, color, visit count, like, and count to see the result.'
          }
        >
          <div className="stack">
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

            <div className="split-layout">
              <PropsLab key={language} content={content.modules.react.propsLab} />
              <EventLab content={content.modules.react.eventLab} />
            </div>
          </div>
        </LiveLabFrame>
      )}
      renderQuiz={() => (
        <QuizPanel
          label={content.common.quizTab}
          title={content.modules.react.quizTitle}
          titleAs="h2"
          quizzes={content.quizzes.react}
        />
      )}
      renderTips={() => (
        <TipsPanel
          label={content.common.tipsTab}
          title={content.modules.react.tipsTitle}
          titleAs="h2"
          tips={content.modules.react.tips}
          practicePrompts={[
            {
              prompt: activeTopic.practice.question,
              expectedOutcome: activeTopic.practice.task,
            },
          ]}
          mistakes={activeTopic.mistakes}
          rememberLabel={language === 'fa' ? 'آنچه باید به‌خاطر بسپاری' : 'What to remember'}
          practiceLabel={language === 'fa' ? 'تمرین' : 'Practice'}
          practiceTitle={language === 'fa' ? 'یک تمرین کوتاه' : 'Try it'}
          mistakesLabel={language === 'fa' ? 'چه چیزهایی را باید حواست باشد' : 'What to avoid'}
          mistakesTitle={language === 'fa' ? 'اشتباه‌های رایج' : 'Common mistakes'}
          mistakesDescription={
            language === 'fa' ? 'این یادآوری‌ها را سریع مرور کن.' : 'Use these as quick reminders.'
          }
        />
      )}
    />
  );
}
