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

  return mistake;
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
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Common mistakes';

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
        {mistakes.map((mistake, index) => {
          const item = normalizeMistake(mistake);
          const key = item.id ?? item.title ?? index;

          return (
            <li key={key} className="story-card" style={mistakeCardStyle}>
              <div style={{ display: 'grid', gap: 8, minWidth: 0 }}>
                <span className="pill" style={mistakeBadgeStyle}>
                  Common mistake
                </span>
                <strong>{renderInlineText(item.title)}</strong>
              </div>

              {item.explanation ? <p>{renderInlineText(item.explanation)}</p> : null}

              {item.fix ? (
                <p>
                  <strong>Fix:</strong> {renderInlineText(item.fix)}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </LessonSection>
  );
}
