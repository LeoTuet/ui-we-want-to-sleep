import { useTranslation } from "react-i18next";

import styles from "./ContentSection.module.scss";

export const ContentSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.contentSection}>
      <div className={styles.content}>
        <p>{t("content.firstParagraph")}</p>
        <p>{t("content.secondParagraph")}</p>
        <p>{t("content.thirdParagraph")}</p>
        <div className={styles.disclaimer}>
          <p>
            <strong>Disclaimer:</strong> {t("content.disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
};
