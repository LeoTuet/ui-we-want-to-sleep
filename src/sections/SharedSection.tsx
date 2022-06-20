import { PropsWithChildren } from "react";

import styles from "./SharedSection.module.scss";

interface SharedSectionProps {
  header: string;
  id?: string;
}

export const SharedSection = ({
  children,
  header,
  id = "",
}: PropsWithChildren<SharedSectionProps>) => {
  return (
    <section className={styles.sharedSection} id={id}>
      <h2 className={styles.sharedSubheader}> {header}</h2>
      <div className={styles.sharedText}>{children}</div>
    </section>
  );
};
