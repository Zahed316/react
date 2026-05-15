import { useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonPageShell } from '../components/LessonPageShell';
import { LessonTabs } from '../components/LessonTabs';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

function ArrayExplorer({ explorer }) {
  const [itemsText, setItemsText] = useState(explorer.sampleText);
  const [minimumLength, setMinimumLength] = useState(4);

  const items = itemsText
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const mappedItems = items.map((item, index) => `${index + 1}. ${item}`);
  const filteredItems = items.filter((item) => item.length >= minimumLength);

  return (
    <section className="surface lesson-subpanel">
      <div className="section-heading">
        <span className="eyebrow">{explorer.eyebrow}</span>
        <h2>{explorer.title}</h2>
      </div>

      <p className="quiet">{explorer.lead}</p>

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
    </section>
  );
}

export function JsWarmupPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { markModuleComplete } = useLearningProgress();

  const tabs = [
    {
      id: 'summary',
      label: content.common.summaryTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.modules.js.stageLabel}</span>
            <h2>{content.modules.js.title}</h2>
          </div>
          <p className="quiet">{content.modules.js.summary.intro}</p>
          <ul className="bullet-list">
            {content.modules.js.summary.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="bullet-list bullet-list-compact">
            {content.modules.js.cheatSheet.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ),
    },
    {
      id: 'live',
      label: content.common.liveTab,
      content: <ArrayExplorer key={language} explorer={content.modules.js.explorer} />,
    },
    {
      id: 'quiz',
      label: content.common.quizTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.quizTab}</span>
            <h2>{content.modules.js.quizTitle}</h2>
          </div>
          <div className="stack">
            {content.quizzes.js.map((question) => (
              <QuizBlock key={question.id} {...question} />
            ))}
          </div>
        </section>
      ),
    },
    {
      id: 'tips',
      label: content.common.tipsTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.tipsTab}</span>
            <h2>{content.modules.js.title}</h2>
          </div>
          <ul className="bullet-list bullet-list-compact">
            {content.modules.js.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      ),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={content.modules.js.hero.eyebrow}
      title={content.modules.js.hero.title}
      lead={content.modules.js.hero.lead}
      primaryActionLabel={content.modules.js.hero.primaryAction}
      onPrimaryAction={() => markModuleComplete('js')}
      secondaryActionLabel={content.modules.js.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/react')}
    >
      <LessonTabs tabs={tabs} ariaLabel={content.modules.js.title} />
    </LessonPageShell>
  );
}