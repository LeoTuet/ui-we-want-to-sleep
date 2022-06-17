import { useState } from "react";

type Serializable =
  | string
  | number
  | boolean
  | undefined
  | null
  | SerializableObject;

interface SerializableObject {
  [key: string]: Serializable;
}

type SetValue<T> = (
  value: T | ((previous: T) => T),
  options?: SetOptions
) => void;

interface SetOptions {
  remember?: boolean;
}

export function useLocalStorage<T extends Serializable>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue == null ? initialValue : JSON.parse(storedValue);
  });

  return [
    value,
    (action, { remember = true }: SetOptions = {}) => {
      const actionFunction =
        typeof action === "function" ? action : () => action;

      setValue((previous) => {
        const newValue = actionFunction(previous);
        if (!remember || newValue === initialValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
        return newValue;
      });
    },
  ];
}
