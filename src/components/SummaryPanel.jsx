import { isValidElement } from 'react';
import { LessonSection } from './LessonSection';
import { ProgressIndicator } from './ProgressIndicator';

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

function normalizeProgress(progress) {
  if (progress == null || progress === false) {
    return null;
  }

  if (typeof progress === 'number') {
    return {
      label: 'Progress',
      value: progress,
      max: 100,
      showPercent: true,
    };
  }

  return progress;
}

function renderListItem(item, index) {
  if (item == null) {
    return null;
  }

  if (typeof item === 'string' || typeof item === 'number' || isValidElement(item)) {
    return <li key={index}>{item}</li>;
  }

  const title = item.title ?? item.label ?? item.text ?? item.value;
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

function renderGroupCard(label, items) {
  const normalizedItems = normalizeItems(items).filter((item) => item != null);

  if (normalizedItems.length === 0) {
    return null;
  }

  return (
    <article className="story-card">
      <strong>{label}</strong>
      <ul className="bullet-list bullet-list-compact">
        {normalizedItems.map((item, index) => renderListItem(item, index))}
      </ul>
    </article>
  );
}

export function SummaryPanel({
  label,
  title,
  titleAs = 'h2',
  intro,
  learningGoals = [],
  prerequisites = [],
  keyPoints = [],
  progress,
  actions,
  footer,
  className = '',
  ...sectionProps
}) {
  const resolvedTitle = title ?? 'Summary';
  const progressConfig = normalizeProgress(progress);
  const groups = [
    renderGroupCard('Learning goals', learningGoals),
    renderGroupCard('Prerequisites', prerequisites),
    renderGroupCard('Key points', keyPoints),
  ].filter(Boolean);

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
        {progressConfig ? <ProgressIndicator {...progressConfig} titleAs="h3" /> : null}

        {groups.length > 0 ? <div className="tool-story-grid">{groups}</div> : null}
      </div>
    </LessonSection>
  );
}
