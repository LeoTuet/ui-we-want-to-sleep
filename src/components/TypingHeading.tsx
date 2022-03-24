import classNames from "classnames";
import { useEffect, useState } from "react";
import styles from "./TypingHeading.module.scss";

interface TypingHeadingProps {
  finalText: string;
  // index of first highlighted character
  hlStart: number;
  // index of first non-highlighted character
  hlEnd: number;
}

export const TypingHeading = ({
  finalText,
  hlStart,
  hlEnd,
}: TypingHeadingProps) => {
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
  }, [finalText]);

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
