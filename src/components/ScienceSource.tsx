import { AnchorHTMLAttributes, ReactNode } from "react";

import styles from "./ScienceSource.module.scss";

export interface ExternalLinkArgs
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  name: ReactNode;
  publisher: ReactNode;
}

export const ScienceSource = ({
  href,
  name = href,
  publisher,
  ...rest
}: ExternalLinkArgs) => (
  <a
    className={styles.source}
    {...rest}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <div className={styles.publisher}>{publisher}</div>
    <div className={styles.name}>{name}</div>
  </a>
);
