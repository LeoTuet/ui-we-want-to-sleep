import { TypingHeading } from "../components/TypingHeading";
import styles from "./IntroSection.module.scss";

import stars from "../assets/stars-background.png";
import sheep from "../assets/sheep.png";
import { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";

export const IntroSection = () => {
  const [jumped, setJumped] = useState(false);
  const [orientation, setOrientation] = useState<"LEFT" | "RIGHT">("RIGHT");

  const [horizontalOffset, setHorizontalOffset] = useState(0);

  const section = useRef<HTMLDivElement | null>(null);

  const handleSheepJump = useCallback(() => {
    setJumped(true);
    const timeout = setTimeout(() => setJumped(false), 200);
  }, [setJumped]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const timer = setTimeout(() => {
      console.log(e.key);
      switch (e.key) {
        case "ArrowLeft":
        case "a":
          setHorizontalOffset((prev) => prev - 2);
          setOrientation("LEFT");
          break;
        case "ArrowRight":
        case "d":
          setHorizontalOffset((prev) => prev + 2);
          setOrientation("RIGHT");
          break;
        default:
          handleSheepJump();
      }
    }, 100);
  }, []);

  useEffect(() => {
    console.log(horizontalOffset);

    if (horizontalOffset < -58) {
      setHorizontalOffset(horizontalOffset + 100);
    } else if (horizontalOffset > 58) {
      setHorizontalOffset(horizontalOffset - 100);
    }
  }, [horizontalOffset, setHorizontalOffset]);

  useEffect(() => {
    if (section.current) {
      section.current.focus();
    }
  }, [section.current]);

  return (
    <div
      className={styles.introSection}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={section}
    >
      <img src={stars} className={styles.starBackground}></img>
      <div className={styles.innerSection}>
        <TypingHeading />
        <p className={styles.description}>
          Es ist wissenschaftlich bewiesen, dass das Gehirn erst ab ca. 9 Uhr
          richtig leistungsfähig ist. Unsere Berufsschule startet um 7:30. Das
          geht besser.
        </p>
      </div>

      <img
        className={classNames(styles.sheep, {
          [styles.jumped]: jumped,
          [styles.right]: orientation == "RIGHT",
        })}
        style={{ left: `calc(18vw + ${horizontalOffset}vw)` }}
        src={sheep}
        onClick={handleSheepJump}
      ></img>
    </div>
  );
};
