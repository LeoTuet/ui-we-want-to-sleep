import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import sheep from "../assets/sheep.png";
import styles from "./NavigationBar.module.scss";
import { OptionsPanel } from "./OptionsPanel";

export const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.navigation}>
        <Link to="/" className={styles.link}>
          {t("navigation.landingPage")}
        </Link>
        <img src={sheep} alt={"wwts sheep"} className={styles.sheep} />
        <Link to="/result" className={styles.link}>
          {t("navigation.results")}
        </Link>
      </div>
      <div className={styles.optionsContainer}>
        <OptionsPanel />
      </div>
    </nav>
  );
};
