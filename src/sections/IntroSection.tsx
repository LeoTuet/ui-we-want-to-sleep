import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { OptionsPanel } from "../components/OptionsPanel";
import { Sheep } from "../components/Sheep";
import { StarBackground } from "../components/StarBackground";
import { TypingHeading } from "../components/TypingHeading";
import { Size, useWindowSize } from "../hooks/useWindowSize";
import styles from "./IntroSection.module.scss";

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
    <header>
      <StarBackground className={styles.minStarBackground}>
        <div className={styles.optionsContainer}>
          <OptionsPanel />
        </div>
        <div className={styles.innerSection}>
          <TypingHeading finalText={"we.wantToSleep()"} />
          <p className={styles.description}>{t("intro.welcomeText")}</p>
        </div>
        <div className={styles.sheepContainer} ref={sheep}>
          <Sheep className={styles.sheepCanvas} size={sheepContainerSize} />
        </div>
      </StarBackground>
    </header>
  );
};
