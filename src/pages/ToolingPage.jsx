import { useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonPageShell } from '../components/LessonPageShell';
import { LessonTabs } from '../components/LessonTabs';
import { useCourseContent } from '../hooks/useCourseContent';
import { useLanguage } from '../context/LanguageContext';
import { useLearningProgress } from '../context/LearningProgressContext';

export function ToolingPage() {
  const { language, localizedPath } = useLanguage();
  const content = useCourseContent();
  const { completedSet, markModuleComplete } = useLearningProgress();
  const [selectedToolId, setSelectedToolId] = useState(() => content.toolingDeck[0]?.id ?? 'npm');
  const [selectedCommand, setSelectedCommand] = useState(
    () => content.commandCards[1]?.command ?? content.commandCards[0]?.command ?? 'npm run dev',
  );

  const activeTool =
    content.toolingDeck.find((tool) => tool.id === selectedToolId) ?? content.toolingDeck[0];
  const activeCommand =
    content.commandCards.find((item) => item.command === selectedCommand) ??
    content.commandCards[0];
  const alreadyCompleted = completedSet.has('tooling');

  function handleCompleteTooling() {
    if (alreadyCompleted) {
      return;
    }

    markModuleComplete('tooling');
  }

  const livePanel = (
    <div className="stack">
      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.modules.tooling.live.eyebrow}</span>
          <h2>{content.modules.tooling.live.title}</h2>
        </div>

        <div className="tool-tabs" role="tablist" aria-label={content.modules.tooling.title}>
          {content.toolingDeck.map((tool) => (
            <button
              key={tool.id}
              type="button"
              className={selectedToolId === tool.id ? 'pill pill-active' : 'pill'}
              onClick={() => setSelectedToolId(tool.id)}
            >
              {tool.title}
            </button>
          ))}
        </div>

        <article
          className="tool-spotlight"
          style={{ '--tool-accent': activeTool.accent ?? '#2563eb' }}
        >
          <div className="tool-spotlight-header">
            <span className="pill">{activeTool.badge}</span>
            <span className="tool-glow" aria-hidden="true" />
          </div>
          <h3>{activeTool.title}</h3>
          <p>{activeTool.summary}</p>

          <div className="tool-meta-grid">
            <div className="tool-meta-card">
              <strong>{content.modules.tooling.live.whyLabel}</strong>
              <p>{activeTool.why}</p>
            </div>
            <div className="tool-meta-card">
              <strong>{content.modules.tooling.live.noteLabel}</strong>
              <p>{activeTool.note}</p>
            </div>
          </div>

          <div className="command-card command-card-spotlight">
            <span>{activeTool.badge}</span>
            <code>{activeTool.command}</code>
          </div>
        </article>
      </section>

      <div className="split-layout">
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">npm vs pnpm</span>
            <h2>{content.modules.tooling.title}</h2>
          </div>

          <div className="comparison-grid">
            {content.packageManagerComparison.map((row) => (
              <article className="comparison-card" key={row.label}>
                <strong>{row.label}</strong>
                <div>
                  <span>npm</span>
                  <p>{row.npm}</p>
                </div>
                <div>
                  <span>pnpm</span>
                  <p>{row.pnpm}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">Commands</span>
            <h2>{content.modules.tooling.live.title}</h2>
          </div>

          <div className="command-tabs" role="tablist" aria-label={content.modules.tooling.title}>
            {content.commandCards.map((item) => (
              <button
                key={item.command}
                type="button"
                className={selectedCommand === item.command ? 'pill pill-active' : 'pill'}
                onClick={() => setSelectedCommand(item.command)}
              >
                {item.command}
              </button>
            ))}
          </div>

          <article className="command-preview">
            <div className="command-card command-card-spotlight">
              <span>{activeCommand.command}</span>
              <code>{activeCommand.result}</code>
            </div>
            <p>{activeCommand.description}</p>
          </article>

          <div className="command-stack">
            {content.commandCards.map((item) => (
              <div className="command-card" key={item.command}>
                <span>{item.command}</span>
                <code>{item.result}</code>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );

  const tabs = [
    {
      id: 'summary',
      label: content.common.summaryTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.modules.tooling.stageLabel}</span>
            <h2>{content.modules.tooling.title}</h2>
          </div>
          <p className="quiet">{content.modules.tooling.summary.intro}</p>
          <ul className="bullet-list">
            {content.modules.tooling.summary.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="tool-story-grid">
            {content.modules.tooling.summary.story.map((item) => (
              <article className="story-card" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      ),
    },
    {
      id: 'live',
      label: content.common.liveTab,
      content: livePanel,
    },
    {
      id: 'quiz',
      label: content.common.quizTab,
      content: (
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{content.common.quizTab}</span>
            <h2>{content.modules.tooling.quizTitle}</h2>
          </div>
          <div className="stack">
            {content.quizzes.tooling.map((question) => (
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
            <h2>{content.modules.tooling.title}</h2>
          </div>
          <ul className="bullet-list bullet-list-compact">
            {content.modules.tooling.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
      ),
    },
  ];

  return (
    <LessonPageShell
      eyebrow={content.modules.tooling.hero.eyebrow}
      title={content.modules.tooling.hero.title}
      lead={content.modules.tooling.hero.lead}
      primaryActionLabel={
        alreadyCompleted ? content.common.done : content.modules.tooling.hero.primaryAction
      }
      onPrimaryAction={handleCompleteTooling}
      primaryDisabled={alreadyCompleted}
      secondaryActionLabel={content.modules.tooling.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/js')}
    >
      <LessonTabs tabs={tabs} ariaLabel={content.modules.tooling.title} />
    </LessonPageShell>
  );
}