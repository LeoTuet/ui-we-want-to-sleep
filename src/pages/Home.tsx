import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContentSection } from "../sections/ContentSection";
import { IntroSection } from "../sections/IntroSection";
import { VotingSection } from "../sections/VotingSection";
import { fetchRunningBallot, selectBallot } from "../stores/ballot";
import { BallotError, NoVotingSection } from "../sections/NoVotingSection";
import {recordVote, selectVote} from "../stores/vote";
import { actions } from "../stores/token";
import { useParams } from "react-router-dom";
import {CouchPanel} from "../components/CouchPanel";

export const Home = () => {
  const ballot = useSelector(selectBallot);
  const vote = useSelector(selectVote);
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
      {ballot.ballot && !ballot.ballotError && !vote.voteResult && (
        <VotingSection
          onTokenReceive={handleCaptchaTokenReceive}
          ballot={ballot}
          onVote={handleVote}
        />
      )}
      {ballot.ballotError && !vote.voteResult &&  (
        <NoVotingSection
          type={(ballot.ballotError.message ?? "") as BallotError}
        />
      )}
      {vote.voteResult && (
        <CouchPanel mainText={"Du hast abgestimmt :)"} subText={"Dann entspann dich doch!"}/>
      )}
    </div>
  );
};
