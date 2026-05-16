import { isValidElement } from 'react';
import { LessonSection } from './LessonSection';
import { MistakeList } from './MistakeList';
import { PracticePrompt } from './PracticePrompt';

function renderFooterContent(content) {
  if (!content) {
    return null;
  }

  if (typeof content === 'string') {
    return <p className="quiet">{content}</p>;
  }

  return content;
}

function normalizeItems(items) {
  return Array.isArray(items) ? items : [];
}

function renderTipItem(item, index) {
  if (item == null) {
    return null;
  }

  if (typeof item === 'string' || typeof item === 'number' || isValidElement(item)) {
    return <li key={index}>{item}</li>;
  }

  const title = item.title ?? item.label ?? item.text;
  const detail = item.description ?? item.detail ?? item.body ?? item.explanation ?? item.note;

  if (item.children != null) {
    return <li key={item.id ?? title ?? index}>{item.children}</li>;
  }

  if (!title && !detail) {
    return null;
  }

  return (
    <li key={item.id ?? title ?? index}>
      {title ? <strong>{title}</strong> : null}
      {detail ? <span className="quiet">{detail}</span> : null}
    </li>
  );
}

function renderTipsGroup(tips) {
  const normalizedTips = normalizeItems(tips).filter((item) => item != null);

  if (normalizedTips.length === 0) {
    return null;
  }

  return (
    <article className="story-card">
      <strong>What to remember</strong>
      <ul className="bullet-list bullet-list-compact">
        {normalizedTips.map((tip, index) => renderTipItem(tip, index))}
      </ul>
    </article>
  );
}

function renderPracticePrompt(item, index) {
  if (item == null) {
    return null;
  }

  const prompt = typeof item === 'string' ? { prompt: item } : item;
  const title = prompt.title ?? prompt.label ?? 'Try it';
  const promptText = prompt.prompt ?? prompt.question ?? prompt.task ?? prompt.text;

  if (!promptText) {
    return null;
  }

  return (
    <PracticePrompt
      key={prompt.id ?? title ?? index}
      label={index === 0 ? 'Practice' : undefined}
      title={title}
      prompt={promptText}
      hint={prompt.hint}
      expectedOutcome={prompt.expectedOutcome ?? prompt.task}
      actions={prompt.actions}
      footer={prompt.footer}
    />
  );
}

function renderPracticePrompts(practicePrompts) {
  const normalizedPrompts = normalizeItems(practicePrompts).filter((item) => item != null);

  if (normalizedPrompts.length === 0) {
    return null;
  }

  return (
    <div className="stack">
      {normalizedPrompts.map((item, index) => renderPracticePrompt(item, index))}
    </div>
  );
}

export function TipsPanel({
  label,
  title,
  titleAs = 'h2',
  intro,
  tips = [],
  practicePrompts = [],
  mistakes = [],
  actions,
  footer,
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Tips';

  return (
    <LessonSection
      {...sectionProps}
      eyebrow={label}
      title={resolvedTitle}
      titleAs={titleAs}
      lead={intro}
      actions={actions}
      footer={renderFooterContent(footer)}
      className={className}
    >
      <div className="stack">
        {renderTipsGroup(tips)}

        {renderPracticePrompts(practicePrompts)}

        {normalizeItems(mistakes).filter((item) => item != null).length > 0 ? (
          <MistakeList
            label="What to avoid"
            title="Common mistakes"
            description="Use these as quick reminders."
            mistakes={mistakes}
          />
        ) : null}
      </div>
    </LessonSection>
  );
}
