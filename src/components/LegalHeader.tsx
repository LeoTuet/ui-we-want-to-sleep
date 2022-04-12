import React, { HTMLProps } from "react";
import { TypingHeading } from "./TypingHeading";
import styles from "./LegalHeader.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import sheep from "../assets/sheep.png";
import { StarBackground } from "./StarBackground";
import { OptionsPanel } from "./OptionsPanel";

export interface LegalHeaderProps extends HTMLProps<HTMLElement> {
  text: string;
}

export const LegalHeader = ({ text, ...rest }: LegalHeaderProps) => {
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
