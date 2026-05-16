export function DeepLessonTopicPicker({ items, activeId, onSelect, ariaLabel }) {
  return (
    <div className="tool-tabs" role="tablist" aria-label={ariaLabel}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeId === item.id ? 'pill pill-active' : 'pill'}
          onClick={() => onSelect(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
