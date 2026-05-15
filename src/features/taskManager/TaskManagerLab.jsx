import { useState } from 'react';
import { useCourseContent } from '../../hooks/useCourseContent';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';

const TASK_STORAGE_KEY = 'react-lab.task-manager.v3';

const TASK_CATEGORY_ALIASES = {
  JS: 'js',
  React: 'react',
  Effects: 'effects',
  Routing: 'routing',
  js: 'js',
  react: 'react',
  effects: 'effects',
  routing: 'routing',
};

function createSeedTasks(seedTasks) {
  const baseTimestamp = new Date('2026-05-15T09:00:00.000Z').getTime();

  return seedTasks.map((task, index) => ({
    ...task,
    createdAt: new Date(baseTimestamp + index * 15 * 60 * 1000).toISOString(),
  }));
}

function normalizeTask(task, content) {
  const normalizedCategory =
    TASK_CATEGORY_ALIASES[task.category] ??
    content.taskManager.seedTasks.find((entry) => entry.category === task.category)?.category ??
    'js';

  return {
    ...task,
    category: normalizedCategory,
    done: Boolean(task.done),
    note: task.note ?? '',
    title: task.title ?? '',
    createdAt: task.createdAt ?? new Date().toISOString(),
  };
}

function createNewTaskFromForm(formState) {
  return {
    id: crypto.randomUUID(),
    title: formState.title.trim(),
    note: formState.note.trim(),
    category: formState.category,
    done: false,
    createdAt: new Date().toISOString(),
  };
}

export function TaskManagerLab() {
  const content = useCourseContent();
  const { awardXp } = useLearningProgress();
  const [tasks, setTasks] = useLocalStorageState(
    TASK_STORAGE_KEY,
    () => createSeedTasks(content.taskManager.seedTasks),
    {
      legacyKeys: ['react-lab.task-manager.v1'],
      migrate: (value) =>
        Array.isArray(value)
          ? value.map((task) => normalizeTask(task, content))
          : createSeedTasks(content.taskManager.seedTasks),
    },
  );
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [formState, setFormState] = useState({
    title: '',
    note: '',
    category: 'js',
  });

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === 'all' || (filter === 'active' && !task.done) || (filter === 'done' && task.done);
    const searchableText = `${task.title} ${task.note} ${task.category} ${
      content.taskManager.categories[task.category] ?? ''
    }`.toLowerCase();
    const matchesSearch = searchableText.includes(search.trim().toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const totals = {
    all: tasks.length,
    active: tasks.filter((task) => !task.done).length,
    done: tasks.filter((task) => task.done).length,
  };

  function syncTasks(nextTasks) {
    setTasks(nextTasks);
  }

  function resetForm() {
    setEditingTaskId(null);
    setFormState({
      title: '',
      note: '',
      category: 'js',
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formState.title.trim()) {
      return;
    }

    if (editingTaskId) {
      const nextTasks = tasks.map((task) =>
        task.id === editingTaskId
          ? {
              ...task,
              title: formState.title.trim(),
              note: formState.note.trim(),
              category: formState.category,
            }
          : task,
      );

      syncTasks(nextTasks);
      resetForm();
      return;
    }

    const nextTask = createNewTaskFromForm(formState);
    syncTasks([nextTask, ...tasks]);
    awardXp(10);
    resetForm();
  }

  function handleEdit(task) {
    setEditingTaskId(task.id);
    setFormState({
      title: task.title,
      note: task.note,
      category: task.category,
    });
  }

  function handleToggle(taskId) {
    const nextTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      if (!task.done) {
        awardXp(5);
      }

      return { ...task, done: !task.done };
    });

    syncTasks(nextTasks);
  }

  function handleDelete(taskId) {
    const nextTasks = tasks.filter((task) => task.id !== taskId);
    syncTasks(nextTasks);

    if (editingTaskId === taskId) {
      resetForm();
    }
  }

  function clearCompleted() {
    const removedCount = tasks.filter((task) => task.done).length;
    const nextTasks = tasks.filter((task) => !task.done);
    syncTasks(nextTasks);

    if (removedCount > 0) {
      awardXp(removedCount * 2);
    }
  }

  return (
    <section className="surface task-lab">
      <div className="task-lab-header">
        <div>
          <span className="eyebrow">{content.taskManager.header.eyebrow}</span>
          <h2>{content.taskManager.header.title}</h2>
          <p className="quiet">{content.taskManager.header.lead}</p>
        </div>

        <div className="task-stats">
          <article className="stat-card">
            <span>{content.taskManager.stats.all}</span>
            <strong>{totals.all}</strong>
          </article>
          <article className="stat-card">
            <span>{content.taskManager.stats.active}</span>
            <strong>{totals.active}</strong>
          </article>
          <article className="stat-card">
            <span>{content.taskManager.stats.done}</span>
            <strong>{totals.done}</strong>
          </article>
        </div>
      </div>

      <div className="task-layout">
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="section-heading">
            <span className="eyebrow">
              {editingTaskId
                ? content.taskManager.form.editLabel
                : content.taskManager.form.newLabel}
            </span>
            <h3>
              {editingTaskId
                ? content.taskManager.form.editHeading
                : content.taskManager.form.newHeading}
            </h3>
          </div>

          <label className="field">
            <span>{content.taskManager.form.title}</span>
            <input
              value={formState.title}
              onChange={(event) =>
                setFormState((previous) => ({ ...previous, title: event.target.value }))
              }
              placeholder={content.taskManager.form.titlePlaceholder}
            />
          </label>

          <label className="field">
            <span>{content.taskManager.form.note}</span>
            <textarea
              rows="3"
              value={formState.note}
              onChange={(event) =>
                setFormState((previous) => ({ ...previous, note: event.target.value }))
              }
              placeholder={content.taskManager.form.notePlaceholder}
            />
          </label>

          <label className="field">
            <span>{content.taskManager.form.category}</span>
            <select
              value={formState.category}
              onChange={(event) =>
                setFormState((previous) => ({ ...previous, category: event.target.value }))
              }
            >
              {Object.entries(content.taskManager.categories).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <div className="hero-actions">
            <button type="submit" className="primary-button">
              {editingTaskId
                ? content.taskManager.form.submitEdit
                : content.taskManager.form.submitNew}
            </button>
            <button type="button" className="ghost-button" onClick={resetForm}>
              {content.taskManager.form.reset}
            </button>
          </div>
        </form>

        <div className="task-feed">
          <div className="task-toolbar">
            <div
              className="filter-group"
              role="tablist"
              aria-label={content.taskManager.header.title}
            >
              {[
                ['all', content.taskManager.filters.all],
                ['active', content.taskManager.filters.active],
                ['done', content.taskManager.filters.done],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={filter === value ? 'pill pill-active' : 'pill'}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>

            <label className="field field-inline">
              <span>{content.taskManager.filters.search}</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={content.taskManager.filters.search}
              />
            </label>
          </div>

          <div className="task-list">
            {filteredTasks.length === 0 ? (
              <div className="empty-state">
                <strong>{content.taskManager.emptyState.title}</strong>
                <p>{content.taskManager.emptyState.body}</p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <article key={task.id} className={`task-item${task.done ? ' task-item-done' : ''}`}>
                  <div className="task-item-main">
                    <button
                      type="button"
                      className={task.done ? 'task-check task-check-on' : 'task-check'}
                      onClick={() => handleToggle(task.id)}
                      aria-label={content.taskManager.actions.toggle}
                    >
                      {task.done ? '✓' : '○'}
                    </button>

                    <div className="task-item-copy">
                      <div className="task-item-top">
                        <h3>{task.title}</h3>
                        <span className="pill">
                          {content.taskManager.categories[task.category]}
                        </span>
                      </div>
                      <p>{task.note || content.taskManager.actions.doneLabel}</p>
                    </div>
                  </div>

                  <div className="task-item-actions">
                    <button type="button" className="text-button" onClick={() => handleEdit(task)}>
                      {content.taskManager.actions.edit}
                    </button>
                    <button
                      type="button"
                      className="text-button"
                      onClick={() => handleDelete(task.id)}
                    >
                      {content.taskManager.actions.delete}
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          <div className="hero-actions">
            <button type="button" className="secondary-button" onClick={clearCompleted}>
              {content.taskManager.actions.clearCompleted}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
