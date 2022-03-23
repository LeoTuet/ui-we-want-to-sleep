import { PropsWithChildren } from "react";
import styles from "./LegalSection.module.scss";

interface LegalSectionProps {
  header: string;
}

export const LegalSection = ({
  children,
  header,
}: PropsWithChildren<LegalSectionProps>) => {
  return (
    <section className={styles.legalSection}>
      <h2 className={styles.legalSubheader}> {header}</h2>
      <div className={styles.legalText}>{children}</div>
    </section>
  );
};
