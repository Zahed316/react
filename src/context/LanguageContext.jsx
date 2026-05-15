/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import i18n from '../i18n/i18n';
import { defaultLocale, supportedLocales } from '../data/courseManifest';
import { useLocalStorageState } from '../hooks/useLocalStorageState';
import {
  availableLanguages,
  getLocaleFromPathname,
  stripLocaleFromPathname,
} from './languageUtils';

const LanguageContext = createContext(null);

const LANGUAGE_STORAGE_KEY = 'react-lab.language.v3';

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathLocale = getLocaleFromPathname(location.pathname);
  const [language, setLanguage] = useLocalStorageState(LANGUAGE_STORAGE_KEY, defaultLocale);

  useEffect(() => {
    if (pathLocale && pathLocale !== language) {
      setLanguage(pathLocale);
    }
  }, [language, pathLocale, setLanguage]);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  function localizedPath(locale, path = location.pathname) {
    const normalizedLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
    const strippedPath = stripLocaleFromPathname(path);

    if (strippedPath === '/' || strippedPath === '') {
      return `/${normalizedLocale}`;
    }

    return `/${normalizedLocale}${strippedPath}`;
  }

  function changeLanguage(nextLocale) {
    if (!supportedLocales.includes(nextLocale)) {
      return;
    }

    const nextPath = localizedPath(nextLocale);
    setLanguage(nextLocale);
    i18n.changeLanguage(nextLocale);
    navigate(`${nextPath}${location.search}${location.hash}`, { replace: true });
  }

  const value = {
    availableLanguages,
    changeLanguage,
    dir: language === 'fa' ? 'rtl' : 'ltr',
    lang: language,
    language,
    localizedPath,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
