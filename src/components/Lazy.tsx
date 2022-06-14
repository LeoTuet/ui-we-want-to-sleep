import { FunctionComponent, ReactNode, useEffect, useState } from "react";

import styles from "./Lazy.module.scss";

interface LazyProps {
  /** Function that asynchronously returns a component. */
  init: () => Promise<FunctionComponent>;
}

/**
 * Component that lazily loads another component when rendered.
 *
 * That component can be imported dynamically over the network:
 *
 * ```
 * <Lazy
 *   init={
 *     () => import("./some-path-here")
 *       .then((module) => module.ComponentName)
 *   }
 * />
 * ```
 */
export const Lazy = ({ init }: LazyProps) => {
  const [Component, setComponent] = useState<FunctionComponent | null>(null);

  useEffect(() => {
    init().then((mod) => setComponent(() => mod));
  }, []);

  if (Component != null) {
    return <Component />;
  } else {
    return (
      <div className={styles.placeholder}>
        <div className={styles.animation}></div>
        Loading
      </div>
    );
  }
};
