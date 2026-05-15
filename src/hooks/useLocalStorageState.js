import { useEffect, useState } from 'react';

function readStoredValue(key, initialValue, legacyKeys = [], migrate) {
  if (typeof window === 'undefined') {
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  }

  const fallback = typeof initialValue === 'function' ? initialValue() : initialValue;
  const candidateKeys = [key, ...legacyKeys];

  for (const candidateKey of candidateKeys) {
    try {
      const rawValue = window.localStorage.getItem(candidateKey);
      if (rawValue === null) {
        continue;
      }

      const parsedValue = JSON.parse(rawValue);
      return typeof migrate === 'function' ? migrate(parsedValue, candidateKey) : parsedValue;
    } catch {
      // Ignore malformed entries and continue to the next fallback key.
    }
  }

  return fallback;
}

export function useLocalStorageState(key, initialValue, options = {}) {
  const { legacyKeys = [], migrate } = options;
  const [value, setValue] = useState(() => readStoredValue(key, initialValue, legacyKeys, migrate));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage errors and keep the UI usable.
    }
  }, [key, value]);

  return [value, setValue];
}