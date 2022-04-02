import classNames from "classnames";
import { useState } from "react";
import { Ballot } from "../../models";
import { deleteBallot } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import styles from "./Ballot.module.scss";

interface BallotProps {
  jwt: Jwt;
  ballot: Ballot;
  onDelete(): void;
}

function BallotView({ jwt, ballot, onDelete }: BallotProps) {
  const [error, setError] = useState<string | null>(null);

  function clickDeleteBallot() {
    if (confirm("Do you really want to delete this ballot?")) {
      deleteBallot(jwt, ballot._id)
        .then(onDelete)
        .catch((e) => {
          console.error(e);
          setError("An error occurred, the ballot could not be deleted.");
        });
    }
  }

  return (
    <div>
      <h3>{ballot._id}</h3>
      <p
        className={classNames(styles.status, {
          [styles.active]: ballot.running,
        })}
      >
        {ballot.running ? "Running" : "Not running"}
      </p>

      <table className={styles.table}>
        <tr>
          <th>Identifier</th>
          <th>Label</th>
        </tr>
        {ballot.options.map(({ identifier, label }) => (
          <tr>
            <td>{identifier}</td>
            <td>{label}</td>
          </tr>
        ))}
      </table>

      <p className={styles.error}>{error}</p>

      <button className={styles.button} onClick={clickDeleteBallot}>
        Delete
      </button>
    </div>
  );
}

export default BallotView;
