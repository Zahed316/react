import { LessonSection } from './LessonSection';

function renderNotes(notes) {
  if (!notes) {
    return null;
  }

  if (typeof notes === 'string') {
    return <p className="quiet">{notes}</p>;
  }

  return notes;
}

export function CodeExampleBlock({
  label,
  title,
  titleAs = 'h3',
  description,
  languageLabel,
  codeLanguage,
  code,
  notes,
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? languageLabel ?? 'Code example';

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      titleAs={titleAs}
      lead={description}
      footer={renderNotes(notes)}
      className={className}
    >
      <article className="code-card" dir="ltr">
        {languageLabel ? <strong>{languageLabel}</strong> : null}
        <pre dir="ltr" lang={codeLanguage ?? undefined} translate="no">
          <code>{code}</code>
        </pre>
      </article>
    </LessonSection>
  );
}
