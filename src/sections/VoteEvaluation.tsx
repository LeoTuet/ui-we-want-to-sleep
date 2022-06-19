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
  const { language } = useCurrentLanguage();

  interface PercentageBarProps {
    percentage: number | undefined;
    voteOption: string | undefined;
  }

  const PercentageBar = ({
    percentage = 0,
    voteOption = "",
  }: PercentageBarProps) => {
    return (
      <>
        <p>{voteOption}</p>
        <div className={styles.bar} style={{ width: `${percentage / 3}vw` }}>
          {percentage + "%"}
        </div>
      </>
    );
  };

  const prepareVoteResults = () => {
    return voteResults.map((results) => {
      const options = ballot.options.find(
        (option) => option.identifier === results.questionIdentifier
      );
      if (!options) return;
      return {
        label: options.label,
        percentage: Number(((results.amount / voteCount) * 100).toFixed(2)),
      };
    });
  };

  return (
    <section className={styles.gridLayout}>
      {prepareVoteResults().map((result) => (
        <PercentageBar
          key={result?.percentage}
          percentage={result?.percentage}
          voteOption={result?.label[language]}
        />
      ))}
    </section>
  );
};
