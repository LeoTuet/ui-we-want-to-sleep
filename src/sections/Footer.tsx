import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { OptionsPanel } from "../components/OptionsPanel";
import { PointedTable } from "../components/PointedTable";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.innerFooter}>
        <h3 className={styles.captionHeading}>{t("footer.header")}</h3>
        <ul>
          <li>
            <h4>{t("footer.firstPrivacy.header")}</h4>
            <p>{t("footer.firstPrivacy.content")}</p>
          </li>
          <li>
            <h4>{t("footer.secondPublicity.header")}</h4>
            <p>{t("footer.secondPublicity.content")}</p>
          </li>
          <li>
            <h4>{t("footer.thirdAccessibility.header")}</h4>
            <p>{t("footer.thirdAccessibility.content")}</p>
          </li>
        </ul>
        <h3 className={styles.captionHeading}>{t("footer.forNerds.header")}</h3>

        <PointedTable
          rows={[
            {
              title: "Frontend",
              detail: "React (TS)",
            },
            {
              title: "Backend",
              detail: "Node Express (TS)",
            },
            {
              title: t("footer.forNerds.database"),
              detail: "MongoDB",
            },
            {
              title: "Deployment",
              detail: "Docker Swarm",
            },
          ]}
        />

        <h3 className={styles.captionHeading}>Links</h3>
        <PointedTable
          rows={[
            {
              title: "Frontend",
              detail: (
                <ExternalLink
                  href="https://github.com/LeoTuet/ui-we-want-to-sleep"
                  className={styles.link}
                  text="GitHub"
                />
              ),
            },
            {
              title: "Backend",
              detail: (
                <ExternalLink
                  href="https://github.com/LeoTuet/backend-we-want-to-sleep"
                  className={styles.link}
                  text="GitHub"
                />
              ),
            },
            {
              title: t("footer.links.about.header"),
              detail: (
                <a className={styles.link}>
                  {t("footer.links.about.ourStuff")}
                </a>
              ),
            },
          ]}
        />
        <p className={styles.centered}>
          <Link to="imprint" className={styles.link}>
            {t("footer.imprint")}
          </Link>
          <span>{" & "}</span>
          <Link to="privacy-statement" className={styles.link}>
            {t("footer.privacy")}
          </Link>
          <span>{" & "}</span>
          <Link to="sources" className={styles.link}>
            {t("footer.sources")}
          </Link>
        </p>
        <p className={styles.centered}>
          <OptionsPanel />
        </p>
      </div>
    </footer>
  );
};
