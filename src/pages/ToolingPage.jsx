import { useState } from 'react';
import { CodeExampleBlock } from '../components/CodeExampleBlock';
import { LessonSection } from '../components/LessonSection';
import { MistakeList } from '../components/MistakeList';
import { PracticePrompt } from '../components/PracticePrompt';
import { SimulationSteps } from '../components/SimulationSteps';
import { QuizPanel } from '../components/QuizPanel';
import { LiveLabFrame } from '../components/LiveLabFrame';
import { LessonTemplate } from '../components/LessonTemplate';
import { SummaryPanel } from '../components/SummaryPanel';
import { TipsPanel } from '../components/TipsPanel';
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
    const isFa = language === 'fa';

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

        <SimulationSteps
          label={detailCopy.sections.howItWorks}
          title={tool.title}
          titleAs="h3"
          steps={tool.howItWorks}
        />

        <SimulationSteps
          label={detailCopy.sections.simulation}
          title={tool.title}
          titleAs="h3"
          description={detailCopy.simulationIntro}
          steps={tool.simulation.map((step, index) => ({
            id: step.id ?? `${tool.id}-simulation-${index}`,
            title: step.title,
            description: step.body,
          }))}
        />

        <CodeExampleBlock
          label={detailCopy.sections.example}
          title={tool.example.title}
          titleAs="h3"
          description={tool.example.explanation}
          code={tool.example.code}
        />

        <section className="stack">
          <div className="section-heading">
            <span className="eyebrow">{detailCopy.sections.beforeAfter}</span>
            <h2>{tool.title}</h2>
          </div>
          <div className="code-grid">
            <CodeExampleBlock
              label={detailCopy.beforeLabel}
              title={detailCopy.beforeLabel}
              titleAs="h3"
              code={tool.comparison.before}
            />
            <CodeExampleBlock
              label={detailCopy.afterLabel}
              title={detailCopy.afterLabel}
              titleAs="h3"
              code={tool.comparison.after}
            />
          </div>
          <article className="story-card">
            <strong>{tool.title}</strong>
            <p>{tool.comparison.takeaway}</p>
          </article>
        </section>

        <MistakeList
          label={detailCopy.sections.mistakes}
          title={tool.title}
          titleAs="h3"
          mistakeLabel={isFa ? 'اشتباه رایج' : 'Common mistake'}
          fixLabel={isFa ? 'راه‌حل' : 'Fix'}
          mistakes={tool.mistakes}
        />

        <LessonSection eyebrow={detailCopy.sections.usage} title={tool.title} titleAs="h3">
          <ul className="bullet-list bullet-list-compact">
            {tool.realUsage.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </LessonSection>

        <PracticePrompt
          label={detailCopy.sections.practice}
          title={detailCopy.practiceQuestion}
          titleAs="h3"
          prompt={tool.practice.question}
          hint={detailCopy.practiceTask}
          hintLabel={isFa ? 'راهنما' : 'Hint'}
          expectedOutcome={tool.practice.task}
          expectedOutcomeLabel={isFa ? 'نتیجه مورد انتظار' : 'Expected outcome'}
        />

        <LessonSection eyebrow={detailCopy.sections.summary} title={tool.title} titleAs="h3">
          <ul className="bullet-list bullet-list-compact">
            {tool.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </LessonSection>
      </div>
    );
  }

  const livePanel = (
    <LiveLabFrame
      label={content.modules.tooling.live.eyebrow}
      title={content.modules.tooling.live.title}
      description={content.modules.tooling.live.lead}
      guidance={
        language === 'fa'
          ? 'یک ابزار را انتخاب کن و ببین commandها، مقایسه package managerها، و پیش‌نمایش چگونه تغییر می‌کنند.'
          : 'Select a tool and watch how the commands, package-manager comparison, and preview change.'
      }
      stateNote={
        language === 'fa'
          ? 'پیش‌نمایش command و فهرست commandها با انتخاب ابزار فعال به‌روزرسانی می‌شوند.'
          : 'The command preview and command list update as you change the active tool.'
      }
    >
      <div className="stack">
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
            <span dir="ltr" lang="en" translate="no">
              {activeTool.badge}
            </span>
            <code dir="ltr" lang="en" translate="no">
              {activeTool.command}
            </code>
          </div>
        </article>

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
                  dir="ltr"
                  lang="en"
                  translate="no"
                >
                  {item.command}
                </button>
              ))}
            </div>

            <article className="command-preview">
              <div className="command-card command-card-spotlight">
                <span dir="ltr" lang="en" translate="no">
                  {activeCommand.command}
                </span>
                <code dir="ltr" lang="en" translate="no">
                  {activeCommand.result}
                </code>
              </div>
              <p>{activeCommand.description}</p>
            </article>

            <div className="command-stack">
              {content.commandCards.map((item) => (
                <div className="command-card" key={item.command}>
                  <span dir="ltr" lang="en" translate="no">
                    {item.command}
                  </span>
                  <code dir="ltr" lang="en" translate="no">
                    {item.result}
                  </code>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </LiveLabFrame>
  );

  const quizPanel = (
    <QuizPanel
      label={content.common.quizTab}
      title={content.modules.tooling.quizTitle}
      titleAs="h2"
      quizzes={content.quizzes.tooling}
    />
  );

  const tipsPanel = (
    <TipsPanel
      label={content.common.tipsTab}
      title={content.modules.tooling.title}
      titleAs="h2"
      tips={content.modules.tooling.tips}
      rememberLabel={language === 'fa' ? 'آنچه باید به‌خاطر بسپاری' : 'What to remember'}
      practiceLabel={language === 'fa' ? 'تمرین' : 'Practice'}
      practiceTitle={language === 'fa' ? 'دوباره امتحان کن' : 'Try it'}
      mistakesLabel={language === 'fa' ? 'چه چیزهایی را باید حواست باشد' : 'What to avoid'}
      mistakesTitle={language === 'fa' ? 'اشتباه‌های رایج' : 'Common mistakes'}
      mistakesDescription={
        language === 'fa'
          ? 'این نکته‌ها را به‌عنوان یادآوری سریع ببین.'
          : 'Use these as quick reminders.'
      }
    />
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
