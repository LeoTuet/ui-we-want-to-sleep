import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./SelectSlider.module.scss";

interface SelectProps<T extends string> {
  name: string;
  options: Option<T>[];
  value: T;
  onChange(value: T): void;
}

type Option<T extends string> = T | { name: T; node: ReactNode };

export function SelectSlider<T extends string>({
  name,
  options,
  value,
  onChange,
}: SelectProps<T>) {
  return (
    <div className={styles.slider} title={name} aria-label={name}>
      {options.map((option) =>
        typeof option === "string" ? (
          <button
            className={classNames({ [styles.selected]: option === value })}
            onClick={() => {
              if (option !== value) {
                onChange(option);
              }
            }}
            key={option}
          >
            {option}
          </button>
        ) : (
          <button
            className={classNames({ [styles.selected]: option.name === value })}
            onClick={() => {
              if (option.name !== value) {
                onChange(option.name);
              }
            }}
            key={option.name}
          >
            {option.node}
          </button>
        )
      )}
    </div>
  );
}
