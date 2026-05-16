import { LessonSection } from './LessonSection';

const mistakeCardStyle = {
  border: '1px solid rgba(249, 115, 22, 0.14)',
  background: 'rgba(249, 115, 22, 0.06)',
};

const mistakeBadgeStyle = {
  background: 'rgba(249, 115, 22, 0.12)',
  color: '#b45309',
};

function normalizeMistake(mistake) {
  if (typeof mistake === 'string') {
    return { title: mistake };
  }

  if (mistake && typeof mistake === 'object') {
    const title = mistake.title ?? mistake.label ?? mistake.text;
    const explanation = mistake.explanation ?? mistake.detail ?? mistake.body;
    const fix = mistake.fix ?? mistake.solution ?? mistake.action;

    if (title || explanation || fix) {
      return {
        ...mistake,
        title,
        explanation,
        fix,
      };
    }
  }

  return null;
}

function renderInlineText(content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return content;
  }

  return content;
}

export function MistakeList({
  label,
  title,
  titleAs = 'h3',
  description,
  mistakes = [],
  mistakeLabel = 'Common mistake',
  fixLabel = 'Fix',
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Common mistakes';
  const normalizedMistakes = mistakes.map(normalizeMistake).filter(Boolean);

  if (normalizedMistakes.length === 0) {
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
      <ul className="stack" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {normalizedMistakes.map((item, index) => {
          const key = item.id ?? item.title ?? index;
          const itemTitle = item.title ?? item.label ?? item.text ?? 'Common mistake';

          return (
            <li key={key} className="story-card" style={mistakeCardStyle}>
              <div style={{ display: 'grid', gap: 8, minWidth: 0 }}>
                <span className="pill" style={mistakeBadgeStyle}>
                  {mistakeLabel}
                </span>
                <strong>{renderInlineText(itemTitle)}</strong>
              </div>

              {item.explanation ? <p>{renderInlineText(item.explanation)}</p> : null}

              {item.fix ? (
                <p>
                  <strong>{fixLabel}:</strong> {renderInlineText(item.fix)}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </LessonSection>
  );
}
