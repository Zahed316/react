import { QuizBlock } from './QuizBlock';
import { LessonSection } from './LessonSection';

function renderFooterContent(content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return <p className="quiet">{content}</p>;
  }

  return content;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toFiniteNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function QuizPanel({
  label,
  title,
  titleAs = 'h3',
  description,
  quizzes = [],
  solvedCount,
  progressValue,
  totalCount,
  progressMax,
  footer,
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Quiz';
  const hasProgress = progressValue != null || solvedCount != null;
  const resolvedValue = hasProgress ? (progressValue ?? solvedCount ?? 0) : null;
  const resolvedMax = hasProgress
    ? (progressMax ?? totalCount ?? (quizzes.length > 0 ? quizzes.length : 100))
    : null;
  const safeMax = hasProgress
    ? clamp(Math.round(toFiniteNumber(resolvedMax, 100)), 1, Number.MAX_SAFE_INTEGER)
    : null;
  const safeValue = hasProgress
    ? clamp(Math.round(toFiniteNumber(resolvedValue, 0)), 0, safeMax)
    : null;
  const percent = hasProgress ? clamp(Math.round((safeValue / safeMax) * 100), 0, 100) : null;
  const progressText = hasProgress ? `${safeValue}/${safeMax}` : null;
  const progressLabel = hasProgress ? `${label ?? resolvedTitle} progress` : null;

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      titleAs={titleAs}
      lead={description}
      className={className}
    >
      {hasProgress ? (
        <div className="stack">
          <div className="progress-copy">
            <strong>{progressLabel}</strong>
            <span>{progressText}</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label={progressLabel}
            aria-valuemin={0}
            aria-valuemax={safeMax}
            aria-valuenow={safeValue}
            aria-valuetext={`${safeValue} of ${safeMax} solved`}
          >
            <div className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
        </div>
      ) : null}

      <div className="stack">
        {quizzes.map((quiz, index) => {
          const key = quiz.id ?? quiz.title ?? index;
          return <QuizBlock key={key} {...quiz} />;
        })}
      </div>

      {renderFooterContent(footer)}
    </LessonSection>
  );
}
