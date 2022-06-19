import { PercentageBar } from "../components/PercentageBar";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { Ballot, VoteResult } from "../models";

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

  const prepareVoteResults = () => {
    return voteResults.map((results) => {
      const options = ballot.options.find(
        (option) => (option.identifier = results.questionIdentifier)
      );
      if (!options) return;
      return {
        label: options.label,
        percentage: results.amount / voteCount,
      };
    });
  };

  return (
    <section>
      <h2>{ballot.question[language]}</h2>
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
