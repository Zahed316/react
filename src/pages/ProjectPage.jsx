import { LessonTemplate } from '../components/LessonTemplate';
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

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={content.modules.project.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('project')}
      secondaryActionLabel={content.modules.project.hero.secondaryAction}
      summary={{
        label: content.modules.project.stageLabel,
        title: content.modules.project.title,
        titleAs: 'h2',
        intro: content.modules.project.summary.intro,
        learningGoals: content.modules.project.summary.points,
      }}
      renderLive={() => <TaskManagerLab />}
      quiz={{
        label: content.common.quizTab,
        title: content.modules.project.quizTitle,
        titleAs: 'h2',
        quizzes: content.quizzes.project,
      }}
      tips={{
        label: content.common.tipsTab,
        title: content.modules.project.title,
        titleAs: 'h2',
        tips: content.modules.project.tips,
      }}
    />
  );
}
