import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { Ballot, VoteResult } from "../models";
import styles from "./VoteEvaluation.module.scss";

interface VoteEvaluationProps {
  voteResults: VoteResult[];
  voteCount: number;
  ballot: Ballot;
}

export const VoteEvaluation = ({
  voteResults,
  voteCount,
  ballot,
}: VoteEvaluationProps) => {
  const languageIdentifier = useCurrentLanguage();

  interface PercentageBarProps {
    percentage: number | undefined;
    amount: number | undefined;
    voteOption: string | undefined;
    width: string | undefined;
  }

  const prepareVoteResults = () => {
    const winningCount = Math.max(
      ...voteResults.map((result) => result.amount)
    );
    return voteResults.map((result) => {
      const options = ballot.options.find(
        (option) => option.identifier === result.questionIdentifier
      );
      if (!options) return;
      return {
        label: options.label,
        percentage: Number(((result.amount / voteCount) * 100).toFixed(2)),
        width: `${((result.amount / winningCount) * 100).toFixed(2)}%`,
        amount: result.amount,
      };
    });
  };

  const PercentageBar = ({
    percentage = 0,
    amount = 0,
    voteOption = "",
    width = "0%",
  }: PercentageBarProps) => {
    return (
      <>
        <p>{voteOption}</p>
        <div className={styles.bar} style={{ width: width }}>
          <div className={styles.valueContainer}>
            <div>{percentage + "%"}</div>
            <div className={styles.amount}>{amount}</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section className={styles.gridLayout}>
      {prepareVoteResults().map((result) => (
        <PercentageBar
          key={result?.percentage}
          amount={result?.amount}
          percentage={result?.percentage}
          voteOption={result?.label[languageIdentifier]}
          width={result?.width}
        />
      ))}
    </section>
  );
};
