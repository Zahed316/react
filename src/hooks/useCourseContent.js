import { useMemo } from 'react';
import { getLocalizedCourseContent } from '../data/course';
import { useLanguage } from '../context/LanguageContext';

export function useCourseContent() {
  const { language } = useLanguage();

  return useMemo(() => getLocalizedCourseContent(language), [language]);
}