import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (keyName: string) => {
  const [storedValue, setStoredValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      setStoredValue(value ? value : undefined);
    } catch {}
  }, [keyName]);

  const setValueForKey = useCallback(
    (newValue: string) => {
      try {
        window.localStorage.setItem(keyName, newValue);
      } catch (err) {}
      setStoredValue(newValue);
    },
    [keyName]
  );

  return [storedValue, setValueForKey];
};
