import { LessonSection } from './LessonSection';

function renderSupportLine(label, content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return (
      <p className="quiet">
        <strong>{label}:</strong> {content}
      </p>
    );
  }

  return content;
}

function renderFooterContent(content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return <p className="quiet">{content}</p>;
  }

  return content;
}

export function PracticePrompt({
  label,
  title,
  titleAs = 'h3',
  prompt,
  hint,
  expectedOutcome,
  hintLabel = 'Hint',
  expectedOutcomeLabel = 'Expected outcome',
  actions,
  footer,
  className = '',
  ...sectionProps
}) {
  if (prompt == null || prompt === '') {
    return null;
  }

  const resolvedTitle = title ?? 'Practice prompt';
  const footerContent = [
    renderSupportLine(hintLabel, hint),
    renderSupportLine(expectedOutcomeLabel, expectedOutcome),
    renderFooterContent(footer),
  ].filter(Boolean);

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      titleAs={titleAs}
      lead={prompt}
      actions={actions}
      footer={
        footerContent.length > 0 ? (
          <div className="stack">
            {footerContent.map((item, index) => (
              <div key={`${index}-${typeof item === 'string' ? item : 'node'}`}>{item}</div>
            ))}
          </div>
        ) : null
      }
      className={className}
    />
  );
}
