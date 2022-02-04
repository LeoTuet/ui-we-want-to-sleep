import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import styles from "./TypingHeading.module.scss";

export const TypingHeading = () => {
  const finalText = "we.wantToSleep()";
  const [index, setIndex] = useState(1);
  const [timerID, setTimerID] = useState<NodeJS.Timeout>();

  const [underscoreHiddeen, setUnderscoreHidden] = useState(false);

  useEffect(() => {
    setUnderscoreHidden(index % 14 < 7 && index > finalText.length);
  }, [index]);

  //   useEffect(() => {
  //     if (index > finalText.length && timerID) {
  //       clearInterval(timerID);
  //     }
  //   }, [index]);

  useEffect(() => {
    const countdownID = setInterval(() => setIndex((prev) => prev + 1), 100);
    setTimerID(countdownID.ref);
    return () => {
      clearInterval(countdownID);
    };
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>
        {finalText.substring(0, index < 3 ? index : 3)}
        <span className={styles.coloredText}>
          {index >= 3 && finalText.substring(3, index < 14 ? index : 14)}
        </span>
        {index >= 14 && finalText.substring(14, index)}
        <span
          className={classNames(styles.cursor, {
            [styles.hidden]: underscoreHiddeen,
          })}
        >
          _
        </span>
      </h1>
    </div>
  );
};
