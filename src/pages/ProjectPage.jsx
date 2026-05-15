import { QuizBlock } from '../components/QuizBlock';
import { LessonPageShell } from '../components/LessonPageShell';
import { LessonTabs } from '../components/LessonTabs';
import { TaskManagerLab } from '../features/taskManager/TaskManagerLab';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLearningProgress } from '../context/LearningProgressContext';

export function ProjectPage() {
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();

  const tabs = [
    {
      id: 'summary',
      label: content.common.summaryTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.modules.project.stageLabel}</span>
            <h2>{content.modules.project.title}</h2>
          </div>
          <p className="quiet">{content.modules.project.summary.intro}</p>
          <ul className="bullet-list">
            {content.modules.project.summary.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      ),
    },
    {
      id: 'live',
      label: content.common.liveTab,
      content: <TaskManagerLab />, 
    },
    {
      id: 'quiz',
      label: content.common.quizTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.quizTab}</span>
            <h2>{content.modules.project.quizTitle}</h2>
          </div>
          <div className="stack">
            {content.quizzes.project.map((question) => (
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
            <h2>{content.modules.project.title}</h2>
          </div>
          <ul className="bullet-list bullet-list-compact">
            {content.modules.project.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      ),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={content.modules.project.hero.eyebrow}
      title={content.modules.project.hero.title}
      lead={content.modules.project.hero.lead}
      primaryActionLabel={content.modules.project.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('project')}
    >
      <LessonTabs tabs={tabs} ariaLabel={content.modules.project.title} />
    </LessonPageShell>
  );
}