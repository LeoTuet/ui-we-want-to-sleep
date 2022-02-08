import styles from "./VotingSection.module.scss";

export const VotingSection = () => {
  const captchaSaved = false;

  return (
    <div className={styles.votingSection}>
      <h4>Welchen Unterrichtsbeginn wünscht du dir?</h4>
      <p>
        Du kannst nur einmal abstimmen und deine Wahl nicht mehr ändern. Wähle
        weise.
      </p>
      {!captchaSaved && (
        <div className={styles.captchaContainer}>
          <p>###Captcha goes here###</p>
        </div>
      )}

      {captchaSaved && (
        <div className={styles.buttonContainer}>
          <button className={styles.voteButton}>07:30 Uhr</button>
          <button className={styles.voteButton}>08:15 Uhr</button>
        </div>
      )}
    </div>
  );
};
