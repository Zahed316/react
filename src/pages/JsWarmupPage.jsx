import { useState } from 'react';
import { LessonTemplate } from '../components/LessonTemplate';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

function ArrayExplorerBody({ explorer }) {
  const [itemsText, setItemsText] = useState(explorer.sampleText);
  const [minimumLength, setMinimumLength] = useState(4);

  const items = itemsText
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const mappedItems = items.map((item, index) => `${index + 1}. ${item}`);
  const filteredItems = items.filter((item) => item.length >= minimumLength);

  return (
    <div className="stack">
      <div className="field-grid">
        <label className="field">
          <span>{explorer.itemsLabel}</span>
          <textarea
            rows="3"
            value={itemsText}
            onChange={(event) => setItemsText(event.target.value)}
          />
        </label>

        <label className="field">
          <span>
            {explorer.rangeLabel}: {minimumLength}
          </span>
          <input
            type="range"
            min="1"
            max="10"
            value={minimumLength}
            onChange={(event) => setMinimumLength(Number(event.target.value))}
          />
        </label>
      </div>

      <div className="code-grid">
        <article className="code-card">
          <strong>{explorer.mapLabel}</strong>
          <pre>{mappedItems.join('\n')}</pre>
        </article>
        <article className="code-card">
          <strong>{explorer.filterLabel}</strong>
          <pre>{filteredItems.join('\n')}</pre>
        </article>
      </div>
    </div>
  );
}

export function JsWarmupPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();

  const lesson = {
    hero: content.modules.js.hero,
    tabs: {
      summary: content.common.summaryTab,
      live: content.common.liveTab,
      quiz: content.common.quizTab,
      tips: content.common.tipsTab,
      ariaLabel: content.modules.js.title,
    },
  };

  return (
    <LessonTemplate
      lesson={lesson}
      primaryActionLabel={content.modules.js.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('js')}
      secondaryActionLabel={content.modules.js.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/react')}
      summary={{
        label: content.modules.js.stageLabel,
        title: content.modules.js.title,
        titleAs: 'h2',
        intro: content.modules.js.summary.intro,
        learningGoals: content.modules.js.summary.points,
        keyPoints: content.modules.js.cheatSheet,
      }}
      liveLab={{
        label: content.modules.js.explorer.eyebrow,
        title: content.modules.js.explorer.title,
        titleAs: 'h2',
        description: content.modules.js.explorer.lead,
        children: <ArrayExplorerBody key={language} explorer={content.modules.js.explorer} />,
      }}
      quiz={{
        label: content.common.quizTab,
        title: content.modules.js.quizTitle,
        titleAs: 'h2',
        quizzes: content.quizzes.js,
      }}
      tips={{
        label: content.common.tipsTab,
        title: content.modules.js.title,
        titleAs: 'h2',
        tips: content.modules.js.tips,
      }}
    />
  );
}
