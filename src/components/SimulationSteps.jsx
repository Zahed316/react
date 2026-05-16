import { LessonSection } from './LessonSection';

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
        {steps.map((step, index) => {
          const isActive = activeStepId != null && step.id === activeStepId;
          const stepKey = step.id ?? step.title ?? index;

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
                <strong>{step.title}</strong>
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
