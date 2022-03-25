import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContentSection } from "../sections/ContentSection";
import { IntroSection } from "../sections/IntroSection";
import { VotingSection } from "../sections/VotingSection";
import { fetchRunningBallot, selectBallot } from "../stores/ballot";
import { fetchTokenStatus, selectToken } from "../stores/token";
import { NoVotingType, NoVotingSection } from "../sections/NoVotingSection";
import { recordVote, selectVote } from "../stores/vote";
import { actions } from "../stores/token";
import { useParams } from "react-router-dom";
import { VoteResponseType, VoteResponseSection } from "../sections/VoteResponseSection";

export const Home = () => {
  const ballot = useSelector(selectBallot);
  const vote = useSelector(selectVote);
  const tokenStore = useSelector(selectToken);
  const dispatch = useDispatch();

  let { token } = useParams();

  useEffect(() => {
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

  useEffect(() => {
    if (token) {
      dispatch(actions.saveToken(token));
    }
  }, [token]);

  console.log(tokenStore.statusResult);
  console.log(ballot.ballotLoading);

  return (
    <div>
      <IntroSection />
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
      {(ballot.ballotLoading || (ballot.ballotError && !vote.voteResult)) && (
        <NoVotingSection
          type={(ballot.ballotError?.message ?? "LOADING") as NoVotingType}
        />
      )}
      {tokenStore.statusResult != ("VALID" && "MISSING") && (
        <NoVotingSection type={tokenStore.statusResult as NoVotingType} />
      )}
      {(vote.voteResult || vote.voteError) && (
        <VoteResponseSection type={(vote.voteResult ?? vote.voteError) as VoteResponseType} />
      )}
    </div>
  );
};
