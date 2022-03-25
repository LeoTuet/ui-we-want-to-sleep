import styles from "./VotingSection.module.scss";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import React, { useCallback, useState } from "react";
import { Ballot } from "../models";

import { SerializedError } from "@reduxjs/toolkit";
import { useTranslation } from "react-i18next";

interface VotingSectionProps {
  onTokenReceive: (token: string) => void;
  ballot: {
    ballot: Ballot | undefined;
    ballotLoading: boolean | undefined;
    ballotError: SerializedError | undefined;
  };
  onVote: (identifier: string) => void;
}

export const VotingSection = ({
  onTokenReceive,
  ballot,
  onVote,
}: VotingSectionProps) => {
  const [captchaSaved, setCaptchaSaved] = useState(false);
  const { t } = useTranslation();

  const handleTokenReceive = useCallback(
    (token: string) => {
      if (!token) {
        setCaptchaSaved(false);
      }
      onTokenReceive(token);
      setCaptchaSaved(true);
    },
    [onTokenReceive]
  );

  return (
    <div className={styles.container}>
      <div className={styles.votingSection}>
        <h4 className={styles.question}>{t("voting.question")}</h4>
        <p className={styles.description}>{t("voting.description")}</p>
        {!captchaSaved && (
          <div className={styles.captchaContainer}>
            <div style={{ marginBottom: "-7px" }}>
              {/* for vertical alignment */}
              <HCaptcha
                sitekey="acdc86a2-5971-49dc-a6e9-ee96e5776e44"
                onVerify={handleTokenReceive}
              />
            </div>
          </div>
        )}

        {captchaSaved && (
          <div className={styles.buttonContainer}>
            {ballot.ballot?.options.map((option) => (
              <button
                key={option.identifier}
                className={styles.voteButton}
                onClick={() => onVote(option.identifier)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
        {ballot.ballotError && <p>{t("voting.error")}</p>}
      </div>
    </div>
  );
};
