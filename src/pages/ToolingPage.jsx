import { useState } from 'react';
import { QuizBlock } from '../components/QuizBlock';
import { LessonTemplate } from '../components/LessonTemplate';
import { SummaryPanel } from '../components/SummaryPanel';
import { DeepDivePanel, DeepLessonTopicPicker } from '../components/deepLesson';
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
  const detailCopy = content.modules.tooling.deepDive;
  const summaryNextStep =
    language === 'fa'
      ? 'بعدی: تب live را باز کن تا جریان commandها را ببینی.'
      : 'Next: open the live tab to inspect the command flow.';

  function handleCompleteTooling() {
    if (alreadyCompleted) {
      return;
    }

    markModuleComplete('tooling');
  }

  const summaryPanel = (
    <SummaryPanel
      label={content.modules.tooling.stageLabel}
      title={content.modules.tooling.title}
      titleAs="h2"
      intro={content.modules.tooling.summary.intro}
      learningGoals={content.modules.tooling.summary.points}
      prerequisites={content.modules.setup.summary.points}
      keyPoints={content.modules.tooling.summary.story}
      footer={summaryNextStep}
    />
  );

  function renderToolTopic(tool) {
    return (
      <div className="stack">
        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.eyebrow}</span>
            <h2>{tool.title}</h2>
            <p className="quiet">{tool.summary}</p>
          </div>

          <article className="tool-spotlight" style={{ '--tool-accent': tool.accent ?? '#2563eb' }}>
            <div className="tool-spotlight-header">
              <span className="pill">{tool.badge}</span>
              <span className="tool-glow" aria-hidden="true" />
            </div>
            <h3>{tool.title}</h3>
            <p>{tool.summary}</p>
          </article>
        </section>

        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.definition}</span>
            <h2>{tool.title}</h2>
          </div>
          <p className="quiet">{tool.summary}</p>
        </section>

        <section className="split-layout">
          <article className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{detailCopy.sections.whyExists}</span>
              <h2>{tool.title}</h2>
            </div>
            <p className="quiet">{tool.whyExists}</p>
          </article>

          <article className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{detailCopy.sections.problem}</span>
              <h2>{tool.title}</h2>
            </div>
            <p className="quiet">{tool.problem}</p>
          </article>
        </section>

        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.howItWorks}</span>
            <h2>{tool.title}</h2>
          </div>
          <div className="tool-story-grid">
            {tool.howItWorks.map((item) => (
              <article className="story-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.simulation}</span>
            <h2>{tool.title}</h2>
            <p className="quiet">{detailCopy.simulationIntro}</p>
          </div>
          <div className="tool-story-grid">
            {tool.simulation.map((step, index) => (
              <article className="story-card" key={step.title}>
                <strong>
                  {index + 1}. {step.title}
                </strong>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.example}</span>
            <h2>{tool.example.title}</h2>
          </div>
          <div className="code-grid">
            <article className="code-card">
              <strong>{tool.example.title}</strong>
              <pre>{tool.example.code}</pre>
            </article>
            <article className="story-card">
              <strong>{tool.title}</strong>
              <p>{tool.example.explanation}</p>
            </article>
          </div>
        </section>

        <section className="surface lesson-subpanel">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.beforeAfter}</span>
            <h2>{tool.title}</h2>
          </div>
          <div className="code-grid">
            <article className="code-card">
              <strong>{detailCopy.beforeLabel}</strong>
              <pre>{tool.comparison.before}</pre>
            </article>
            <article className="code-card">
              <strong>{detailCopy.afterLabel}</strong>
              <pre>{tool.comparison.after}</pre>
            </article>
          </div>
          <article className="story-card">
            <strong>{tool.title}</strong>
            <p>{tool.comparison.takeaway}</p>
          </article>
        </section>

        <section className="split-layout">
          <article className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{detailCopy.sections.mistakes}</span>
              <h2>{tool.title}</h2>
            </div>
            <ul className="bullet-list bullet-list-compact">
              {tool.mistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </article>

          <article className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{detailCopy.sections.usage}</span>
              <h2>{tool.title}</h2>
            </div>
            <ul className="bullet-list bullet-list-compact">
              {tool.realUsage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="split-layout">
          <article className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{detailCopy.sections.practice}</span>
              <h2>{tool.title}</h2>
            </div>
            <div className="tool-story-grid">
              <article className="story-card">
                <strong>{detailCopy.practiceQuestion}</strong>
                <p>{tool.practice.question}</p>
              </article>
              <article className="story-card">
                <strong>{detailCopy.practiceTask}</strong>
                <p>{tool.practice.task}</p>
              </article>
            </div>
          </article>

          <article className="surface lesson-subpanel">
            <div className="section-heading">
              <span className="eyebrow">{detailCopy.sections.summary}</span>
              <h2>{tool.title}</h2>
            </div>
            <ul className="bullet-list bullet-list-compact">
              {tool.summaryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    );
  }

  const livePanel = (
    <div className="stack">
      <section className="surface lesson-subpanel">
        <div className="section-heading">
          <span className="eyebrow">{content.modules.tooling.live.eyebrow}</span>
          <h2>{content.modules.tooling.live.title}</h2>
          <p className="quiet">{content.modules.tooling.live.lead}</p>
        </div>

        <DeepLessonTopicPicker
          items={content.toolingDeck}
          activeId={selectedToolId}
          onSelect={setSelectedToolId}
          ariaLabel={content.modules.tooling.title}
        />

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
            <span className="eyebrow">{detailCopy.comparisonEyebrow}</span>
            <h2>{detailCopy.comparisonTitle}</h2>
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
            <span className="eyebrow">{detailCopy.commandEyebrow}</span>
            <h2>{detailCopy.commandTitle}</h2>
            <p className="quiet">{detailCopy.commandLead}</p>
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

  const quizPanel = (
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
  );

  const tipsPanel = (
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
  );

  return (
    <LessonTemplate
      lesson={{
        hero: content.modules.tooling.hero,
        tabs: {
          summary: content.common.summaryTab,
          live: content.common.liveTab,
          quiz: content.common.quizTab,
          tips: content.common.tipsTab,
          ariaLabel: content.modules.tooling.title,
        },
      }}
      primaryActionLabel={
        alreadyCompleted ? content.common.done : content.modules.tooling.hero.primaryAction
      }
      onPrimaryAction={handleCompleteTooling}
      primaryDisabled={alreadyCompleted}
      secondaryActionLabel={content.modules.tooling.hero.secondaryAction}
      secondaryActionTo={localizedPath(language, '/js')}
      renderSummary={() => (
        <div className="stack">
          {summaryPanel}
          <DeepDivePanel
            key={selectedToolId}
            label={detailCopy.eyebrow}
            title={detailCopy.title}
            description={detailCopy.lead}
            topics={content.toolingDeck}
            initialTopicId={selectedToolId}
            renderTopic={renderToolTopic}
          />
        </div>
      )}
      renderLive={() => livePanel}
      renderQuiz={() => quizPanel}
      renderTips={() => tipsPanel}
    />
  );
}
