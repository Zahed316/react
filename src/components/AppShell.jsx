import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { learningModules } from '../data/course';
import { getLocaleFromPathname } from '../context/languageUtils';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';
import { PsychCoachPanel } from './PsychCoachPanel';

function getActiveModuleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const strippedPath =
    segments.length > 0 && getLocaleFromPathname(pathname)
      ? `/${segments.slice(1).join('/')}`
      : pathname;

  if (strippedPath === '/' || strippedPath === '') {
    return 'home';
  }

  const match = learningModules.find((module) => strippedPath.startsWith(module.path));
  return match ? match.id : 'home';
}

export function AppShell() {
  const location = useLocation();
  const { language, localizedPath, availableLanguages, changeLanguage } = useLanguage();
  const content = useCourseContent();
  const {
    completedCount,
    completedSet,
    currentModuleId,
    level,
    nextBadge,
    progressPercent,
    resetProgress,
    setCurrentModuleId,
    streakDays,
    totalCount,
    unlockedBadges,
    xp,
    xpIntoLevel,
    xpToNextLevel,
  } = useLearningProgress();

  useEffect(() => {
    setCurrentModuleId(getActiveModuleFromPath(location.pathname));
  }, [location.pathname, setCurrentModuleId]);

  const activeModule =
    currentModuleId === 'home' ? null : (content.modules[currentModuleId] ?? null);
  const nextModule =
    content.learningModules.find((module) => !completedSet.has(module.id)) ??
    content.learningModules[content.learningModules.length - 1] ??
    null;
  const allModulesComplete = content.learningModules.every((module) => completedSet.has(module.id));
  const footerTargetPath = allModulesComplete
    ? localizedPath(language, '/')
    : localizedPath(language, nextModule?.path ?? '/');
  const footerModuleTitle = allModulesComplete
    ? content.common.home
    : (nextModule?.title ?? content.common.home);
  const footerActionLabel = allModulesComplete
    ? content.common.backHome
    : content.common.continueLesson;
  const badgePreview = unlockedBadges.slice(0, 3).map((badge) => content.badges[badge.id] ?? badge);
  const nextBadgeCopy = nextBadge ? (content.badges[nextBadge.id] ?? nextBadge) : null;

  return (
    <div className="app-shell">
      <div className="page-noise" aria-hidden="true" />

      <header className="topbar surface">
        <Link to={localizedPath(language, '/')} className="brand">
          <span className="brand-mark">R</span>
          <span>
            <strong>{content.common.appName}</strong>
            <small>{content.common.appSubtitle}</small>
          </span>
        </Link>

        <nav className="topnav" aria-label={content.common.navigationAria}>
          {content.navigationItems.map((item) => (
            <NavLink
              key={item.id}
              to={localizedPath(language, item.path)}
              className={({ isActive }) => `navlink${isActive ? ' navlink-active' : ''}`}
            >
              {item.navLabel}
            </NavLink>
          ))}
        </nav>

        <div className="progress-card player-card">
          <div className="language-switcher" aria-label={content.common.languageAria}>
            {availableLanguages.map((entry) => (
              <button
                key={entry.code}
                type="button"
                className={entry.code === language ? 'pill pill-active' : 'pill'}
                aria-pressed={entry.code === language}
                onClick={() => changeLanguage(entry.code)}
              >
                {entry.label}
              </button>
            ))}
          </div>

          <div className="player-stat-grid">
            <article className="player-stat">
              <span>{content.common.level}</span>
              <strong>{level}</strong>
            </article>
            <article className="player-stat">
              <span>{content.common.xp}</span>
              <strong>{xp}</strong>
            </article>
            <article className="player-stat">
              <span>{content.common.streak}</span>
              <strong>
                {streakDays} {content.common.daysUnit}
              </strong>
            </article>
          </div>

          <div className="progress-copy">
            <span>{content.common.toNextLevel}</span>
            <strong>{xpToNextLevel} XP</strong>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${xpIntoLevel}%` }} />
          </div>

          <div className="badge-strip" aria-label={content.common.targetNext}>
            {badgePreview.length > 0 ? (
              badgePreview.map((badge) => (
                <span className="badge-chip" key={badge.id}>
                  {badge.icon} {badge.title}
                </span>
              ))
            ) : (
              <span className="badge-chip badge-chip-muted">{content.common.noBadge}</span>
            )}
            {nextBadgeCopy ? (
              <span className="badge-chip badge-chip-locked">
                {content.common.nextBadge.replace('{title}', nextBadgeCopy.title)}
              </span>
            ) : null}
          </div>
        </div>
      </header>

      <section className="surface mini-progress-strip">
        <article>
          <span>{content.common.modulesComplete}</span>
          <strong>
            {completedCount}/{totalCount}
          </strong>
        </article>
        <article>
          <span>{content.common.currentModule}</span>
          <strong>{activeModule ? activeModule.title : content.common.home}</strong>
        </article>
        <article>
          <span>{content.common.overallProgress}</span>
          <strong>{progressPercent}%</strong>
        </article>
        <button type="button" className="ghost-button" onClick={resetProgress}>
          {content.common.resetAll}
        </button>
      </section>

      <PsychCoachPanel />

      <main className="page-shell">
        <Outlet />
      </main>

      <footer className="footer surface">
        <div>
          <strong>{content.common.nextSession}</strong>
          <p>{footerModuleTitle}</p>
          <Link className="text-button" to={footerTargetPath}>
            {footerActionLabel}
          </Link>
        </div>
        <div>
          <strong>{content.common.method}</strong>
          <p>{content.home.sessionFlow[0].description}</p>
        </div>
      </footer>
    </div>
  );
}
