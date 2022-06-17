import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ContentSection } from "../sections/ContentSection";
import { IntroSection } from "../sections/IntroSection";
import { NoVotingSection, NoVotingType } from "../sections/NoVotingSection";
import { VotingSection } from "../sections/VotingSection";
import { fetchRunningBallot, selectBallot } from "../stores/ballot";
import { actions, fetchTokenStatus, selectToken } from "../stores/token";
import { recordVote, selectVote } from "../stores/vote";
import styles from "./Home.module.scss";

export const Home = () => {
  const ballot = useSelector(selectBallot);
  const vote = useSelector(selectVote);
  const tokenStore = useSelector(selectToken);
  const dispatch = useDispatch();

  const { token } = useParams();

  useEffect(() => {
    // There is an issue with typing the dispatch correctly.
    // Here is a link on how it should be: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
    // Feel free to fix it - I wasn't able to
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchRunningBallot()).then(() => dispatch(fetchTokenStatus()));
  }, [dispatch]);

  const handleVote = useCallback(
    (identifier: string) => {
      dispatch(recordVote(identifier));
    },
    [dispatch]
  );

  const handleCaptchaTokenReceive = useCallback(
    (token: string) => {
      dispatch(actions.saveCaptchaToken(token));
    },
    [dispatch]
  );

  const getNoVotingStatus = useCallback(() => {
    if (ballot.ballotLoading || (ballot.ballotError && !vote.voteResult)) {
      return ballot.ballotError?.message ?? "LOADING";
    } else if (!["VALID", "MISSING"].includes(tokenStore.statusResult)) {
      return tokenStore.statusResult;
    } else if (vote.voteResult || vote.voteError) {
      return vote.voteResult ?? vote.voteError;
    } else return false;
  }, [ballot, tokenStore, vote]);

  useEffect(() => {
    if (token) {
      dispatch(actions.saveToken(token));
    }
  }, [token, dispatch]);

  return (
    <>
      <IntroSection />
      <main className={styles.main}>
        <ContentSection />
        {ballot.ballot &&
          !ballot.ballotError &&
          !vote.voteResult &&
          tokenStore.statusResult === "VALID" && (
            <VotingSection
              onTokenReceive={handleCaptchaTokenReceive}
              ballot={ballot}
              onVote={handleVote}
            />
          )}
        {getNoVotingStatus() && (
          <NoVotingSection type={getNoVotingStatus() as NoVotingType} />
        )}
      </main>
    </>
  );
};
