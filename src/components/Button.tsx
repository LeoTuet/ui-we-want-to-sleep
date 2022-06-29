import classNames from "classnames";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
} from "react";

import styles from "./Button.module.scss";

const variants = {
  default: styles.btnDefault,
  admin: styles.btnAdmin,
};

type VariantType = {
  variant?: keyof typeof variants;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantType;

type InputProps = InputHTMLAttributes<HTMLInputElement> & VariantType;

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantType;

export function WWTSButton({
  className,
  children,
  variant = "default",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.btnBase, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function WWTSInput({
  className,
  children,
  variant = "admin",
  ...rest
}: InputProps) {
  return (
    <input
      className={classNames(styles.btnBase, variants[variant], className)}
      {...rest}
    >
      {children}
    </input>
  );
}

export function WWTSAnchor({
  className,
  children,
  variant = "admin",
  ...rest
}: AnchorProps) {
  return (
    <a
      className={classNames(styles.btnBase, variants[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
