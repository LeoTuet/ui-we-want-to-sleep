import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Ballot } from "../../models";
import { fetchAllBallots } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import { FetchError } from "../../network/request";
import BallotView from "../components/Ballot";
import { Button } from "../components/Button";
import { BallotForm } from "./BallotForm";

interface BallotCrudProps {
  jwt: Jwt;
}

export function BallotCrud({ jwt }: BallotCrudProps) {
  const [ballots, setBallots] = useState<Ballot[] | null>(null);
  const [creationFormVisible, setCreationFormVisible] = useState(false);

  const dispatch = useDispatch();

  function toggleCreationFormVisible() {
    setCreationFormVisible((prev) => !prev);
  }

  function updateBallots() {
    fetchAllBallots()
      .then(setBallots)
      .catch((e: FetchError) => {
        dispatch(e.showToast("Cound not fetch ballots"));
      });
  }

  function createBallot() {
    setCreationFormVisible(false);
    updateBallots();
  }

  useEffect(updateBallots, []);

  return (
    <>
      {ballots == null
        ? "Loading..."
        : ballots.length > 0
        ? ballots.map((ballot) => (
            <BallotView
              key={ballot._id}
              jwt={jwt}
              ballot={ballot}
              onDelete={updateBallots}
              onUpdate={updateBallots}
            />
          ))
        : "There are no ballots."}

      {creationFormVisible ? (
        <BallotForm
          jwt={jwt}
          onSubmit={createBallot}
          onCancel={toggleCreationFormVisible}
        />
      ) : (
        <p>
          <Button onClick={toggleCreationFormVisible}>Create new ballot</Button>
        </p>
      )}
    </>
  );
}
