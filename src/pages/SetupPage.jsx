import { QuizBlock } from '../components/QuizBlock';
import { LessonPageShell } from '../components/LessonPageShell';
import { LessonTabs } from '../components/LessonTabs';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const CHECKLIST_STORAGE_KEY = 'react-lab.setup-checklist.v3';

function createInitialChecklistState(checklistItems) {
  return Object.fromEntries(checklistItems.map((item) => [item.id, false]));
}

export function SetupPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { completedSet, markModuleComplete } = useLearningProgress();
  const checklistItems = content.setupChecklist;
  const [checklist, setChecklist] = useLocalStorageState(
    CHECKLIST_STORAGE_KEY,
    () => createInitialChecklistState(checklistItems),
    {
      legacyKeys: ['react-lab.setup-checklist.v2'],
    },
  );

  const checkedCount = Object.values(checklist).filter(Boolean).length;
  const readinessPercent = Math.round((checkedCount / checklistItems.length) * 100);
  const isReady = checkedCount === checklistItems.length;
  const alreadyCompleted = completedSet.has('setup');

  function toggleItem(itemId) {
    setChecklist((previousState) => ({
      ...previousState,
      [itemId]: !previousState[itemId],
    }));
  }

  function handleCompleteSetup() {
    if (!isReady || alreadyCompleted) {
      return;
    }

    markModuleComplete('setup');
  }

  const livePanel = (
    <div className="stack">
      <div className="surface lesson-subpanel">
        <div className="readiness-header">
          <div>
            <span className="eyebrow">{content.modules.setup.live.eyebrow}</span>
            <h2>{content.modules.setup.live.title}</h2>
            <p className="quiet">{content.modules.setup.live.lead}</p>
          </div>
          <div className="readiness-score">
            <strong>{readinessPercent}%</strong>
            <span>
              {checkedCount}/{checklistItems.length}
            </span>
          </div>
        </div>

        <div className="progress-track readiness-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${readinessPercent}%` }} />
        </div>

        <div className="checklist-grid">
          {checklistItems.map((item) => {
            const checked = checklist[item.id];

            return (
              <button
                key={item.id}
                type="button"
                className={`checklist-card${checked ? ' checklist-card-checked' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                <div className="checklist-card-top">
                  <span className="pill">
                    {checked ? content.common.done : content.common.pending}
                  </span>
                  <span className="checkmark">{checked ? '✓' : '○'}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <small>{item.hint}</small>
              </button>
            );
          })}
        </div>
      </div>

      <div className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.common.explanation}</span>
          <h2>{content.modules.setup.live.storyTitle}</h2>
        </div>

        <div className="tool-story-grid">
          {content.modules.setup.live.story.map((item) => (
            <article className="story-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="command-stack">
          {content.modules.setup.live.commands.map((command) => (
            <div className="command-card" key={command.label}>
              <span>{command.label}</span>
              <code>{command.code}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    {
      id: 'summary',
      label: content.common.summaryTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.summaryTab}</span>
            <h2>{content.modules.setup.title}</h2>
          </div>
          <p className="quiet">{content.modules.setup.summary.intro}</p>
          <ul className="bullet-list">
            {content.modules.setup.summary.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      ),
    },
    {
      id: 'live',
      label: content.common.liveTab,
      content: livePanel,
    },
    {
      id: 'quiz',
      label: content.common.quizTab,
      content: (
        <div className="stack">
          <div className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{content.common.quizTab}</span>
              <h2>{content.modules.setup.quizTitle}</h2>
            </div>
            <div className="stack">
              {content.quizzes.setup.map((question) => (
                <QuizBlock key={question.id} {...question} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tips',
      label: content.common.tipsTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.tipsTab}</span>
            <h2>{content.modules.setup.title}</h2>
          </div>
          <ul className="bullet-list bullet-list-compact">
            {content.modules.setup.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      ),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={content.modules.setup.hero.eyebrow}
      title={content.modules.setup.hero.title}
      lead={content.modules.setup.hero.lead}
      primaryActionLabel={
        alreadyCompleted ? content.common.done : content.modules.setup.hero.primaryAction
      }
      onPrimaryAction={handleCompleteSetup}
      primaryDisabled={!isReady || alreadyCompleted}
      secondaryActionLabel={content.modules.setup.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/tooling')}
    >
      <LessonTabs tabs={tabs} ariaLabel={content.modules.setup.title} />
    </LessonPageShell>
  );
}