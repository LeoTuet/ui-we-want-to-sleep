import React from "react";
import { TypingHeading } from "./TypingHeading";
import styles from "./LegalHeader.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import sheep from "../assets/sheep.png";

interface LegalHeaderProps {
  text: string;
  hlStart: number;
  hlEnd: number;
}

export const LegalHeader = ({ text, hlStart, hlEnd }: LegalHeaderProps) => {
  return (
    <div
      className={classNames(styles.starBackground, styles.adjustedStarBackground)}
      tabIndex={0}
    >
      <div className={styles.navigationBar}>
        <div className={styles.navigation}>
          <Link to="/" className={styles.link}>
            Startseite
          </Link>
          <img src={sheep} alt={"wwts sheep"} className={styles.sheep} />
          <Link to="/" className={styles.link}>
            Abstimmung
          </Link>
        </div>
      </div>
      <TypingHeading finalText={text} hlStart={hlStart} hlEnd={hlEnd} />
    </div>
  );
};
