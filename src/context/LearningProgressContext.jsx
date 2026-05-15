import { createContext, useContext, useMemo } from 'react';
import { badgeDefinitions, learningModules } from '../data/course';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const LearningProgressContext = createContext(null);

const STORAGE_KEYS = {
  completed: 'react-lab.completed-modules.v3',
  current: 'react-lab.current-module.v3',
  gamification: 'react-lab.gamification.v3',
};

const initialGamificationState = {
  xp: 0,
  streakDays: 0,
  lastActiveDate: null,
  solvedQuizIds: [],
};

function getLocalDateKey(date = new Date()) {
  return date.toLocaleDateString('sv-SE');
}

function getYesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return getLocalDateKey(date);
}

function advanceActivity(previousState, xpGain = 0) {
  const todayKey = getLocalDateKey();

  let streakDays = 1;
  if (previousState.lastActiveDate === todayKey) {
    streakDays = previousState.streakDays || 1;
  } else if (previousState.lastActiveDate === getYesterdayKey()) {
    streakDays = (previousState.streakDays || 0) + 1;
  }

  return {
    ...previousState,
    xp: previousState.xp + xpGain,
    streakDays,
    lastActiveDate: todayKey,
  };
}

export function LearningProgressProvider({ children }) {
  const [completedModuleIds, setCompletedModuleIds] = useLocalStorageState(
    STORAGE_KEYS.completed,
    [],
    {
      legacyKeys: ['react-lab.completed-modules.v2'],
      migrate: (value) => (Array.isArray(value) ? value : []),
    },
  );
  const [currentModuleId, setCurrentModuleId] = useLocalStorageState(STORAGE_KEYS.current, 'home', {
    legacyKeys: ['react-lab.current-module.v2'],
    migrate: (value) => (typeof value === 'string' ? value : 'home'),
  });
  const [gamification, setGamification] = useLocalStorageState(
    STORAGE_KEYS.gamification,
    initialGamificationState,
    {
      legacyKeys: ['react-lab.gamification.v2'],
      migrate: (value) => ({
        ...initialGamificationState,
        ...(value && typeof value === 'object' ? value : {}),
        solvedQuizIds: Array.isArray(value?.solvedQuizIds)
          ? value.solvedQuizIds
          : initialGamificationState.solvedQuizIds,
      }),
    },
  );

  const moduleIds = useMemo(() => learningModules.map((module) => module.id), []);
  const completedSet = useMemo(() => new Set(completedModuleIds), [completedModuleIds]);
  const completedCount = learningModules.filter((module) => completedSet.has(module.id)).length;
  const totalCount = learningModules.length;
  const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const solvedQuizCount = gamification.solvedQuizIds.length;
  const level = Math.floor(gamification.xp / 100) + 1;
  const xpIntoLevel = gamification.xp % 100;
  const xpToNextLevel = 100 - xpIntoLevel;

  const progressSnapshot = useMemo(
    () => ({
      completedCount,
      completedSet,
      totalCount,
      currentModuleId,
      lastActiveDate: gamification.lastActiveDate,
      moduleIds,
      solvedQuizCount,
      streakDays: gamification.streakDays,
      xp: gamification.xp,
    }),
    [
      completedCount,
      completedSet,
      currentModuleId,
      gamification.lastActiveDate,
      totalCount,
      moduleIds,
      solvedQuizCount,
      gamification.streakDays,
      gamification.xp,
    ],
  );

  const unlockedBadges = useMemo(
    () => badgeDefinitions.filter((badge) => badge.test(progressSnapshot)),
    [progressSnapshot],
  );
  const unlockedBadgeIds = useMemo(
    () => new Set(unlockedBadges.map((badge) => badge.id)),
    [unlockedBadges],
  );
  const nextBadge = badgeDefinitions.find((badge) => !badge.test(progressSnapshot)) ?? null;

  function awardXp(xpGain) {
    setGamification((previousState) => advanceActivity(previousState, xpGain));
  }

  function markQuizSolved(quizId, xpGain = 15) {
    setGamification((previousState) => {
      const alreadySolved = previousState.solvedQuizIds.includes(quizId);

      if (alreadySolved) {
        return advanceActivity(previousState, 0);
      }

      return advanceActivity(
        {
          ...previousState,
          solvedQuizIds: [...previousState.solvedQuizIds, quizId],
        },
        xpGain,
      );
    });
  }

  function toggleModuleComplete(moduleId) {
    setCompletedModuleIds((previousIds) => {
      if (previousIds.includes(moduleId)) {
        return previousIds.filter((id) => id !== moduleId);
      }

      return [...previousIds, moduleId];
    });
  }

  function markModuleComplete(moduleId, xpGain) {
    const module = learningModules.find((entry) => entry.id === moduleId);
    const reward = typeof xpGain === 'number' ? xpGain : (module?.xpReward ?? 80);

    if (completedSet.has(moduleId)) {
      return;
    }

    setCompletedModuleIds((previousIds) => [...previousIds, moduleId]);
    setGamification((previousState) => advanceActivity(previousState, reward));
  }

  function resetProgress() {
    setCompletedModuleIds([]);
    setCurrentModuleId('home');
    setGamification(initialGamificationState);
  }

  const value = {
    awardXp,
    badgeDefinitions,
    completedCount,
    completedModuleIds,
    completedSet,
    currentModuleId,
    level,
    markModuleComplete,
    markQuizSolved,
    nextBadge,
    progressPercent,
    resetProgress,
    setCurrentModuleId,
    lastActiveDate: gamification.lastActiveDate,
    moduleIds,
    solvedQuizIds: gamification.solvedQuizIds,
    solvedQuizCount,
    streakDays: gamification.streakDays,
    toggleModuleComplete,
    totalCount,
    unlockedBadgeIds,
    unlockedBadges,
    xp: gamification.xp,
    xpIntoLevel,
    xpToNextLevel,
  };

  return (
    <LearningProgressContext.Provider value={value}>{children}</LearningProgressContext.Provider>
  );
}

export function useLearningProgress() {
  const context = useContext(LearningProgressContext);

  if (!context) {
    throw new Error('useLearningProgress must be used within LearningProgressProvider');
  }

  return context;
}
