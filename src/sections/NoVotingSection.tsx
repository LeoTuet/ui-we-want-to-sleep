import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { CouchPanel } from "../components/CouchPanel";
import styles from "./NoVotingSection.module.scss";

export interface NoVotingSectionProps {
  type?: NoVotingType;
}

export type NoVotingType =
  | "NO_RUNNING_BALLOT"
  | "SERVER_ERROR"
  | "INVALID"
  | "USED"
  | "LOADING"
  | "NONE_EXISTENT"
  | "SUCCESS"
  | "INVALID_CAPTCHA";

export const NoVotingSection = ({
  type = "NO_RUNNING_BALLOT",
}: NoVotingSectionProps) => {
  const { t } = useTranslation();

  const getMainText = useCallback(() => {
    return t(`noVoting.${type}.header`);
  }, [type, t]);

  const getSubText = useCallback(() => {
    return t(`noVoting.${type}.content`);
  }, [type, t]);

  const getFlipped = useCallback(() => {
    return type === "NONE_EXISTENT";
  }, [type]);

  return (
    <section
      id={type === "SUCCESS" ? "afterVote" : ""}
      className={styles.section}
    >
      <CouchPanel
        mainText={getMainText()}
        subText={getSubText()}
        flipped={getFlipped()}
      />
    </section>
  );
};
