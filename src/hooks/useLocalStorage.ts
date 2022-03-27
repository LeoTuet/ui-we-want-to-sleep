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
    let storedValue = localStorage.getItem(key);
    return storedValue == null ? initialValue : JSON.parse(storedValue);
  });

  return [
    value,
    (v, { remember = true }: SetOptions = {}) => {
      if (typeof v === "function") {
        setValue((previous) => {
          const newValue = v(previous);
          if (!remember || newValue === initialValue) {
            localStorage.removeItem(key);
          } else {
            localStorage.setItem(key, JSON.stringify(newValue));
          }
          return newValue;
        });
      } else {
        setValue(v);
        if (!remember || v === initialValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(v));
        }
      }
    },
  ];
}
