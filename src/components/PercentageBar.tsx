import styles from "./PercentageBar.module.scss";

interface PercentageBarProps {
  percentage: number | undefined;
  voteOption: string | undefined;
}

export const PercentageBar = ({
  percentage = 0,
  voteOption = "",
}: PercentageBarProps) => {
  return (
    <div className={styles.row}>
      <p>{voteOption}</p>
      <div className={styles.bar} style={{ width: `${percentage / 3}vw` }}>
        {percentage + "%"}
      </div>
    </div>
  );
};
