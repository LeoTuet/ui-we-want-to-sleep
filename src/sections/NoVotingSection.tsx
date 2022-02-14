import styles from "./NoVotingSection.module.scss";
import sofa from "../assets/sofa.png";

export interface NoVotingSectionProps {
  error?: BallotError;
}

export type BallotError = "NO_RUNNING_BALLOT" | "SERVER_ERROR";

export const NoVotingSection = ({
  error = "NO_RUNNING_BALLOT",
}: NoVotingSectionProps) => {
  const getErrorText = (error: BallotError): string => {
    switch (error) {
      case "NO_RUNNING_BALLOT":
        return "Aktuell wird nicht abgestimmt. Komm’ vielleicht später noch mal!";
      case "SERVER_ERROR":
        return "Wir haben scheinbar Probleme mit unserem Server :(";
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h4>Lehn’ dich zurück!</h4>
          <p>{getErrorText(error)}</p>
        </div>

        <div className={styles.sofaContainer}>
          <img src={sofa} className={styles.sofa} alt="" />
        </div>
      </div>
    </div>
  );
};
