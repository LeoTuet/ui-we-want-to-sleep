import { useEffect, useState } from "react";

import { Ballot } from "../../models";
import { fetchAllBallots } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import BallotView from "../components/Ballot";
import { Button } from "../components/Button";
import styles from "./BallotCrud.module.scss";
import { CreateBallotForm } from "./CreateBallotForm";

interface BallotCrudProps {
  jwt: Jwt;
}

export function BallotCrud({ jwt }: BallotCrudProps) {
  const [ballots, setBallots] = useState<Ballot[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [creationFormVisible, setCreationFormVisible] = useState(false);

  function toggleCreationFormVisible() {
    setCreationFormVisible((prev) => !prev);
  }

  function updateBallots() {
    fetchAllBallots()
      .then(setBallots)
      .catch((e) => {
        console.error(e);
        setError("An error occurred while trying to fetch ballots");
      });
  }

  function createBallot() {
    setCreationFormVisible(false);
    updateBallots();
  }

  useEffect(updateBallots, []);

  return (
    <>
      <p className={styles.error}>{error}</p>
      {ballots == null
        ? "Loading..."
        : ballots.length > 0
        ? ballots.map((ballot) => (
            <BallotView
              key={ballot._id}
              jwt={jwt}
              ballot={ballot}
              onDelete={updateBallots}
            />
          ))
        : "There are no ballots."}

      {creationFormVisible ? (
        <CreateBallotForm
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
