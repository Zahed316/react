import { Link } from 'react-router-dom';

export function LessonPageShell({
  eyebrow,
  title,
  lead,
  primaryActionLabel,
  onPrimaryAction,
  primaryDisabled = false,
  secondaryActionLabel,
  secondaryActionTo,
  children,
}) {
  return (
    <div className="page-stack lesson-page">
      <section className="surface lesson-hero">
        <div className="lesson-hero-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="lead">{lead}</p>

          <div className="hero-actions">
            <button
              type="button"
              className="primary-button"
              onClick={onPrimaryAction}
              disabled={primaryDisabled}
            >
              {primaryActionLabel}
            </button>
            {secondaryActionLabel && secondaryActionTo ? (
              <Link className="secondary-button" to={secondaryActionTo}>
                {secondaryActionLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}
