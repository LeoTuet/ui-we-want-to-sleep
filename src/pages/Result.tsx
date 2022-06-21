import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationBar } from "../components/NavigationBar";
import { StarBackground } from "../components/StarBackground";
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
  const languageIdentifier = useCurrentLanguage();

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
          <h2 className={styles.question}>
            {ballot.ballot?.question[languageIdentifier]}
          </h2>
          {result.voteResultError && result.totalVoteCount && (
            <p>{`${result.totalVoteCount} People voted`}</p>
          )}
          {result.voteResult && result.totalVoteCount && ballot.ballot && (
            <VoteEvaluation
              ballot={ballot.ballot}
              voteCount={result.totalVoteCount}
              voteResults={result.voteResult}
            />
          )}
        </div>
      </StarBackground>
    </>
  );
};
