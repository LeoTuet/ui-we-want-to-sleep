import classNames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Ballot } from "../../models";
import { deleteBallot, updateBallot } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import { FetchError } from "../../network/request";
import { BallotForm } from "../sections/BallotForm";
import styles from "./Ballot.module.scss";
import { Button } from "./Button";

interface BallotProps {
  ballot: Ballot;
  onDelete(): void;
  onUpdate(): void;
}

function BallotView({ ballot, onDelete, onUpdate }: BallotProps) {
  const [updateFormVisible, setUpdateFormVisible] = useState(false);
  const dispatch = useDispatch();

  function clickDeleteBallot() {
    if (confirm("Do you really want to delete this ballot?")) {
      // deleteBallot(jwt, ballot._id)
      //   .then(onDelete)
      //   .catch((e: FetchError) => {
      //     dispatch(e.showToast("The ballot could not be deleted"));
      //   });
    }
  }

  function toggleUpdateFormVisible() {
    setUpdateFormVisible((prev) => !prev);
  }

  function onUpdateBallot() {
    setUpdateFormVisible(false);
    onUpdate();
  }

  function toggleRunning() {
    const action = ballot.running ? "pause" : "start";

    if (confirm(`Do you really want to ${action} this ballot?`)) {
      // const updated = {
      //   running: !ballot.running,
      //   options: ballot.options,
      //   question: ballot.question,
      // };
      // updateBallot(jwt, ballot._id, updated)
      //   .then(onUpdate)
      //   .catch((e: FetchError) => {
      //     dispatch(e.showToast(`The ballot could not be ${action}d`));
      //   });
    }
  }

  return (
    <div>
      <h2>{ballot.question}</h2>
      <p
        className={classNames(styles.status, {
          [styles.active]: ballot.running,
        })}
      >
        {ballot.running ? "Running" : "Not running"}
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {ballot.options.map(({ identifier, label }) => (
            <tr key={identifier}>
              <td>{identifier}</td>
              <td>{label}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {updateFormVisible ? (
        <BallotForm
          payload={ballot}
          onSubmit={onUpdateBallot}
          onCancel={toggleUpdateFormVisible}
        />
      ) : (
        <Button onClick={toggleUpdateFormVisible}>Update</Button>
      )}
      <Button onClick={clickDeleteBallot}>Delete</Button>
      <Button onClick={toggleRunning}>
        {ballot.running ? "Pause" : "Start"}
      </Button>
    </div>
  );
}

export default BallotView;
