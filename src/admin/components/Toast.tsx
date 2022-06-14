import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

import styles from "./Toast.module.scss";

interface ToastProps {
  kind: "info" | "error";
  title?: ReactNode;
  children: ReactNode;

  timeout_ms?: number;
  onClose?(): void;
}

export function Toast({
  kind,
  title,
  children,
  timeout_ms,
  onClose,
}: ToastProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (timeout_ms && onClose) {
      const timer = setTimeout(onClose, timeout_ms);
      setTimer(timer);

      return () => clearTimeout(timer);
    }
  }, []);

  function clickClose() {
    if (timer) clearTimeout(timer);
    onClose?.();
  }

  return (
    <div className={classNames(styles[kind], styles.toast)}>
      <div className={classNames(styles.title, { [styles.empty]: !title })}>
        {title}
        <button className={styles.close} onClick={clickClose}>
          ×
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
