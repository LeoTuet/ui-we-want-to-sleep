import React from "react";
import { TypingHeading } from "./TypingHeading";
import styles from "./LegalHeader.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import sheep from "../assets/sheep.png";
import { StarBackground } from "./StarBackground";

interface LegalHeaderProps {
  text: string;
  hlStart: number;
  hlEnd: number;
}

export const LegalHeader = ({ text, hlStart, hlEnd }: LegalHeaderProps) => {
  return (
    <header>
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
          </nav>
        </div>
        <TypingHeading finalText={text} hlStart={hlStart} hlEnd={hlEnd} />
      </StarBackground>
    </header>
  );
};
