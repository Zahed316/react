import { LessonSection } from './LessonSection';

function normalizeSteps(steps) {
  if (!Array.isArray(steps)) {
    return [];
  }

  return steps
    .map((step) => {
      if (typeof step === 'string') {
        return { title: step };
      }

      if (step && typeof step === 'object') {
        return step;
      }

      return null;
    })
    .filter((step) => Boolean(step && (step.title || step.description || step.detail)));
}

function renderStepBody(body) {
  if (!body) {
    return null;
  }

  if (typeof body === 'string') {
    return <p className="quiet">{body}</p>;
  }

  return body;
}

export function SimulationSteps({
  label,
  title,
  titleAs = 'h3',
  description,
  steps = [],
  activeStepId = null,
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Simulation steps';
  const normalizedSteps = normalizeSteps(steps);

  if (normalizedSteps.length === 0) {
    return null;
  }

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      titleAs={titleAs}
      lead={description}
      className={className}
    >
      <ol className="flow-list" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {normalizedSteps.map((step, index) => {
          const isActive = activeStepId != null && step.id === activeStepId;
          const stepKey = step.id ?? step.title ?? index;
          const stepTitle = step.title ?? step.label ?? step.heading ?? `Step ${index + 1}`;

          return (
            <li
              key={stepKey}
              className="flow-item"
              aria-current={isActive ? 'step' : undefined}
              style={
                isActive
                  ? {
                      border: '1px solid rgba(37, 99, 235, 0.18)',
                      background: 'rgba(37, 99, 235, 0.08)',
                    }
                  : undefined
              }
            >
              <span className="flow-index">{index + 1}</span>
              <div style={{ minWidth: 0 }}>
                <strong>{stepTitle}</strong>
                {step.description ? <p>{step.description}</p> : null}
                {renderStepBody(step.detail)}
              </div>
            </li>
          );
        })}
      </ol>
    </LessonSection>
  );
}
