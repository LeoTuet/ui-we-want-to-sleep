import styles from "./BottomBanner.module.scss";
import { CustomButton } from "./CustomButton";

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
  return (
    <div className={styles.overlay}>
      <div className={styles.bannerBackground}>
        <div className={styles.bannerContent}>
          <span className={styles.bannerText}>{text}</span>
          <CustomButton onClick={onButtonClick} className={styles.bannerButton}>
            {buttonText}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
