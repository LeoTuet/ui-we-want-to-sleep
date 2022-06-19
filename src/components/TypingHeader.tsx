import classNames from "classnames";
import { useEffect, useState } from "react";

import styles from "./TypingHeader.module.scss";

interface TypingHeaderProps {
  finalText: string;
  className?: string;
}

export const TypingHeader = ({ finalText, className }: TypingHeaderProps) => {
  const [index, setIndex] = useState(1);
  const [hlStart, setHlStart] = useState(0);
  const [hlEnd, setHlEnd] = useState(0);
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

  useEffect(() => {
    const indexOfPoint = finalText.indexOf(".");
    setHlStart(indexOfPoint + 1);
    const indexOfBrackets = finalText.indexOf("(");
    setHlEnd(indexOfBrackets);
  }, [finalText]);

  return (
    <h1
      className={classNames(styles.heading, className, {
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
