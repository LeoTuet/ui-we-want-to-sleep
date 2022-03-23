import { useTranslation } from "react-i18next";
import styles from "./ContentSection.module.scss";

export const ContentSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contentSection}>
      <p className={styles.content}>
        {t("content.firstParagraph")}
        <br /> <br />
        {t("content.secondParagraph")}
        <br /> <br />
        {t("content.thirdParagraph")}
      </p>
    </div>
  );
};
