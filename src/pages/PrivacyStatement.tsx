import { useTranslation } from "react-i18next";

import { ExternalLink } from "../components/ExternalLink";
import { SharedHeaderSticky } from "../components/SharedHeaderSticky";
import { SharedSection } from "../sections/SharedSection";
import styles from "./Shared.module.scss";

export const PrivacyStatement = () => {
  const { t } = useTranslation();

  return (
    <>
      <SharedHeaderSticky text={t("privacy.header")} />
      <main className={styles.background}>
        <div className={styles.container}>
          <SharedSection id="intro" header={t("privacy.intro.header")}>
            <p> {t("privacy.intro.firstParagraph")} </p>
            <p> {t("privacy.intro.secondParagraph")} </p>
            <p> {t("privacy.intro.thridParagraph")} </p>
          </SharedSection>
          <SharedSection header={t("privacy.tableOfContents")}>
            <ul>
              <li>
                <a href="#intro"> {t("privacy.intro.header")} </a>
              </li>
              <li>
                <a href="#responsible">
                  {" "}
                  {t("privacy.responsibilities.header")}{" "}
                </a>
              </li>
              <li>
                <a href="#overview">
                  {" "}
                  {t("privacy.overviewOverProcesses.header")}{" "}
                </a>
              </li>
              <li>
                <a href="#legal-bases">
                  {" "}
                  {t("privacy.relevantLegalBases.header")}{" "}
                </a>
              </li>
              <li>
                <a href="#security"> {t("privacy.security.header")} </a>
              </li>
              <li>
                <a href="#deletion"> {t("privacy.deletionOfData.header")} </a>
              </li>
              <li>
                <a href="#cookies"> {t("privacy.useOfCookies.header")} </a>
              </li>
              <li>
                <a href="#webhosting"> {t("privacy.webhosting.header")} </a>
              </li>
              <li>
                <a href="#vote"> {t("privacy.votes.header")} </a>
              </li>
              <li>
                <a href="#changes"> {t("privacy.updates.header")} </a>
              </li>
              <li>
                <a href="#rights"> {t("privacy.rights.header")} </a>
              </li>
              <li>
                <a href="#definitions"> {t("privacy.definitions.header")} </a>
              </li>
            </ul>
          </SharedSection>
          <SharedSection
            id="responsible"
            header={t("privacy.responsibilities.header")}
          >
            <p>
              T??ting, Leopold <br />
              Starnberger Weg 15c <br />
              82110, Germering, Germany
            </p>
            <p className={styles.list}>
              {t("privacy.responsibilities.firstParagraph")}
              <ExternalLink
                href="mailto:info@wewanttosleep.de"
                text="info@wewanttosleep.de"
              />
            </p>
            <p className={styles.list}>
              {t("privacy.responsibilities.secondParagraph")}
              <ExternalLink href="https://wewanttosleep.de/impressum" />
            </p>
          </SharedSection>
          <SharedSection
            id="overview"
            header={t("privacy.overviewOverProcesses.header")}
          >
            <p> {t("privacy.overviewOverProcesses.firstParagraph")} </p>
            <p>
              <strong>
                {" "}
                {t("privacy.overviewOverProcesses.secondParagraph.header")}{" "}
              </strong>
              {t("privacy.overviewOverProcesses.secondParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.overviewOverProcesses.thridParagraph.header")}{" "}
              </strong>
              {t("privacy.overviewOverProcesses.thridParagraph.content")}
            </p>
          </SharedSection>
          <SharedSection
            id="legal-bases"
            header={t("privacy.relevantLegalBases.header")}
          >
            <p> {t("privacy.relevantLegalBases.firstParagraph")} </p>
            <p> {t("privacy.relevantLegalBases.secondParagraph")} </p>
            <p> {t("privacy.relevantLegalBases.thirdParagraph")} </p>
            <p> {t("privacy.relevantLegalBases.fourthParagraph")} </p>
          </SharedSection>
          <SharedSection id="security" header={t("privacy.security.header")}>
            <p> {t("privacy.security.firstParagraph")} </p>
            <p> {t("privacy.security.secondParagraph")} </p>
            <p>
              <strong> {t("privacy.security.thirdParagraph.header")} </strong>
              {t("privacy.security.thirdParagraph.content")}
            </p>
          </SharedSection>
          <SharedSection
            id="deletion"
            header={t("privacy.deletionOfData.header")}
          >
            <p> {t("privacy.deletionOfData.firstParagraph")} </p>
            <p> {t("privacy.deletionOfData.secondParagraph")} </p>
            <p> {t("privacy.deletionOfData.thirdParagraph")} </p>
          </SharedSection>
          <SharedSection id="cookies" header={t("privacy.useOfCookies.header")}>
            <p> {t("privacy.useOfCookies.firstParagraph")} </p>
            <p>
              <strong>
                {" "}
                {t("privacy.useOfCookies.secondParagraph.header")}{" "}
              </strong>
              {t("privacy.useOfCookies.secondParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.useOfCookies.thirdParagraph.header")}
              </strong>
              {t("privacy.useOfCookies.thirdParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.useOfCookies.fourthParagraph.header")}{" "}
              </strong>
              {t("privacy.useOfCookies.fourthParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.useOfCookies.fifthParagraph.header")}{" "}
              </strong>
              {t("privacy.votes.fifthParagraph.content")}
            </p>
          </SharedSection>
          <SharedSection
            id="webhosting"
            header={t("privacy.webhosting.header")}
          >
            <p> {t("privacy.webhosting.firstParagraph")} </p>
            <p> {t("privacy.webhosting.secondParagraph")} </p>
            <p>
              <strong> {t("privacy.webhosting.thirdParagraph.header")} </strong>
              {t("privacy.webhosting.thirdParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.webhosting.fourhtParagraph.header")}{" "}
              </strong>
              {t("privacy.webhosting.fourhtParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.webhosting.fifthParagraph.header")} </strong>
              {t("privacy.webhosting.fifthParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.webhosting.sixthParagraph.header")} </strong>
              {t("privacy.webhosting.sixthParagraph.content")}
            </p>
            <h4>{t("privacy.webhosting.subSection.header")}</h4>
            <p>
              <strong>
                {" "}
                {t("privacy.webhosting.subSection.firstParagraph.header")}{" "}
              </strong>
              {t("privacy.webhosting.subSection.firstParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.webhosting.subSection.secondParagraph.header")}{" "}
              </strong>
              {t("privacy.webhosting.subSection.secondParagraph.content")}
            </p>
            <p className={styles.list}>
              <strong>Website: </strong>
              <ExternalLink href="https://www.hetzner.com" />
            </p>
            <p className={styles.list}>
              <strong>
                {" "}
                {t("privacy.webhosting.subSection.privacyStatement")}{" "}
              </strong>
              <ExternalLink href="https://www.hetzner.com/de/rechtliches/datenschutz" />
            </p>
            <p className={styles.list}>
              <strong>
                {" "}
                {t("privacy.webhosting.subSection.dataPrivacyFAQ")}{" "}
              </strong>
              <ExternalLink href="https://docs.hetzner.com/de/general/general-terms-and-conditions/data-privacy-faq/" />
            </p>
          </SharedSection>
          <SharedSection id="vote" header={t("privacy.votes.header")}>
            <p> {t("privacy.votes.firstParagraph")} </p>
            <p>
              <strong> {t("privacy.votes.secondParagraph.header")} </strong>
              {t("privacy.votes.secondParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.votes.thirdParagraph.header")} </strong>
              {t("privacy.votes.thirdParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.votes.fourthParagraph.header")} </strong>
              {t("privacy.votes.fourthParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.votes.fifthParagraph.header")} </strong>
              {t("privacy.votes.fifthParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.votes.sixthParagraph.header")} </strong>
              {t("privacy.votes.sixthParagraph.content")}
            </p>
          </SharedSection>
          <SharedSection id="changes" header={t("privacy.updates.header")}>
            <p> {t("privacy.updates.firstParagraph")} </p>
            <p> {t("privacy.updates.secondParagraph")} </p>
          </SharedSection>
          <SharedSection id="rights" header={t("privacy.rights.header")}>
            <p> {t("privacy.rights.firstParagraph")} </p>
            <p>
              <strong> {t("privacy.rights.secondParagraph.header")} </strong>
              {t("privacy.rights.secondParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.rights.thirdParagraph.header")} </strong>
              {t("privacy.rights.thirdParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.rights.fourthParagraph.header")} </strong>
              {t("privacy.rights.fourthParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.rights.fifthParagraph.header")} </strong>
              {t("privacy.rights.fifthParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.rights.sixthParagraph.header")}</strong>
              {t("privacy.rights.sixthParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.rights.seventhParagraph.header")} </strong>
              {t("privacy.rights.seventhParagraph.content")}
            </p>
            <p>
              <strong> {t("privacy.rights.eighthParagraph.header")} </strong>
              {t("privacy.rights.eighthParagraph.content")}
            </p>
          </SharedSection>
          <SharedSection
            id="definitions"
            header={t("privacy.definitions.header")}
          >
            <p> {t("privacy.definitions.firstParagraph")} </p>
            <p>
              <strong>
                {" "}
                {t("privacy.definitions.secondParagraph.header")}{" "}
              </strong>
              {t("privacy.definitions.secondParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.definitions.thirdParagraph.header")}{" "}
              </strong>
              {t("privacy.definitions.thirdParagraph.content")}
            </p>
            <p>
              <strong>
                {" "}
                {t("privacy.definitions.fourthParagraph.header")}{" "}
              </strong>
              {t("privacy.definitions.fourthParagraph.content")}
            </p>
          </SharedSection>
          <p>
            <ExternalLink
              href="https://datenschutz-generator.de/"
              title={t("privacy.external.header")}
              text={t("privacy.external.content")}
            />
          </p>
        </div>
      </main>
    </>
  );
};
