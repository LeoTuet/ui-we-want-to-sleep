import { PropsWithChildren } from "react";
import styles from "./StarBackground.module.scss";
import classNames from "classnames";

interface StarBackgroundProps {
  className?: string;
}

export function StarBackground({
  children,
  className,
}: PropsWithChildren<StarBackgroundProps>): React.ReactElement {
  return (
    <div className={classNames(styles.starBackground, className)}>
      {children}
    </div>
  );
}
