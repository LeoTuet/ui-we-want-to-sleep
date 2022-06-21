import { useEffect, useRef } from "react";

import { WWTSButton } from "../components/Button";
import styles from "./BottomBanner.module.scss";

interface BottomBannerProps {
  text: string;
  buttonText: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const BottomBanner = ({
  text,
  buttonText,
  onButtonClick,
}: BottomBannerProps) => {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  /**This is for trapping the users focus */
  const focusHandler = (event: KeyboardEvent) => {
    if (event.key == "Tab") {
      const focusableElements: NodeListOf<HTMLElement> | undefined =
        bannerRef.current?.querySelectorAll(
          "a[href], button:not([disabled]), textarea, input, select"
        );

      if (focusableElements && focusableElements.length) {
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        const shift = event.shiftKey;

        if (shift && event.target == first) {
          last.focus();
          return event.preventDefault();
        }

        if (!shift && event.target == last) {
          first.focus();
          return event.preventDefault();
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", focusHandler);

    return () => {
      window.removeEventListener("keydown", focusHandler);
    };
  }, []);

  return (
    <div role="presentation" className={styles.overlay}>
      <div role="dialog" className={styles.bannerBackground}>
        <div ref={bannerRef} className={styles.bannerContent}>
          <span className={styles.bannerText}>{text}</span>
          <WWTSButton onClick={onButtonClick} className={styles.bannerButton}>
            {buttonText}
          </WWTSButton>
        </div>
      </div>
    </div>
  );
};
