import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Sheep } from "../components/Sheep";
import { TypingHeading } from "../components/TypingHeading";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import styles from "./IntroSection.module.scss";
import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const IntroSection = () => {
  const sheep = useRef<HTMLDivElement | null>(null);
  const size: Size = useWindowSize();

  const [sheepContainerSize, setSheepContainerSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (sheep.current != null) {
      setSheepContainerSize(sheep.current.getBoundingClientRect());
    }
  }, [size]);

  return (
    <StarBackground className={styles.minStarBackground}>
      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>
      <div className={styles.innerSection}>
        <TypingHeading finalText={"we.wantToSleep()"} hlStart={3} hlEnd={14} />
        <p className={styles.description}>
          Es ist wissenschaftlich bewiesen, dass das Gehirn erst ab ca. 9 Uhr
          richtig leistungsfähig ist. Unsere Berufsschule startet um 7:30. Das
          geht besser.
        </p>
      </div>
      <div className={styles.sheepContainer} ref={sheep}>
        <Sheep className={styles.sheepCanvas} size={sheepContainerSize} />
      </div>
    </StarBackground>
  );
};
