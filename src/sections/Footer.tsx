import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { PointedTable } from "../components/PointedTable";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerFooter}>
        <h3 className={styles.captionHeading}>Prinzipien unserer Arbeit</h3>
        <ul>
          <li>
            <h4>1. Datenschutz.</h4>
            <p>
              Diese Website speichert kaum Daten. Lediglich ein einziger Cookie
              wird dafür benötigt, das Captcha einzubinden.
            </p>
          </li>
          <li>
            <h4>2. Öffentlichkeit.</h4>
            <p>
              Jede Zeile Code dieses Projektes ist öffentlich und auf GitHub
              unter einer MIT Licence verfügbar.
            </p>
          </li>
          <li>
            <h4>3. Barrierefreiheit.</h4>
            <p>
              Wir haben diese Website bewusst so gestaltet, dass jeder daran
              Spaß hat.
            </p>
          </li>
        </ul>
        <h3 className={styles.captionHeading}>Für Nerds</h3>

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
              title: "Datenbank",
              detail: "MongoDB",
            },
            {
              title: "Deployment",
              detail: "Docker Swarm",
            },
            {
              title: "Captcha",
              detail: "hCaptcha",
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
              title: "Über uns",
              detail: <a className={styles.link}>Unser Zeug</a>,
            },
          ]}
        />
        <div className={styles.legalTexts}>
          <Link to="impressum" className={styles.link}>
            Impressum
          </Link>
          <p>{" & "}</p>
          <Link to="datenschutz" className={styles.link}>
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};
