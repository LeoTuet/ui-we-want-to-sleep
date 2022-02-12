import { TypingHeading } from "../components/TypingHeading";
import { Sheep } from "../components/Sheep";
import styles from "./IntroSection.module.scss";

export const IntroSection = () => {
  return (
    <div className={styles.introSection} tabIndex={0}>
      <div className={styles.innerSection}>
        <TypingHeading />
        <p className={styles.description}>
          Es ist wissenschaftlich bewiesen, dass das Gehirn erst ab ca. 9 Uhr
          richtig leistungsfähig ist. Unsere Berufsschule startet um 7:30. Das
          geht besser.
        </p>
      </div>
      <Sheep className={styles.sheepCanvas} />
    </div>
  );
};
