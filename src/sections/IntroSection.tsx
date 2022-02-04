import { TypingHeading } from "../components/TypingHeading";
import styles from "./IntroSection.module.scss";

import stars from '../assets/stars-background.png'

export const IntroSection = () => {
  return (
    <div className={styles.introSection}>
      <img src={stars} className={styles.starBackground}></img>
      <div className={styles.innerSection}>
        <TypingHeading />
        <p className={styles.description}>
          Es ist wissenschaftlich bewiesen, dass das Gehirn erst ab ca. 9 Uhr
          richtig leistungsfähig ist. Unsere Berufsschule startet um 7:30. Das
          geht besser.
        </p>
      </div>
    </div>
  );
};
