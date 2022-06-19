import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { NavigationBar } from "../components/NavigationBar";
import { PercentageBar } from "../components/PercentageBar";
import { StarBackground } from "../components/StarBackground";
import { TypingHeader } from "../components/TypingHeader";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { VoteEvaluation } from "../sections/VoteEvaluation";
import { selectBallot } from "../stores/ballot";
import {
  fetchTotalVoteCount,
  fetchVoteResult,
  selectResult,
} from "../stores/result";
import styles from "./Result.module.scss";

export const Result = () => {
  const ballot = useSelector(selectBallot);
  const result = useSelector(selectResult);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language } = useCurrentLanguage();

  useEffect(() => {
    if (!ballot.ballot) return;
    dispatch(fetchVoteResult(ballot.ballot._id));
    dispatch(fetchTotalVoteCount(ballot.ballot._id));
  }, [dispatch, ballot]);

  return (
    <>
      <StarBackground className={styles.adjustedStarBackground}>
        <NavigationBar />
        <div>
          <h2>{ballot.ballot?.question[language]}</h2>
          {result.voteResultError && result.totalVoteCount && (
            <div>Maik stinkt</div>
          )}
          {result.voteResult && result.totalVoteCount && ballot.ballot && (
            <VoteEvaluation
              ballot={ballot.ballot}
              voteCount={result.totalVoteCount}
              voteResults={result.voteResult}
            />
          )}
        </div>
        {/* <TypingHeader
          className={styles.adjustedTypingHeader}
          finalText="vote.results()"
        /> */}
      </StarBackground>
    </>
  );
};
