import { HTMLProps } from "react";

import { NavigationBar } from "./NavigationBar";
import styles from "./SharedHeader.module.scss";
import { StarBackground } from "./StarBackground";
import { TypingHeader } from "./TypingHeader";

export interface SharedHeaderProps extends HTMLProps<HTMLElement> {
  text: string;
}

export const SharedHeader = ({ text, ...rest }: SharedHeaderProps) => {
  return (
    <header className={styles.stickyHeader} {...rest}>
      <StarBackground className={styles.adjustedStarBackground}>
        <NavigationBar />
        <TypingHeader finalText={text} />
      </StarBackground>
    </header>
  );
};
