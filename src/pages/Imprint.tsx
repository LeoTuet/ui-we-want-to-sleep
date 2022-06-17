import { useTranslation } from "react-i18next";

import { StickySharedHeader } from "../components/StickySharedHeader";
import { SharedSection } from "../sections/SharedSection";
import styles from "./Shared.module.scss";

export const Imprint = () => {
  const { t } = useTranslation();
  return (
    <>
      <StickySharedHeader text={t("imprint.header")} />
      <main className={styles.background}>
        <div className={styles.container}>
          <SharedSection header={t("imprint.general.header")}>
            <h3>{t("imprint.general.owner")}:</h3>
            <p>
              Leopold Tüting <br />
              Starnberger Weg 15c <br />
              82110 Germering
            </p>
            <h3>{t("imprint.general.contact")}:</h3>
            <p>
              E-Mail: <a href="info@wewanttosleep.de">info@wewanttosleep.de</a>
            </p>
            <h3>{t("imprint.general.responsibilities")}:</h3>
            <p>{t("imprint.general.content")}: Leopold Tüting</p>
            <p>{t("imprint.general.sources")}: Leopold Tüting</p>
          </SharedSection>
          <SharedSection header={t("imprint.limitationOfLiability.header")}>
            <p>{t("imprint.limitationOfLiability.content")}</p>
          </SharedSection>
          <SharedSection header={t("imprint.liabilityOfLinks.header")}>
            <p>{t("imprint.liabilityOfLinks.content")}</p>
          </SharedSection>
          <SharedSection header={t("imprint.copyright.header")}>
            <p>{t("imprint.copyright.content")}</p>
          </SharedSection>
          <SharedSection header={t("imprint.termsOfUse.header")}>
            <p>{t("imprint.termsOfUse.content")}</p>
          </SharedSection>
        </div>
      </main>
    </>
  );
};
