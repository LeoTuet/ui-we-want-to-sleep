import { useEffect, useState } from "react";
import { Ballot } from "../../models";
import { fetchAllBallots } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import BallotView from "../components/Ballot";
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
        setError("An error occurred");
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
            <BallotView jwt={jwt} ballot={ballot} onDelete={updateBallots} />
          ))
        : "There are no ballots."}

      <p>
        <button className={styles.button} onClick={toggleCreationFormVisible}>
          Create new ballot
        </button>
      </p>
      {creationFormVisible && (
        <CreateBallotForm jwt={jwt} onSubmit={createBallot} />
      )}
    </>
  );
}
