import { supportedLocales } from '../data/courseManifest';

export const availableLanguages = [
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'en', label: 'English', dir: 'ltr' },
];

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getLocaleFromPathname(pathname) {
  const segments = normalizePathname(pathname).split('/').filter(Boolean);

  const locale = segments[0];
  return supportedLocales.includes(locale) ? locale : null;
}

export function stripLocaleFromPathname(pathname) {
  const segments = normalizePathname(pathname).split('/').filter(Boolean);

  if (segments.length > 0 && supportedLocales.includes(segments[0])) {
    return `/${segments.slice(1).join('/')}`;
  }

  return normalizePathname(pathname);
}