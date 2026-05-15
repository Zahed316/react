import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';
import { defaultLocale, supportedLocales } from '../data/courseManifest';

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: defaultLocale,
  supportedLngs: supportedLocales,
  defaultNS: 'common',
  ns: ['common', 'course'],
  interpolation: {
    escapeValue: false,
  },
  load: 'languageOnly',
  react: {
    useSuspense: false,
  },
});

export default i18n;
