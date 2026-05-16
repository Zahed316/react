import { LessonTemplate } from '../components/LessonTemplate';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const CHECKLIST_STORAGE_KEY = 'react-lab.setup-checklist.v3';

function createInitialChecklistState(checklistItems) {
  return Object.fromEntries(checklistItems.map((item) => [item.id, false]));
}

function SetupChecklistBody({
  content,
  checklistItems,
  checklist,
  checklistTotal,
  readinessPercent,
  toggleItem,
}) {
  return (
    <div className="stack">
      <section className="surface lesson-subpanel">
        <div className="readiness-header">
          <div>
            <span className="eyebrow">{content.modules.setup.live.eyebrow}</span>
            <h2>{content.modules.setup.live.title}</h2>
            <p className="quiet">{content.modules.setup.live.lead}</p>
          </div>
          <div className="readiness-score">
            <strong>{readinessPercent}%</strong>
            <span>
              {Object.values(checklist).filter(Boolean).length}/{checklistTotal}
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
      </section>

      <section className="surface lesson-subpanel">
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
      </section>
    </div>
  );
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

  return (
    <LessonTemplate
      lesson={{
        hero: content.modules.setup.hero,
        tabs: {
          summary: content.common.summaryTab,
          live: content.common.liveTab,
          quiz: content.common.quizTab,
          tips: content.common.tipsTab,
          ariaLabel: content.modules.setup.title,
        },
      }}
      primaryActionLabel={
        alreadyCompleted ? content.common.done : content.modules.setup.hero.primaryAction
      }
      onPrimaryAction={handleCompleteSetup}
      primaryDisabled={!isReady || alreadyCompleted}
      secondaryActionLabel={content.modules.setup.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/tooling')}
      summary={{
        label: content.modules.setup.stageLabel,
        title: content.modules.setup.title,
        titleAs: 'h2',
        intro: content.modules.setup.summary.intro,
        learningGoals: content.modules.setup.summary.points,
      }}
      liveLab={{
        label: content.modules.setup.live.eyebrow,
        title: content.modules.setup.live.title,
        titleAs: 'h2',
        description: content.modules.setup.live.lead,
        children: (
          <SetupChecklistBody
            content={content}
            checklistItems={checklistItems}
            checklist={checklist}
            checklistTotal={checklistItems.length}
            readinessPercent={readinessPercent}
            toggleItem={toggleItem}
          />
        ),
      }}
      quiz={{
        label: content.common.quizTab,
        title: content.modules.setup.quizTitle,
        titleAs: 'h2',
        quizzes: content.quizzes.setup,
      }}
      tips={{
        label: content.common.tipsTab,
        title: content.modules.setup.title,
        titleAs: 'h2',
        tips: content.modules.setup.tips,
      }}
    />
  );
}
