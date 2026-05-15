const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

function getDateKey(date = new Date()) {
  return date.toLocaleDateString('sv-SE');
}

function getDaysSince(dateKey) {
  if (!dateKey) {
    return null;
  }

  const today = new Date(`${getDateKey()}T00:00:00`);
  const lastActive = new Date(`${dateKey}T00:00:00`);
  const difference = today.getTime() - lastActive.getTime();

  if (Number.isNaN(difference)) {
    return null;
  }

  return Math.max(0, Math.floor(difference / MILLISECONDS_PER_DAY));
}

function getNextIncompleteModuleId(moduleIds = [], completedSet = new Set()) {
  return moduleIds.find((moduleId) => !completedSet.has(moduleId)) ?? moduleIds[0] ?? 'setup';
}

export function getCoachState(progress) {
  const {
    completedCount = 0,
    completedSet = new Set(),
    currentModuleId = 'home',
    lastActiveDate = null,
    moduleIds = [],
    solvedQuizCount = 0,
    streakDays = 0,
    totalCount = 0,
  } = progress ?? {};

  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  const daysSinceActive = getDaysSince(lastActiveDate);
  const nextModuleId = getNextIncompleteModuleId(moduleIds, completedSet);
  const activeModuleId = currentModuleId === 'home' ? nextModuleId : currentModuleId;

  if (totalCount > 0 && completedCount === totalCount) {
    return {
      focusModuleId: 'home',
      daysSinceActive,
      progressPercent,
      state: 'celebration',
    };
  }

  if (daysSinceActive !== null && daysSinceActive >= 4 && completedCount > 0) {
    return {
      focusModuleId: activeModuleId,
      daysSinceActive,
      progressPercent,
      state: 'comeback',
    };
  }

  if (completedCount === 0 && solvedQuizCount === 0) {
    return {
      focusModuleId: nextModuleId,
      daysSinceActive,
      progressPercent,
      state: 'start',
    };
  }

  if (streakDays >= 3 || solvedQuizCount >= 3 || completedCount >= 3) {
    return {
      focusModuleId: nextModuleId,
      daysSinceActive,
      progressPercent,
      state: 'momentum',
    };
  }

  if (completedCount > 0 || solvedQuizCount > 0) {
    return {
      focusModuleId: activeModuleId,
      daysSinceActive,
      progressPercent,
      state: 'stuck',
    };
  }

  return {
    focusModuleId: nextModuleId,
    daysSinceActive,
    progressPercent,
    state: 'start',
  };
}