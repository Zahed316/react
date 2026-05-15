import { Link } from 'react-router-dom';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();

  return (
    <section className="surface page-hero not-found">
      <span className="eyebrow">404</span>
      <h1>{content.common.notFoundTitle}</h1>
      <p className="lead">{content.common.notFoundBody}</p>
      <Link className="primary-button" to={localizedPath(language, '/')}>
        {content.common.backHome}
      </Link>
    </section>
  );
}
