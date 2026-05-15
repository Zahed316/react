import { useState } from 'react';

export function LessonTabs({ tabs, ariaLabel, defaultTabId }) {
  const initialTabId = defaultTabId ?? tabs[0]?.id ?? null;
  const [activeTabId, setActiveTabId] = useState(initialTabId);

  return (
    <section className="surface lesson-tabs">
      <div className="lesson-tabs-bar" role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-trigger-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTabId === tab.id}
            aria-controls={`tab-panel-${tab.id}`}
            tabIndex={activeTabId === tab.id ? 0 : -1}
            className={activeTabId === tab.id ? 'pill pill-active' : 'pill'}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="lesson-tab-panels">
        {tabs.map((tab) => (
          <section
            key={tab.id}
            id={`tab-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-trigger-${tab.id}`}
            hidden={activeTabId !== tab.id}
            className="lesson-tab-panel"
          >
            {tab.content}
          </section>
        ))}
      </div>
    </section>
  );
}