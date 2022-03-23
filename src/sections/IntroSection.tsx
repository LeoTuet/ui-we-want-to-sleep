import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Sheep } from "../components/Sheep";
import { TypingHeading } from "../components/TypingHeading";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import styles from "./IntroSection.module.scss";
import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { useTranslation } from "react-i18next";

export const IntroSection = () => {
  const sheep = useRef<HTMLDivElement | null>(null);
  const size: Size = useWindowSize();
  const { t } = useTranslation();
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
          {t("intro.welcomeText")}
        </p>
      </div>
      <div className={styles.sheepContainer} ref={sheep}>
        <Sheep className={styles.sheepCanvas} size={sheepContainerSize} />
      </div>
    </StarBackground>
  );
};
