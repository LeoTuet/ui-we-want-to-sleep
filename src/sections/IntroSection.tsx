import { TypingHeading } from "../components/TypingHeading";
import { Sheep } from "../components/Sheep";
import styles from "./IntroSection.module.scss";
import { useEffect, useRef, useState } from "react";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import halfMoon from "../assets/half-moon.png"
import ThemeToggle from "../components/ThemeToggle";

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
    <div className={styles.introSection} tabIndex={0}>
      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>
      <div className={styles.innerSection}>
        <TypingHeading />
        <p className={styles.description}>
          Es ist wissenschaftlich bewiesen, dass das Gehirn erst ab ca. 9 Uhr
          richtig leistungsfähig ist. Unsere Berufsschule startet um 7:30. Das
          geht besser.
        </p>
      </div>
      <div className={styles.sheepContainer} ref={sheep}>
        <Sheep className={styles.sheepCanvas} size={sheepContainerSize} />
      </div>
    </div>
  );
};
