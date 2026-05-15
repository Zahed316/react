import { Link } from 'react-router-dom';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

function questDoneLabel(done, common) {
  return done ? common.done : common.pending;
}

export function HomePage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const {
    badgeDefinitions,
    completedSet,
    completedCount,
    level,
    nextBadge,
    progressPercent,
    solvedQuizCount,
    streakDays,
    unlockedBadges,
    xp,
    xpToNextLevel,
  } = useLearningProgress();

  const nextModule =
    content.learningModules.find((module) => !completedSet.has(module.id)) ??
    content.learningModules[content.learningModules.length - 1];
  const allModulesComplete = content.learningModules.every((module) => completedSet.has(module.id));
  const heroTargetPath = allModulesComplete
    ? localizedPath(language, '/')
    : localizedPath(language, nextModule.path);
  const heroActionLabel = allModulesComplete
    ? content.common.backHome
    : content.home.hero.primaryAction.replace('{stage}', nextModule.stageLabel);

  const quests = content.homeQuests.map((quest) => {
    if (quest.id === 'quiz') {
      return {
        ...quest,
        done: solvedQuizCount >= 2,
        link: localizedPath(language, '/js'),
        description: `${quest.description} (${solvedQuizCount}/2)`,
      };
    }

    const module = content.modules[quest.moduleId];

    return {
      ...quest,
      done: quest.id === 'project' ? completedSet.has('project') : completedSet.has(quest.moduleId),
      link: localizedPath(language, module?.path ?? '/'),
    };
  });

  const visibleBadges = unlockedBadges.slice(0, 4).map((badge) => ({
    ...badge,
    ...(content.badges[badge.id] ?? {}),
  }));
  const lockedBadges = badgeDefinitions
    .filter((badge) => !unlockedBadges.some((unlockedBadge) => unlockedBadge.id === badge.id))
    .map((badge) => ({ ...badge, ...(content.badges[badge.id] ?? {}) }));
  const nextBadgeCopy = nextBadge ? (content.badges[nextBadge.id] ?? nextBadge) : null;

  return (
    <div className="page-stack">
      <section className="hero surface">
        <div className="hero-copy">
          <span className="eyebrow">{content.home.hero.eyebrow}</span>
          <h1>{content.home.hero.title}</h1>
          <p className="lead">{content.home.hero.lead}</p>

          <div className="hero-actions">
            <Link className="primary-button" to={heroTargetPath}>
              {heroActionLabel}
            </Link>
            <a className="secondary-button" href="#quests">
              {content.home.hero.secondaryAction}
            </a>
          </div>

          <div className="stats-row">
            <article className="stat-card">
              <span>{content.common.level}</span>
              <strong>{level}</strong>
            </article>
            <article className="stat-card">
              <span>{content.common.xp}</span>
              <strong>{xp}</strong>
            </article>
            <article className="stat-card">
              <span>{content.common.streak}</span>
              <strong>
                {streakDays} {content.common.daysUnit}
              </strong>
            </article>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-copy">
            <span className="eyebrow">{content.home.moduleIntro.eyebrow}</span>
            <h2>{content.home.moduleIntro.title}</h2>
            <p>{content.home.moduleIntro.lead}</p>
          </div>

          <div className="flow-list">
            {content.home.sessionFlow.map((item, index) => (
              <article className="flow-item" key={item.title}>
                <span className="flow-index">{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="level-card">
            <div>
              <span className="eyebrow">{content.common.toNextLevel}</span>
              <strong>{xpToNextLevel} XP</strong>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${xp % 100}%` }} />
            </div>
          </div>
        </aside>
      </section>

      <section className="surface summary-strip">
        <article>
          <span>{content.home.summaryLabels.modules}</span>
          <strong>
            {completedCount}/{content.learningModules.length}
          </strong>
        </article>
        <article>
          <span>{content.home.summaryLabels.quizzes}</span>
          <strong>{solvedQuizCount}</strong>
        </article>
        <article>
          <span>{content.home.summaryLabels.badges}</span>
          <strong>{unlockedBadges.length}</strong>
        </article>
        <article>
          <span>{content.home.summaryLabels.progress}</span>
          <strong>{progressPercent}%</strong>
        </article>
      </section>

      <section className="surface quest-board" id="quests">
        <div className="section-heading">
          <span className="eyebrow">{content.home.moduleIntro.eyebrow}</span>
          <h2>{content.home.moduleIntro.title}</h2>
        </div>

        <div className="quest-grid">
          {quests.map((quest) => (
            <article key={quest.id} className={`quest-card${quest.done ? ' quest-card-done' : ''}`}>
              <div className="quest-card-top">
                <span className="pill">{questDoneLabel(quest.done, content.common)}</span>
                <span className="quest-reward">+{quest.reward} XP</span>
              </div>
              <h3>{quest.title}</h3>
              <p>{quest.id === 'quiz' ? quest.description : quest.description}</p>
              <Link className="text-button" to={quest.link}>
                {content.common.openModule}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="module-grid" id="modules">
        {content.learningModules.map((module) => {
          const completed = completedSet.has(module.id);

          return (
            <article
              key={module.id}
              className={`surface module-card${completed ? ' module-card-complete' : ''}`}
              style={{ '--module-accent': module.accent }}
            >
              <span className="module-stage">{module.stageLabel}</span>
              <h2>{module.title}</h2>
              <p>{module.summary.intro}</p>
              <ul className="bullet-list">
                {module.summary.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="module-card-footer">
                <Link className="text-button" to={localizedPath(language, module.path)}>
                  {content.common.openModule}
                </Link>
                <span className="pill">
                  {completed ? content.common.done : content.common.pending}
                </span>
              </div>
            </article>
          );
        })}
      </section>

      <section className="surface badge-gallery">
        <div className="section-heading">
          <span className="eyebrow">{content.home.coachNote.eyebrow}</span>
          <h2>{content.home.coachNote.title}</h2>
        </div>

        <div className="badge-grid">
          {visibleBadges.map((badge) => (
            <article className="badge-card badge-card-unlocked" key={badge.id}>
              <span className="badge-icon">{badge.icon}</span>
              <strong>{badge.title}</strong>
              <p>{badge.description}</p>
            </article>
          ))}

          {lockedBadges.slice(0, 2).map((badge) => (
            <article className="badge-card" key={badge.id}>
              <span className="badge-icon badge-icon-locked">{badge.icon}</span>
              <strong>{badge.title}</strong>
              <p>{badge.description}</p>
            </article>
          ))}
        </div>

        <div className="next-badge">
          <span className="eyebrow">{content.common.targetNext}</span>
          <div>
            <strong>{nextBadgeCopy ? nextBadgeCopy.title : content.common.noBadge}</strong>
            <p>{nextBadgeCopy ? nextBadgeCopy.description : content.home.coachNote.asideBody}</p>
          </div>
        </div>
      </section>

      <section className="surface coach-note">
        <div>
          <span className="eyebrow">{content.home.coachNote.eyebrow}</span>
          <h2>{content.home.coachNote.title}</h2>
          <p>{content.home.coachNote.body}</p>
        </div>
        <div className="coach-note-aside">
          <strong>{content.home.coachNote.asideTitle}</strong>
          <p>{content.home.coachNote.asideBody}</p>
          <Link className="primary-button" to={heroTargetPath}>
            {allModulesComplete ? content.common.backHome : content.common.continueLesson}
          </Link>
        </div>
      </section>
    </div>
  );
}
