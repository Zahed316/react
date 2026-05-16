import { useId } from 'react';

export function LessonSection({
  eyebrow,
  title,
  titleAs: TitleTag = 'h2',
  lead,
  actions,
  footer,
  children,
  className = '',
  ...sectionProps
}) {
  const baseId = useId();
  const titleId = `${baseId}-title`;
  const leadId = lead ? `${baseId}-lead` : undefined;

  return (
    <section
      {...sectionProps}
      className={`surface lesson-subpanel${className ? ` ${className}` : ''}`}
      aria-labelledby={titleId}
      aria-describedby={leadId}
    >
      <header className="section-heading">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <TitleTag id={titleId}>{title}</TitleTag>
      </header>

      {lead ? (
        <p className="lead" id={leadId}>
          {lead}
        </p>
      ) : null}

      {actions ? <div className="hero-actions">{actions}</div> : null}

      {children}

      {footer ? <footer className="stack">{footer}</footer> : null}
    </section>
  );
}
