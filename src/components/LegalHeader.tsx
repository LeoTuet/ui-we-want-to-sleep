import React from "react";
import { TypingHeading } from "./TypingHeading";
import styles from "./LegalHeader.module.scss";
import classNames from "classnames"

interface LegalHeaderProps {
  text: string;
  hlStart: number;
  hlEnd: number;
}

export const LegalHeader = ({ text, hlStart, hlEnd }: LegalHeaderProps) => {
  return (
      <div className={classNames(styles.starBackground, styles.minStarBackground)} tabIndex={0}>
        <TypingHeading finalText={text} hlStart={hlStart} hlEnd={hlEnd} />
      </div>
  );
};
