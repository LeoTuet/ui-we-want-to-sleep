import classNames from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from "react";

import styles from "./Button.module.scss";

export function WWTSButton({
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

export function WWTSInput({
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

export function WWTSAnchor({
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
