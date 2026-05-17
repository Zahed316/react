import { useState } from 'react';
import { LessonTemplate } from '../components/LessonTemplate';
import { LessonSection } from '../components/LessonSection';
import { LiveLabFrame } from '../components/LiveLabFrame';
import { SummaryPanel } from '../components/SummaryPanel';
import { DeepDivePanel } from '../components/deepLesson';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';
import { defaultLocale, supportedLocales } from '../data/courseManifest';

const ROUTE_SAMPLES = [
  '/fa/react',
  '/fa/events-forms',
  '/fa/effects',
  '/fa/routing',
  '/en/routing',
  '/en/project',
  '/fa/unknown',
  '/de/react',
];

const ROUTING_TOPIC_ORDER = [
  'client-routing',
  'routes-pages',
  'links-navigation',
  'localized-routes',
  'fallback-routes',
];

function normalizeExplorerPath(value) {
  const rawValue = String(value ?? '').trim();

  if (!rawValue) {
    return '/';
  }

  const withoutQuery = rawValue.split(/[?#]/)[0];
  const withLeadingSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
  const normalized = withLeadingSlash.replace(/\/{2,}/g, '/').replace(/\/+$/, '');

  return normalized || '/';
}

function renderCodeCard(title, code) {
  return (
    <article className="code-card" dir="ltr">
      <strong>{title}</strong>
      <pre dir="ltr" lang="en" translate="no">
        <code>{code}</code>
      </pre>
    </article>
  );
}

function renderRoutingTopicDetail(topic, detailCopy) {
  return (
    <div className="stack">
      <article className="tool-spotlight" style={{ '--tool-accent': topic.accent ?? '#0ea5e9' }}>
        <div className="tool-spotlight-header">
          <span className="pill">{topic.badge}</span>
          <span className="tool-glow" aria-hidden="true" />
        </div>
        <h3>{topic.title}</h3>
        <p>{topic.summary}</p>
      </article>

      <section className="split-layout">
        <LessonSection
          eyebrow={detailCopy.sections.definition}
          title={topic.title}
          titleAs="h3"
          lead={topic.definition}
        />

        <LessonSection
          eyebrow={detailCopy.sections.whyExists}
          title={topic.title}
          titleAs="h3"
          lead={topic.whyExists}
        />
      </section>

      <LessonSection
        eyebrow={detailCopy.sections.problem}
        title={topic.title}
        titleAs="h3"
        lead={topic.problem}
      />

      <LessonSection eyebrow={detailCopy.sections.howItWorks} title={topic.title} titleAs="h3">
        <div className="tool-story-grid">
          {topic.howItWorks.map((item) => (
            <article className="story-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </LessonSection>

      <LessonSection
        eyebrow={detailCopy.sections.simulation}
        title={topic.title}
        titleAs="h3"
        lead={detailCopy.simulationIntro}
      >
        <div className="tool-story-grid">
          {topic.simulation.map((step, index) => (
            <article className="story-card" key={step.title}>
              <strong>
                {index + 1}. {step.title}
              </strong>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </LessonSection>

      <LessonSection eyebrow={detailCopy.sections.example} title={topic.example.title} titleAs="h3">
        <div className="code-grid">
          {renderCodeCard(topic.example.title, topic.example.code)}
          <article className="story-card">
            <strong>{topic.title}</strong>
            <p>{topic.example.explanation}</p>
          </article>
        </div>
      </LessonSection>

      <LessonSection eyebrow={detailCopy.sections.beforeAfter} title={topic.title} titleAs="h3">
        <div className="code-grid">
          {renderCodeCard(detailCopy.beforeLabel, topic.comparison.before)}
          {renderCodeCard(detailCopy.afterLabel, topic.comparison.after)}
        </div>
        <article className="story-card">
          <p>{topic.comparison.takeaway}</p>
        </article>
      </LessonSection>

      <section className="split-layout">
        <LessonSection eyebrow={detailCopy.sections.mistakes} title={topic.title} titleAs="h3">
          <ul className="bullet-list">
            {topic.mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </LessonSection>

        <LessonSection eyebrow={detailCopy.sections.usage} title={topic.title} titleAs="h3">
          <ul className="bullet-list">
            {topic.realUsage.map((usage) => (
              <li key={usage}>{usage}</li>
            ))}
          </ul>
        </LessonSection>
      </section>

      <section className="split-layout">
        <LessonSection
          eyebrow={detailCopy.sections.practice}
          title={detailCopy.practiceQuestion}
          titleAs="h3"
          lead={topic.practice.question}
        />

        <LessonSection
          eyebrow={detailCopy.sections.practice}
          title={detailCopy.practiceTask}
          titleAs="h3"
          lead={topic.practice.task}
        />
      </section>

      <LessonSection eyebrow={detailCopy.sections.summary} title={topic.title} titleAs="h3">
        <ul className="bullet-list">
          {topic.summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </LessonSection>
    </div>
  );
}

function RouteExplorerLab({ content, localizedPath, selectedPath, onSelectPath }) {
  const labels = content.modules.routing.live.labels;
  const statusCopy = content.modules.routing.live.status;
  const statusDescriptions = content.modules.routing.live.statusDescriptions;
  const normalizedPath = normalizeExplorerPath(selectedPath);
  const samplePaths = ROUTE_SAMPLES;
  const selectValue = samplePaths.includes(normalizedPath) ? normalizedPath : '__custom__';
  const segments = normalizedPath.split('/').filter(Boolean);
  const localeSegment = segments[0] ?? '';
  const pageSegment = segments[1] ?? '';
  const localeSupported = localeSegment ? supportedLocales.includes(localeSegment) : true;
  const hasExtraSegments = localeSupported
    ? pageSegment
      ? segments.length > 2
      : segments.length > 1
    : false;
  const routeCatalog = new Map([
    ['/', content.common.home],
    ...content.learningModules.map((module) => [module.path, module.navLabel ?? module.title]),
  ]);
  const pagePath = pageSegment ? `/${pageSegment}` : '/';
  const matchedPageLabel =
    localeSupported && !hasExtraSegments ? (routeCatalog.get(pagePath) ?? null) : null;
  const matchStatus = !localeSupported
    ? 'unsupportedLocale'
    : matchedPageLabel
      ? 'valid'
      : 'notFound';
  const safeRedirectExample =
    matchStatus === 'unsupportedLocale' ? localizedPath(defaultLocale, '/') : null;
  const notFoundRecoveryExample =
    matchStatus === 'notFound' ? localizedPath(localeSegment || defaultLocale, '/') : null;
  const activePreviewMatched = samplePaths.includes(normalizedPath);
  const previewRoutes = [
    { id: 'home', label: content.common.home },
    ...content.learningModules.map((module) => ({
      id: module.id,
      label: module.navLabel ?? module.title,
    })),
  ];
  const recoveryPreviewLabel =
    matchStatus === 'unsupportedLocale'
      ? `${labels.safeRedirect}: ${safeRedirectExample}`
      : matchStatus === 'notFound'
        ? `${labels.recovery}: ${notFoundRecoveryExample}`
        : null;
  const activePreviewId = matchStatus === 'valid' ? pageSegment || 'home' : 'recovery';
  const pageSegmentDisplay = pageSegment || content.common.home;

  function handleSelect(value) {
    onSelectPath(value === '__custom__' ? normalizedPath : value);
  }

  return (
    <div className="stack">
      <div className="split-layout split-layout-compact">
        <label className="field">
          <span>{labels.selectLabel}</span>
          <select value={selectValue} onChange={(event) => handleSelect(event.target.value)}>
            <option value="__custom__">{labels.customOption}</option>
            {samplePaths.map((path) => (
              <option key={path} value={path}>
                {path}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>{labels.inputLabel}</span>
          <input
            dir="ltr"
            translate="no"
            value={selectedPath}
            onChange={(event) => onSelectPath(event.target.value)}
            placeholder={samplePaths[0]}
          />
        </label>
      </div>

      <article className="story-card">
        <strong>{labels.sampleLabel}</strong>
        <div className="chip-row">
          {samplePaths.map((path) => (
            <button
              key={path}
              type="button"
              className={normalizedPath === path ? 'pill pill-active' : 'pill'}
              onClick={() => onSelectPath(path)}
            >
              {path}
            </button>
          ))}
        </div>
      </article>

      <div className="tool-story-grid">
        <article className="code-card" dir="ltr">
          <strong>{labels.selectedPath}</strong>
          <pre dir="ltr" lang="en" translate="no">
            <code>{normalizedPath}</code>
          </pre>
        </article>

        <article className="story-card" aria-live="polite">
          <strong>{labels.matchStatus}</strong>
          <div className="chip-row">
            <span className="pill">{statusCopy[matchStatus]}</span>
          </div>
          <p>{statusDescriptions[matchStatus]}</p>
        </article>
      </div>

      <div className="tool-story-grid">
        <article className="story-card">
          <strong>{labels.localeSegment}</strong>
          <p dir="ltr" translate="no">
            {localeSegment || '—'}
          </p>
        </article>

        <article className="story-card">
          <strong>{labels.pageSegment}</strong>
          <p dir="ltr" translate="no">
            {pageSegmentDisplay}
          </p>
        </article>

        <article className="story-card">
          <strong>{labels.matchedPage}</strong>
          <p>{matchedPageLabel || '—'}</p>
        </article>

        <article className="story-card">
          <strong>{labels.safeRedirect}</strong>
          <p dir="ltr" lang="en" translate="no">
            {safeRedirectExample || '—'}
          </p>
        </article>
      </div>

      <article className="story-card">
        <strong>{labels.activePreview}</strong>
        <div className="chip-row">
          {previewRoutes.map((route) => (
            <span
              key={route.id}
              className={activePreviewId === route.id ? 'pill pill-active' : 'pill'}
              aria-current={activePreviewId === route.id ? 'page' : undefined}
            >
              {route.label}
            </span>
          ))}
          {recoveryPreviewLabel ? (
            <span className="pill pill-active" aria-current="page">
              {recoveryPreviewLabel}
            </span>
          ) : null}
        </div>
        {!activePreviewMatched ? <p className="quiet">{labels.previewEmpty}</p> : null}
      </article>

      {matchStatus === 'notFound' ? (
        <article className="story-card">
          <strong>{labels.recovery}</strong>
          <p>{statusDescriptions.notFound}</p>
          <p dir="ltr" lang="en" translate="no">
            {notFoundRecoveryExample}
          </p>
        </article>
      ) : null}
    </div>
  );
}

export function RoutingPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();
  const routingModule = content.modules.routing;
  const routingTopics = ROUTING_TOPIC_ORDER.map((id) => ({
    id,
    ...routingModule.topics[id],
  })).filter((topic) => topic && topic.id && topic.title);
  const [selectedTopicId, setSelectedTopicId] = useState(
    () => routingTopics[0]?.id ?? 'client-routing',
  );
  const [selectedPath, setSelectedPath] = useState(() => localizedPath(language, '/routing'));

  const lesson = {
    hero: routingModule.hero,
    tabs: {
      summary: content.common.summaryTab,
      live: content.common.liveTab,
      quiz: content.common.quizTab,
      tips: content.common.tipsTab,
      ariaLabel: routingModule.title,
    },
  };

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={routingModule.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('routing')}
      secondaryActionLabel={routingModule.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/project')}
      renderSummary={() => (
        <div className="stack">
          <SummaryPanel
            label={routingModule.stageLabel}
            title={routingModule.title}
            titleAs="h2"
            intro={routingModule.summary.intro}
            learningGoals={routingModule.summary.points}
            prerequisites={routingModule.summary.prerequisites}
            keyPoints={routingModule.summary.keyPoints}
            learningGoalsLabel={language === 'fa' ? 'هدف‌های یادگیری' : 'Learning goals'}
            prerequisitesLabel={language === 'fa' ? 'پیش‌نیازها' : 'Prerequisites'}
            keyPointsLabel={language === 'fa' ? 'نکات کلیدی' : 'Key points'}
          />

          <DeepDivePanel
            label={routingModule.deepDive.eyebrow}
            title={routingModule.deepDive.title}
            description={routingModule.deepDive.lead}
            topics={routingTopics}
            activeId={selectedTopicId}
            onSelect={setSelectedTopicId}
            pickerLabel={routingModule.deepDive.chooserLabel}
            renderTopic={(topic) => renderRoutingTopicDetail(topic, routingModule.deepDive)}
          />
        </div>
      )}
      liveLab={
        <LiveLabFrame
          label={routingModule.live.eyebrow}
          title={routingModule.live.title}
          description={routingModule.live.lead}
          guidance={routingModule.live.guidance}
          stateNote={routingModule.live.stateNote}
        >
          <RouteExplorerLab
            key={language}
            content={content}
            localizedPath={localizedPath}
            selectedPath={selectedPath}
            onSelectPath={setSelectedPath}
          />
        </LiveLabFrame>
      }
      quiz={{
        label: content.common.quizTab,
        title: routingModule.quizTitle,
        titleAs: 'h2',
        quizzes: content.quizzes.routing,
      }}
      tips={{
        label: content.common.tipsTab,
        title: routingModule.tipsTitle,
        titleAs: 'h2',
        intro: routingModule.tipsIntro,
        tips: routingModule.tips,
        practicePrompts: routingModule.practicePrompts,
        mistakes: routingModule.mistakes,
        rememberLabel: language === 'fa' ? 'آنچه باید به خاطر بسپاری' : 'What to remember',
        practiceLabel: language === 'fa' ? 'تمرین' : 'Practice',
        practiceTitle: language === 'fa' ? 'یک تمرین کوتاه' : 'Try it',
        mistakesLabel: language === 'fa' ? 'چه چیزی را باید از آن دوری کنی' : 'What to avoid',
        mistakesTitle: language === 'fa' ? 'اشتباه‌های رایج' : 'Common mistakes',
        mistakesDescription:
          language === 'fa' ? 'این یادآوری‌ها را سریع مرور کن.' : 'Use these as quick reminders.',
      }}
    />
  );
}
