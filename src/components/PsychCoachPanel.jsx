import { Link } from 'react-router-dom';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';
import { getCoachState } from '../utils/getCoachState';

function formatTemplate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}

export function PsychCoachPanel() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const progress = useLearningProgress();
  const coachState = getCoachState({
    ...progress,
    moduleIds: content.learningModules.map((module) => module.id),
  });
  const coachCopy = content.coach[coachState.state];
  const focusModule = content.modules[coachState.focusModuleId];
  const targetPath =
    coachState.state === 'celebration'
      ? localizedPath(language, '/')
      : localizedPath(language, focusModule?.path ?? '/');
  const ctaLabel =
    coachState.state === 'celebration'
      ? coachCopy.cta
      : formatTemplate(coachCopy.cta, {
          title: focusModule?.title ?? content.common.home,
        });

  return (
    <section className="surface coach-panel" aria-live="polite">
      <div className="coach-panel-copy">
        <span className="eyebrow">{content.common.coach}</span>
        <h3>{coachCopy.title}</h3>
        <p>{coachCopy.body}</p>
      </div>

      <div className="coach-panel-meta">
        <p className="coach-goal">
          <strong>{content.common.nextGoal}</strong>
          <span>{coachCopy.microGoal}</span>
        </p>
        {focusModule ? <span className="pill coach-focus-pill">{focusModule.title}</span> : null}
        <Link className="primary-button coach-cta" to={targetPath}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
