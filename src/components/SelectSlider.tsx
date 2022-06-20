import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./SelectSlider.module.scss";

interface SelectProps<T extends string> {
  /** Name of the slider */
  name: string;
  /** Options to select from */
  options: Option<T>[];
  /** String identifying the selected element */
  value: T;
  /** Event listener providing the new value */
  onChange(value: T): void;
}

export interface Option<T extends string> {
  /** String identifying the option */
  name: T;
  /** Displayed text or element */
  node: ReactNode;
}

export function SelectSlider<T extends string>({
  name,
  options,
  value,
  onChange,
}: SelectProps<T>) {
  return (
    <span className={styles.slider} title={name} aria-label={name}>
      {options.map(({ name, node }) => (
        <button
          className={classNames({ [styles.selected]: name === value })}
          onClick={() => {
            if (name !== value) {
              onChange(name);
            }
          }}
          key={name}
        >
          {node}
        </button>
      ))}
    </span>
  );
}
