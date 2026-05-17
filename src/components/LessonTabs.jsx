import { useEffect, useRef, useState } from 'react';

function getValidTabIdFromHash(hash, tabIds) {
  const rawHash = hash.startsWith('#') ? hash.slice(1) : hash;

  if (!rawHash) {
    return null;
  }

  if (tabIds.includes(rawHash)) {
    return rawHash;
  }

  const normalizedHash = rawHash.replace(/^tab-(trigger|panel)-/, '');
  return tabIds.includes(normalizedHash) ? normalizedHash : null;
}

function getInitialTabId(hash, tabIds, defaultTabId) {
  const hashTabId = getValidTabIdFromHash(hash, tabIds);
  if (hashTabId) {
    return hashTabId;
  }

  return tabIds.includes(defaultTabId) ? defaultTabId : (tabIds[0] ?? null);
}

function getFallbackTabId(tabIds, defaultTabId) {
  return tabIds.includes(defaultTabId) ? defaultTabId : (tabIds[0] ?? null);
}

export function LessonTabs({ tabs, ariaLabel, defaultTabId }) {
  const tabIds = tabs.map((tab) => tab.id);
  const initialHash = typeof window !== 'undefined' ? window.location.hash : '';
  const initialTabId = getInitialTabId(initialHash, tabIds, defaultTabId);
  const [activeTabId, setActiveTabId] = useState(initialTabId);
  const panelRefs = useRef(new Map());
  const hasMountedRef = useRef(false);
  const shouldAutoScrollOnMountRef = useRef(Boolean(getValidTabIdFromHash(initialHash, tabIds)));
  const activePanelId = tabIds.includes(activeTabId)
    ? activeTabId
    : getFallbackTabId(tabIds, defaultTabId);

  useEffect(() => {
    if (hasMountedRef.current) {
      return;
    }

    hasMountedRef.current = true;

    if (!shouldAutoScrollOnMountRef.current) {
      return;
    }

    const panel = panelRefs.current.get(activePanelId);

    if (!panel) {
      return;
    }

    panel.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

    if (typeof panel.focus === 'function') {
      try {
        panel.focus({ preventScroll: true });
      } catch {
        panel.focus();
      }
    }
  }, [activePanelId]);

  function activateTab(tabId) {
    if (tabId !== activeTabId) {
      setActiveTabId(tabId);
    }
  }

  return (
    <section className="surface lesson-tabs">
      <div className="lesson-tabs-bar" role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-trigger-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activePanelId === tab.id}
            aria-controls={`tab-panel-${tab.id}`}
            tabIndex={activePanelId === tab.id ? 0 : -1}
            className={activePanelId === tab.id ? 'pill pill-active' : 'pill'}
            onClick={() => activateTab(tab.id)}
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
            hidden={activePanelId !== tab.id}
            tabIndex={activePanelId === tab.id ? -1 : undefined}
            ref={(node) => {
              if (node) {
                panelRefs.current.set(tab.id, node);
              } else {
                panelRefs.current.delete(tab.id);
              }
            }}
            className="lesson-tab-panel"
          >
            {tab.content}
          </section>
        ))}
      </div>
    </section>
  );
}
