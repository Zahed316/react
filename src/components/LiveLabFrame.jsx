import { LessonSection } from './LessonSection';

function renderSupportContent(content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return <p className="quiet">{content}</p>;
  }

  return content;
}

export function LiveLabFrame({
  label,
  title,
  titleAs = 'h2',
  description,
  guidance,
  stateNote,
  actions,
  footer,
  children,
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Live lab';
  const guidanceContent = renderSupportContent(guidance);
  const stateNoteContent = renderSupportContent(stateNote);

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      titleAs={titleAs}
      lead={description}
      actions={actions}
      footer={renderSupportContent(footer)}
      className={`lab-panel${className ? ` ${className}` : ''}`}
    >
      <div className="stack">
        {guidanceContent ? <article className="story-card">{guidanceContent}</article> : null}

        {stateNoteContent ? (
          <aside className="coach-note-aside" role="note">
            {stateNoteContent}
          </aside>
        ) : null}

        {children ? <div className="stack">{children}</div> : null}
      </div>
    </LessonSection>
  );
}
