import React from "react";
import styles from "./ImprintAndPrivacy.module.scss";
import { StickyLegalHeader } from "../components/StickyHeader";
import { LegalSection } from "../sections/LegalSection";
import { useTranslation } from "react-i18next";

export const Imprint = () => {
  const { t } = useTranslation();
  return (
    <>
      <StickyLegalHeader text={t("imprint.header")} />
      <main className={styles.legalBackground}>
        <div className={styles.legalContainer}>
          <LegalSection header={t("imprint.general.header")}>
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
          </LegalSection>
          <LegalSection header={t("imprint.limitationOfLiability.header")}>
            <p>{t("imprint.limitationOfLiability.content")}</p>
          </LegalSection>
          <LegalSection header={t("imprint.liabilityOfLinks.header")}>
            <p>{t("imprint.liabilityOfLinks.content")}</p>
          </LegalSection>
          <LegalSection header={t("imprint.copyright.header")}>
            <p>{t("imprint.copyright.content")}</p>
          </LegalSection>
          <LegalSection header={t("imprint.termsOfUse.header")}>
            <p>{t("imprint.termsOfUse.content")}</p>
          </LegalSection>
        </div>
      </main>
    </>
  );
};
