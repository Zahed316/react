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

function renderEventsTopicDetail(topic, detailCopy) {
  return (
    <div className="stack">
      <article
        className="tool-spotlight"
        style={{ '--tool-accent': topic.badge === 'submit' ? '#0ea5e9' : '#2563eb' }}
      >
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
          lead={topic.definition}
        />

        <LessonSection
          eyebrow={detailCopy.sections.whyExists}
          title={topic.title}
          titleAs="h3"
          lead={topic.whyExists}
        />
      </section>

      <LessonSection
        eyebrow={detailCopy.sections.problem}
        title={topic.title}
        titleAs="h3"
        lead={topic.problem}
      />

      <LessonSection eyebrow={detailCopy.sections.howItWorks} title={topic.title} titleAs="h3">
        <div className="tool-story-grid">
          {topic.howItWorks.map((step, index) => (
            <article className="story-card" key={`${topic.id}-how-${index}`}>
              <strong>
                {index + 1}. {step}
              </strong>
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

function MiniTaskDraftLab({ content }) {
  const emptyDraft = {
    title: '',
    note: '',
    category: 'js',
  };

  const [formState, setFormState] = useState(emptyDraft);
  const [submittedDraft, setSubmittedDraft] = useState(null);
  const [nameTouched, setNameTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const title = formState.title.trim();
  const note = formState.note.trim();
  const titleIsValid = title.length > 0;
  const showTitleError = (nameTouched || submitAttempted) && !titleIsValid;
  const titleError = showTitleError ? content.validation.titleRequired : '';
  const titleHelpId = 'events-forms-title-help';
  const titleErrorId = 'events-forms-title-error';
  const noteHelpId = 'events-forms-note-help';
  const currentCategoryLabel = content.categories[formState.category] ?? formState.category;
  const currentNoteCount = formState.note.length;
  const currentPreviewTitle = title || content.preview.emptyTitle;
  const currentPreviewNote = note || content.preview.emptyNote;

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (!titleIsValid) {
      return;
    }

    setSubmittedDraft({
      title,
      note,
      category: formState.category,
    });
    setSubmitAttempted(false);
  }

  function handleReset() {
    setFormState(emptyDraft);
    setSubmittedDraft(null);
    setNameTouched(false);
    setSubmitAttempted(false);
  }

  return (
    <div className="stack">
      <form className="stack" noValidate onSubmit={handleSubmit}>
        <div className="field-grid">
          <label className="field">
            <span>{content.fields.title}</span>
            <input
              value={formState.title}
              onBlur={() => setNameTouched(true)}
              onChange={(event) =>
                setFormState((previous) => ({ ...previous, title: event.target.value }))
              }
              placeholder={content.placeholders.title}
              aria-invalid={Boolean(titleError)}
              aria-describedby={titleError ? `${titleHelpId} ${titleErrorId}` : titleHelpId}
            />
            <p id={titleHelpId} className="quiet">
              {content.help.title}
            </p>
            {titleError ? (
              <p id={titleErrorId} className="quiet" aria-live="polite">
                {titleError}
              </p>
            ) : null}
          </label>

          <label className="field">
            <span>{content.fields.note}</span>
            <textarea
              rows="4"
              maxLength={120}
              value={formState.note}
              onChange={(event) =>
                setFormState((previous) => ({ ...previous, note: event.target.value }))
              }
              placeholder={content.placeholders.note}
              aria-describedby={noteHelpId}
            />
            <p id={noteHelpId} className="quiet">
              {content.help.note}
            </p>
            <p className="quiet">
              {content.preview.noteCountLabel}: {currentNoteCount}/120
            </p>
          </label>

          <label className="field">
            <span>{content.fields.category}</span>
            <select
              value={formState.category}
              onChange={(event) =>
                setFormState((previous) => ({ ...previous, category: event.target.value }))
              }
            >
              {Object.entries(content.categories).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="hero-actions">
          <button type="submit" className="primary-button" disabled={!titleIsValid}>
            {content.actions.submit}
          </button>
          <button type="button" className="ghost-button" onClick={handleReset}>
            {content.actions.reset}
          </button>
        </div>
      </form>

      <div className="split-layout split-layout-compact">
        <article className="story-card">
          <strong>{content.preview.title}</strong>
          <p>{content.preview.description}</p>
          <div className="chip-row">
            <span className="pill">{currentPreviewTitle}</span>
            <span className="pill">{currentCategoryLabel}</span>
          </div>
          <p className="quiet">{currentPreviewNote}</p>
        </article>

        <article className="answer-box subtle" aria-live="polite">
          <strong>{content.preview.submittedTitle}</strong>
          {submittedDraft ? (
            <div className="stack">
              <p>{submittedDraft.title}</p>
              {submittedDraft.note ? <p className="quiet">{submittedDraft.note}</p> : null}
              <div className="chip-row">
                <span className="pill">{content.categories[submittedDraft.category]}</span>
              </div>
            </div>
          ) : (
            <p>{content.preview.emptySubmitted}</p>
          )}
        </article>
      </div>
    </div>
  );
}

export function EventsFormsPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();
  const eventsModule = content.modules['events-forms'];
  const [selectedTopicId, setSelectedTopicId] = useState(
    () => eventsModule.topics[0]?.id ?? 'event-handlers',
  );

  const activeTopic =
    eventsModule.topics.find((topic) => topic.id === selectedTopicId) ?? eventsModule.topics[0];

  const lesson = {
    hero: eventsModule.hero,
    tabs: {
      summary: content.common.summaryTab,
      live: content.common.liveTab,
      quiz: content.common.quizTab,
      tips: content.common.tipsTab,
      ariaLabel: eventsModule.title,
    },
  };

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={eventsModule.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('events-forms')}
      secondaryActionLabel={eventsModule.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/effects')}
      renderSummary={() => (
        <div className="stack">
          <SummaryPanel
            label={eventsModule.stageLabel}
            title={eventsModule.title}
            titleAs="h2"
            intro={eventsModule.summary.intro}
            learningGoals={eventsModule.summary.points}
            prerequisites={eventsModule.summary.prerequisites}
            keyPoints={eventsModule.summary.keyPoints}
            learningGoalsLabel={language === 'fa' ? 'هدف‌های یادگیری' : 'Learning goals'}
            prerequisitesLabel={language === 'fa' ? 'پیش‌نیازها' : 'Prerequisites'}
            keyPointsLabel={language === 'fa' ? 'نکات کلیدی' : 'Key points'}
          />

          <DeepDivePanel
            label={eventsModule.deepDive.eyebrow}
            title={eventsModule.deepDive.title}
            description={eventsModule.deepDive.lead}
            topics={eventsModule.topics}
            activeId={selectedTopicId}
            onSelect={setSelectedTopicId}
            pickerLabel={eventsModule.deepDive.chooserLabel}
            renderTopic={(selectedTopic) =>
              renderEventsTopicDetail(selectedTopic, eventsModule.deepDive)
            }
          />
        </div>
      )}
      renderLive={() => (
        <LiveLabFrame
          label={eventsModule.live.eyebrow}
          title={eventsModule.live.title}
          description={eventsModule.live.lead}
          guidance={eventsModule.live.guidance}
          stateNote={eventsModule.live.stateNote}
        >
          <MiniTaskDraftLab content={eventsModule.live} />
        </LiveLabFrame>
      )}
      renderQuiz={() => (
        <QuizPanel
          label={content.common.quizTab}
          title={eventsModule.quizTitle}
          titleAs="h2"
          quizzes={content.quizzes['events-forms']}
        />
      )}
      renderTips={() => (
        <TipsPanel
          label={content.common.tipsTab}
          title={eventsModule.title}
          titleAs="h2"
          intro={
            language === 'fa'
              ? 'یادآوری‌های کوتاه، یک تمرین سریع، و چند اشتباه رایج.'
              : 'Short reminders, one quick practice prompt, and a few common mistakes.'
          }
          tips={eventsModule.tips}
          practicePrompts={[
            {
              id: 'events-forms-practice',
              title: language === 'fa' ? 'تمرین کوتاه' : 'Quick practice',
              prompt: activeTopic.practice.question,
              hint: eventsModule.deepDive.practiceTask,
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
