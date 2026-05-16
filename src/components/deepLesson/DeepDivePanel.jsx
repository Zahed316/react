import { useState } from 'react';
import { CodeExampleBlock } from '../CodeExampleBlock';
import { LessonSection } from '../LessonSection';
import { MistakeList } from '../MistakeList';
import { PracticePrompt } from '../PracticePrompt';
import { SimulationSteps } from '../SimulationSteps';
import { DeepLessonTopicPicker } from './DeepLessonTopicPicker';

function normalizeTopics(topics) {
  if (!Array.isArray(topics)) {
    return [];
  }

  return topics.filter((topic) => topic && typeof topic === 'object' && topic.id != null);
}

function resolveTopicId(topics, currentId, initialTopicId) {
  const validIds = new Set(topics.map((topic) => topic.id));

  if (currentId && validIds.has(currentId)) {
    return currentId;
  }

  if (initialTopicId && validIds.has(initialTopicId)) {
    return initialTopicId;
  }

  return topics[0]?.id ?? null;
}

function renderText(content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return <p className="quiet">{content}</p>;
  }

  return content;
}

function renderStoryCards(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="tool-story-grid">
      {items
        .map((item, index) => {
          if (item == null) {
            return null;
          }

          const title =
            typeof item === 'string' ? null : (item.title ?? item.label ?? item.heading ?? item.id);
          const body =
            typeof item === 'string'
              ? item
              : (item.body ?? item.description ?? item.detail ?? item.explanation ?? item.text);
          const key = typeof item === 'string' ? item : (item.id ?? title ?? index);

          if (!title && !body) {
            return null;
          }

          return (
            <article className="story-card" key={key}>
              {title ? <strong>{title}</strong> : null}
              {renderText(body)}
            </article>
          );
        })
        .filter(Boolean)}
    </div>
  );
}

function renderBullets(items, className = 'bullet-list bullet-list-compact') {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ul className={className}>
      {items
        .map((item, index) => {
          if (item == null) {
            return null;
          }

          const text = typeof item === 'string' ? item : (item.title ?? item.label ?? item.text);
          const key = typeof item === 'string' ? item : (item.id ?? text ?? index);

          if (!text) {
            return null;
          }

          return <li key={key}>{text}</li>;
        })
        .filter(Boolean)}
    </ul>
  );
}

function renderComparison(topic) {
  const comparison = topic.beforeAfter ?? topic.comparison;

  if (!comparison) {
    return null;
  }

  const before = comparison.before ?? comparison.beforeText ?? comparison.from;
  const after = comparison.after ?? comparison.afterText ?? comparison.to;
  const takeaway = comparison.takeaway ?? comparison.summary ?? comparison.note;
  const takeawayNode = renderText(takeaway);

  if (!before && !after && !takeawayNode) {
    return null;
  }

  return (
    <LessonSection
      eyebrow="Before and after"
      title={topic.title ?? topic.id ?? 'Comparison'}
      titleAs="h3"
    >
      <div className="code-grid">
        {before ? (
          <article className="code-card" dir="ltr">
            <strong>{comparison.beforeLabel ?? 'Before'}</strong>
            <pre dir="ltr" lang="en" translate="no">
              <code>{before}</code>
            </pre>
          </article>
        ) : null}

        {after ? (
          <article className="code-card" dir="ltr">
            <strong>{comparison.afterLabel ?? 'After'}</strong>
            <pre dir="ltr" lang="en" translate="no">
              <code>{after}</code>
            </pre>
          </article>
        ) : null}
      </div>

      {takeawayNode ? <article className="story-card">{takeawayNode}</article> : null}
    </LessonSection>
  );
}

function renderExample(example) {
  if (!example) {
    return null;
  }

  const resolvedExample = typeof example === 'string' ? { code: example } : example;

  if (!resolvedExample.code) {
    return null;
  }

  return (
    <CodeExampleBlock
      label="Example"
      title={resolvedExample.title ?? 'Example'}
      description={resolvedExample.description ?? resolvedExample.lead}
      languageLabel={resolvedExample.languageLabel ?? resolvedExample.language}
      codeLanguage={resolvedExample.codeLanguage ?? resolvedExample.language}
      code={resolvedExample.code}
      notes={resolvedExample.explanation ?? resolvedExample.notes}
    />
  );
}

function renderPractice(practice) {
  if (!practice) {
    return null;
  }

  const resolvedPractice = typeof practice === 'string' ? { question: practice } : practice;

  return (
    <PracticePrompt
      label="Practice"
      title={resolvedPractice.title ?? 'Try it'}
      prompt={resolvedPractice.question ?? resolvedPractice.prompt ?? resolvedPractice.task}
      hint={resolvedPractice.hint}
      expectedOutcome={resolvedPractice.expectedOutcome ?? resolvedPractice.task}
    />
  );
}

function renderDefaultTopic(topic) {
  const overviewCards = [
    { title: 'What it is', body: topic.definition ?? topic.summary },
    { title: 'Why it matters', body: topic.whyExists },
    { title: 'Problem it solves', body: topic.problem },
  ].filter((item) => Boolean(item.body));

  return (
    <div className="stack">
      <article className="story-card">
        <span className="pill">{topic.title ?? topic.id}</span>
        {renderText(topic.summary ?? topic.definition)}
      </article>

      {overviewCards.length > 0 ? (
        <LessonSection eyebrow="Overview" title="What to know first" titleAs="h3">
          {renderStoryCards(overviewCards)}
        </LessonSection>
      ) : null}

      {Array.isArray(topic.howItWorks) && topic.howItWorks.length > 0 ? (
        <LessonSection eyebrow="How it works" title="Mechanism" titleAs="h3">
          {renderStoryCards(topic.howItWorks)}
        </LessonSection>
      ) : null}

      {Array.isArray(topic.simulation) && topic.simulation.length > 0 ? (
        <SimulationSteps
          label="Simulation"
          title="Behind the scenes"
          titleAs="h3"
          steps={topic.simulation}
        />
      ) : null}

      {renderExample(topic.example)}

      {renderComparison(topic)}

      {Array.isArray(topic.mistakes) && topic.mistakes.length > 0 ? (
        <MistakeList
          label="Mistakes"
          title="Common beginner mistakes"
          titleAs="h3"
          mistakes={topic.mistakes}
        />
      ) : null}

      {Array.isArray(topic.realUsage) && topic.realUsage.length > 0 ? (
        <LessonSection eyebrow="Real usage" title="Where it shows up" titleAs="h3">
          {renderBullets(topic.realUsage)}
        </LessonSection>
      ) : null}

      {renderPractice(topic.practice)}

      {topic.summary || (Array.isArray(topic.summaryPoints) && topic.summaryPoints.length > 0) ? (
        <LessonSection eyebrow="Recap" title="Key takeaways" titleAs="h3">
          {topic.summary ? <p className="quiet">{topic.summary}</p> : null}
          {renderBullets(topic.summaryPoints, 'bullet-list')}
        </LessonSection>
      ) : null}
    </div>
  );
}

export function DeepDivePanel({
  label,
  title,
  description,
  topics = [],
  initialTopicId,
  renderTopic,
  className = '',
  ...sectionProps
}) {
  const normalizedTopics = normalizeTopics(topics);
  const [selectedTopicId, setSelectedTopicId] = useState(() =>
    resolveTopicId(normalizedTopics, null, initialTopicId),
  );
  const activeTopicId = resolveTopicId(normalizedTopics, selectedTopicId, initialTopicId);
  const activeTopic = normalizedTopics.find((topic) => topic.id === activeTopicId) ?? null;
  const pickerLabel = title ? `${title} topics` : label ? `${label} topics` : 'Deep dive topics';
  const resolvedTitle = title ?? 'Deep dive';

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      lead={description}
      className={className}
    >
      <div className="stack">
        <DeepLessonTopicPicker
          items={normalizedTopics}
          activeId={activeTopicId}
          onSelect={setSelectedTopicId}
          ariaLabel={pickerLabel}
        />

        {activeTopic ? (
          <div className="stack" aria-live="polite" aria-atomic="true">
            {renderTopic ? renderTopic(activeTopic) : renderDefaultTopic(activeTopic)}
          </div>
        ) : (
          <p className="quiet">No topics available.</p>
        )}
      </div>
    </LessonSection>
  );
}
