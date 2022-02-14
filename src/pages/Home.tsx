import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContentSection } from "../sections/ContentSection";
import { IntroSection } from "../sections/IntroSection";
import { VotingSection } from "../sections/VotingSection";
import { fetchRunningBallot, selectBallot } from "../stores/ballot";
import { BallotError, NoVotingSection } from "../sections/NoVotingSection";
import { recordVote } from "../stores/vote";
import { actions } from "../stores/token";
import { useParams } from "react-router-dom";

export const Home = () => {
  const ballot = useSelector(selectBallot);
  const dispatch = useDispatch();

  let { token } = useParams();

  useEffect(() => {
    dispatch(fetchRunningBallot());
  }, []);

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

  useEffect(() => {
    if (token) {
      dispatch(actions.saveToken(token));
    }
  }, [token]);

  return (
    <div>
      <IntroSection />
      <ContentSection />
      {ballot.ballot && !ballot.ballotError && (
        <VotingSection
          onTokenReceive={handleCaptchaTokenReceive}
          ballot={ballot}
          onVote={handleVote}
        />
      )}
      {ballot.ballotError && (
        <NoVotingSection
          error={(ballot.ballotError.message ?? "") as BallotError}
        />
      )}
    </div>
  );
};
