function normalizeItems(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.filter((item) => item && typeof item === 'object' && item.id != null);
}

export function DeepLessonTopicPicker({ items, activeId, onSelect, ariaLabel }) {
  const normalizedItems = normalizeItems(items);

  if (normalizedItems.length === 0) {
    return null;
  }

  return (
    <div className="tool-tabs" role="tablist" aria-label={ariaLabel}>
      {normalizedItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeId === item.id ? 'pill pill-active' : 'pill'}
          onClick={() => onSelect(item.id)}
        >
          {item.title ?? item.id}
        </button>
      ))}
    </div>
  );
}
