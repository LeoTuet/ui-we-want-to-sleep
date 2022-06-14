import classNames from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from "react";

import styles from "./Button.module.scss";

export function Button({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classNames(styles.button, className)} {...rest}>
      {children}
    </button>
  );
}

export function Input({
  className,
  children,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={classNames(styles.button, className)} {...rest}>
      {children}
    </input>
  );
}

export function A({
  className,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={classNames(styles.button, className)} {...rest}>
      {children}
    </a>
  );
}
