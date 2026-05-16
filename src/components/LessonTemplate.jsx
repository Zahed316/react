import { isValidElement } from 'react';
import { DeepDivePanel } from './deepLesson/DeepDivePanel';
import { LessonPageShell } from './LessonPageShell';
import { LessonTabs } from './LessonTabs';
import { LiveLabFrame } from './LiveLabFrame';
import { QuizPanel } from './QuizPanel';
import { SummaryPanel } from './SummaryPanel';
import { TipsPanel } from './TipsPanel';

function resolveLabel(source, keys, fallback) {
  for (const key of keys) {
    const value = source?.[key];

    if (value) {
      return value;
    }
  }

  return fallback;
}

function isRenderableNode(value) {
  return isValidElement(value) || typeof value === 'string' || typeof value === 'number';
}

function renderPanelSlot(value, Component, context, renderOverride, arrayPropName) {
  if (typeof renderOverride === 'function') {
    return renderOverride(value, context);
  }

  if (value == null || value === false) {
    return null;
  }

  if (isRenderableNode(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    if (!arrayPropName) {
      return value.every(isRenderableNode) ? <div className="stack">{value}</div> : null;
    }

    return <Component {...{ [arrayPropName]: value }} />;
  }

  return <Component {...value} />;
}

function renderLiveLabSlot(value) {
  if (value == null || value === false) {
    return null;
  }

  if (isRenderableNode(value)) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.every(isRenderableNode) ? <div className="stack">{value}</div> : null;
  }

  return <LiveLabFrame {...value} />;
}

function renderLiveTabContent({ deepDive, liveLab, lessonContext }, renderLive, renderDeepDive) {
  if (typeof renderLive === 'function') {
    return renderLive({ deepDive, liveLab, lesson: lessonContext });
  }

  const deepDiveContent = renderPanelSlot(
    deepDive,
    DeepDivePanel,
    lessonContext,
    renderDeepDive,
    'topics',
  );
  const liveLabContent = renderLiveLabSlot(liveLab);
  const blocks = [deepDiveContent, liveLabContent].filter(Boolean);

  if (blocks.length === 0) {
    return null;
  }

  if (blocks.length === 1) {
    return blocks[0];
  }

  return <div className="stack">{blocks}</div>;
}

export function LessonTemplate({
  lesson,
  summary,
  deepDive,
  liveLab,
  quiz,
  tips,
  primaryActionLabel,
  onPrimaryAction,
  primaryDisabled = false,
  secondaryActionLabel,
  secondaryActionTo,
  renderSummary,
  renderDeepDive,
  renderLive,
  renderQuiz,
  renderTips,
}) {
  const lessonData = lesson ?? {};
  const lessonHero = lessonData.hero ?? lessonData;
  const lessonTabsSource = lessonData.tabs ?? lessonData.tabLabels ?? {};
  const lessonContext = {
    lesson: lessonData,
    hero: lessonHero,
    tabs: lessonTabsSource,
    primaryActionLabel,
    secondaryActionLabel,
    secondaryActionTo,
  };

  const tabs = [
    {
      id: 'summary',
      label: resolveLabel(lessonTabsSource, ['summary', 'summaryLabel', 'summaryTab'], 'Summary'),
      content: renderPanelSlot(summary, SummaryPanel, lessonContext, renderSummary),
    },
    {
      id: 'live',
      label: resolveLabel(lessonTabsSource, ['live', 'liveLabel', 'liveTab'], 'Live'),
      content: renderLiveTabContent(
        { deepDive, liveLab, lessonContext },
        renderLive,
        renderDeepDive,
      ),
    },
    {
      id: 'quiz',
      label: resolveLabel(lessonTabsSource, ['quiz', 'quizLabel', 'quizTab'], 'Quiz'),
      content: renderPanelSlot(quiz, QuizPanel, lessonContext, renderQuiz, 'quizzes'),
    },
    {
      id: 'tips',
      label: resolveLabel(lessonTabsSource, ['tips', 'tipsLabel', 'tipsTab'], 'Tips'),
      content: renderPanelSlot(tips, TipsPanel, lessonContext, renderTips, 'tips'),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={lessonHero.eyebrow}
      title={lessonHero.title}
      lead={lessonHero.lead}
      primaryActionLabel={primaryActionLabel}
      onPrimaryAction={onPrimaryAction}
      primaryDisabled={primaryDisabled}
      secondaryActionLabel={secondaryActionLabel}
      secondaryActionTo={secondaryActionTo}
    >
      <LessonTabs
        tabs={tabs}
        ariaLabel={
          lessonTabsSource.ariaLabel ?? lessonHero.title ?? lessonData.title ?? 'Lesson tabs'
        }
      />
    </LessonPageShell>
  );
}
