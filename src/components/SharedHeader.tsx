import { HTMLProps } from "react";
import { Link } from "react-router-dom";

import sheep from "../assets/sheep.png";
import { OptionsPanel } from "./OptionsPanel";
import styles from "./SharedHeader.module.scss";
import { StarBackground } from "./StarBackground";
import { TypingHeading } from "./TypingHeading";

export interface SharedHeaderProps extends HTMLProps<HTMLElement> {
  text: string;
}

export const SharedHeader = ({ text, ...rest }: SharedHeaderProps) => {
  return (
    <header className={styles.stickyHeader} {...rest}>
      <StarBackground className={styles.adjustedStarBackground}>
        <div className={styles.navigationBar}>
          <nav className={styles.navigation}>
            <Link to="/" className={styles.link}>
              Startseite
            </Link>
            <img src={sheep} alt={"wwts sheep"} className={styles.sheep} />
            <Link to="/" className={styles.link}>
              Abstimmung
            </Link>
            <div className={styles.optionsContainer}>
              <OptionsPanel />
            </div>
          </nav>
        </div>
        <TypingHeading finalText={text} />
      </StarBackground>
    </header>
  );
};
