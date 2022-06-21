import classNames from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from "react";

import styles from "./Button.module.scss";

const buttonVariants = {
  default: styles.btnDefault,
  admin: styles.btnAdmin,
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof buttonVariants;
};

export function WWTSButton({
  className,
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.btnBase, buttonVariants[variant], className)}
      {...rest}
    >
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
