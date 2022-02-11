import React, { useEffect, useState } from "react";
import { Ballot } from "../models";
import { useDispatch, useSelector } from "react-redux";

import { ContentSection } from "../sections/ContentSection";
import { IntroSection } from "../sections/IntroSection";
import { VotingSection } from "../sections/VotingSection";
import { fetchRunningBallot, selectBallot } from "../stores/ballot";
import { BallotError, NoVotingSection } from "../sections/NoVotingSection";

export const Home = () => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const ballot = useSelector(selectBallot);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    dispatch(fetchRunningBallot());
  }, []);

  return (
    <div>
      <IntroSection />
      <ContentSection />
      {ballot.ballot && !ballot.ballotError && (
        <VotingSection onTokenReceive={setToken} ballot={ballot} />
      )}
      {ballot.ballotError && <NoVotingSection error={(ballot.ballotError.message ?? "") as BallotError} />}
    </div>
  );
};
