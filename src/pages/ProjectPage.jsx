import { LessonTemplate } from '../components/LessonTemplate';
import { QuizBlock } from '../components/QuizBlock';
import { TaskManagerLab } from '../features/taskManager/TaskManagerLab';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLearningProgress } from '../context/LearningProgressContext';

export function ProjectPage() {
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();

  const lesson = {
    hero: content.modules.project.hero,
    tabs: {
      summary: content.common.summaryTab,
      live: content.common.liveTab,
      quiz: content.common.quizTab,
      tips: content.common.tipsTab,
      ariaLabel: content.modules.project.title,
    },
  };

  const renderSummary = () => (
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
  );

  const renderLive = () => <TaskManagerLab />;

  const renderQuiz = () => (
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
  );

  const renderTips = () => (
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
  );

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={content.modules.project.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('project')}
      secondaryActionLabel={content.modules.project.hero.secondaryAction}
      renderSummary={renderSummary}
      renderLive={renderLive}
      renderQuiz={renderQuiz}
      renderTips={renderTips}
    />
  );
}
