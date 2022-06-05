import classNames from "classnames";
import { useCallback, useState } from "react";

import { Ballot } from "../../models";
import { BallotForm } from "../sections/BallotForm";
import styles from "./BallotView.module.scss";
import { Button } from "./Button";

interface BallotProps {
  ballot: Ballot;
  onDelete(ballot: Ballot): void;
  onStatusChange(ballot: Ballot): void;
}

function BallotView({ ballot, onDelete, onStatusChange }: BallotProps) {
  const [updateFormVisible, setUpdateFormVisible] = useState(false);

  const handleBallotDelte = useCallback(() => {
    if (confirm("Do you really want to delete this ballot?")) {
      onDelete(ballot);
    }
  }, [ballot, onDelete]);

  const toggleRunning = useCallback(() => {
    const action = ballot.running ? "pause" : "start";

    if (confirm(`Do you really want to ${action} this ballot?`)) {
      onStatusChange({ ...ballot, running: !ballot.running });
    }
  }, [ballot, onStatusChange]);

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
          onFormClose={() => setUpdateFormVisible(false)}
        />
      ) : (
        <Button onClick={() => setUpdateFormVisible(false)}>Update</Button>
      )}
      <Button onClick={handleBallotDelte}>Delete</Button>
      <Button onClick={toggleRunning}>
        {ballot.running ? "Pause" : "Start"}
      </Button>
    </div>
  );
}

export default BallotView;
