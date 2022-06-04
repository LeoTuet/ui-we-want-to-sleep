import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Ballot } from "../../models";
import { fetchAllBallots, selectBallots } from "../../stores/adminLogin";
import BallotView from "../components/BallotView";
import { Button } from "../components/Button";
import { BallotForm } from "./BallotForm";

export function BallotCrud() {
  const { ballots } = useSelector(selectBallots);
  const [creationFormVisible, setCreationFormVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBallots());
  }, [dispatch]);

  const handleBallotDeletion = useCallback((ballot: Ballot) => {
    // wants to delete ballot
    console.log(ballot, "wants to delete ");
  }, []);

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
            />
          ))
        : "There are no ballots."}

      {creationFormVisible ? (
        <BallotForm onFormClose={() => setCreationFormVisible(false)} />
      ) : (
        <p>
          <Button onClick={() => setCreationFormVisible(true)}>
            Create new ballot
          </Button>
        </p>
      )}
    </>
  );
}
