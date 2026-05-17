import { loadLocalizedCourseContent } from '../data/course';
import { useLanguage } from '../context/LanguageContext';

export function useCourseContent() {
  const { language } = useLanguage();

  return loadLocalizedCourseContent(language);
}
