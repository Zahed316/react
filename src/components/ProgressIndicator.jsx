import { useId } from 'react';
import { LessonSection } from './LessonSection';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toFiniteNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function renderStatus(status, statusId) {
  if (!status) {
    return null;
  }

  if (typeof status === 'string') {
    return (
      <p className="quiet" id={statusId}>
        {status}
      </p>
    );
  }

  return <div id={statusId}>{status}</div>;
}

export function ProgressIndicator({
  label,
  description,
  value = 0,
  max = 100,
  status,
  showPercent = false,
  titleAs = 'h3',
  className = '',
  ...sectionProps
}) {
  const resolvedLabel = label ?? 'Progress';
  const statusId = useId();
  const safeMax = clamp(Math.round(toFiniteNumber(max, 100)), 1, Number.MAX_SAFE_INTEGER);
  const safeValue = clamp(Math.round(toFiniteNumber(value, 0)), 0, safeMax);
  const percent = clamp(Math.round((safeValue / safeMax) * 100), 0, 100);
  const displayValue = showPercent ? `${percent}%` : `${safeValue}/${safeMax}`;
  const statusText = typeof status === 'string' ? status : null;
  const ariaValueText = statusText
    ? `${showPercent ? `${percent}% complete` : `${safeValue} of ${safeMax} complete`}. ${statusText}`
    : showPercent
      ? `${percent}% complete`
      : `${safeValue} of ${safeMax} complete`;

  return (
    <LessonSection
      {...sectionProps}
      title={resolvedLabel}
      titleAs={titleAs}
      lead={description}
      className={className}
    >
      <div className="stack">
        <div className="progress-copy">
          <strong>{displayValue}</strong>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label={resolvedLabel}
          aria-valuemin={0}
          aria-valuemax={safeMax}
          aria-valuenow={safeValue}
          aria-valuetext={ariaValueText}
          aria-describedby={status ? statusId : undefined}
        >
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>

      {renderStatus(status, statusId)}
    </LessonSection>
  );
}
