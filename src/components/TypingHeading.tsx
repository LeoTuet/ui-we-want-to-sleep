import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./TypingHeading.module.scss";

export const TypingHeading = () => {
  const finalText = "we.wantToSleep()";
  // index of first highlighted character
  const hlStart = 3;
  // index of first non-highlighted character
  const hlEnd = 14;

  const [index, setIndex] = useState(1);
  const [caretBlinking, setCaretBlinking] = useState(false);

  useEffect(() => {
    const countdownID = setInterval(() => {
      setIndex((prev) => {
        if (prev === finalText.length) {
          clearInterval(countdownID);
          setCaretBlinking(true);
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(countdownID);
  }, []);

  return (
    <h1
      className={classNames(styles.heading, {
        [styles.blinkingCaret]: caretBlinking,
      })}
    >
      {finalText.substring(0, Math.min(index, hlStart))}
      <span className={styles.coloredText}>
        {index >= hlStart &&
          finalText.substring(hlStart, Math.min(index, hlEnd))}
      </span>
      {index >= hlEnd && finalText.substring(hlEnd, index)}
    </h1>
  );
};
