import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavigationBar } from "../components/NavigationBar";
import { StarBackground } from "../components/StarBackground";
import { useCurrentLanguage } from "../hooks/useCurrentLanguage";
import { Ballot } from "../models";
import { VoteEvaluation } from "../sections/VoteEvaluation";
import { fetchAllBallots, selectBallots } from "../stores/admin";
// import { selectBallot } from "../stores/ballot";
import {
  fetchTotalVoteCount,
  fetchVoteResult,
  selectResult,
} from "../stores/result";
import styles from "./Result.module.scss";

export const Result = () => {
  // const ballot = useSelector(selectBallot);
  const [resultBallot, setResultBallot] = useState<Ballot>();
  const ballots = useSelector(selectBallots);
  const result = useSelector(selectResult);
  const dispatch = useDispatch();
  const languageIdentifier = useCurrentLanguage();

  useEffect(() => {
    dispatch(fetchAllBallots());
  }, [dispatch]);

  useEffect(() => {
    const ballot = ballots.ballots.find(
      (b) => b._id === "62bd4b1d42d4c8b42ed975e6"
    );
    if (!ballot) return;
    setResultBallot(ballot);
    dispatch(fetchVoteResult(ballot._id));
    dispatch(fetchTotalVoteCount(ballot._id));
  }, [dispatch, resultBallot, ballots]);

  return (
    <>
      <StarBackground className={styles.adjustedStarBackground}>
        <NavigationBar />
        <div>
          <h2 className={styles.question}>
            {resultBallot?.question[languageIdentifier]}
          </h2>
          {result.voteResultError && result.totalVoteCount && (
            <p>{`${result.totalVoteCount} People voted`}</p>
          )}
          {result.voteResult && result.totalVoteCount && resultBallot && (
            <VoteEvaluation
              ballot={resultBallot}
              voteCount={result.totalVoteCount}
              voteResults={result.voteResult}
            />
          )}
        </div>
      </StarBackground>
    </>
  );
};
