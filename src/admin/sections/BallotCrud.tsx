import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Ballot } from "../../models";
import {
  deleteBallot,
  fetchAllBallots,
  selectBallots,
  updateBallot,
} from "../../stores/admin";
import BallotView from "../components/BallotView";
import { WWTSButton } from "../components/Button";
import { BallotForm } from "./BallotForm";

export function BallotCrud() {
  const { ballots } = useSelector(selectBallots);
  const [creationFormVisible, setCreationFormVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBallots());
  }, [dispatch]);

  const handleBallotDeletion = useCallback(
    (ballot: Ballot) => {
      dispatch(deleteBallot(ballot));
    },
    [dispatch]
  );

  const handleBallotUpdate = useCallback(
    (ballot: Ballot, newBallot: Ballot) => {
      dispatch(updateBallot({ ballot, creationBallot: newBallot }));
    },
    [dispatch]
  );

  return (
    <>
      {ballots == null
        ? "Loading..."
        : ballots.length > 0
        ? ballots.map((ballot) => (
            <BallotView
              key={ballot._id}
              ballot={ballot}
              onDelete={handleBallotDeletion}
              onStatusChange={handleBallotUpdate}
            />
          ))
        : "There are no ballots."}

      {creationFormVisible ? (
        <BallotForm onFormClose={() => setCreationFormVisible(false)} />
      ) : (
        <p>
          <WWTSButton
            variant="admin"
            onClick={() => setCreationFormVisible(true)}
          >
            Create new ballot
          </WWTSButton>
        </p>
      )}
    </>
  );
}
