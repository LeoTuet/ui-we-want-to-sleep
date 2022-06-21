import classNames from "classnames";
import { useCallback, useState } from "react";

import { WWTSButton } from "../../components/Button";
import { Ballot } from "../../models";
import { BallotForm } from "../sections/BallotForm";
import styles from "./BallotView.module.scss";

interface BallotProps {
  ballot: Ballot;
  onDelete(ballot: Ballot): void;
  onStatusChange(ballot: Ballot, newBallot: Ballot): void;
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
      onStatusChange(ballot, { ...ballot, running: !ballot.running });
    }
  }, [ballot, onStatusChange]);

  return (
    <div>
      <div className={styles.header}>
        <h2>{ballot.question.en}</h2>
        <p>{ballot.question.de}</p>
      </div>
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
            <th>German Label</th>
            <th>English Label</th>
          </tr>
        </thead>
        <tbody>
          {ballot.options.map(({ identifier, label }) => (
            <tr key={identifier}>
              <td>{identifier}</td>
              <td>{label.de}</td>
              <td>{label.en}</td>
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
        <WWTSButton variant="admin" onClick={() => setUpdateFormVisible(true)}>
          Update
        </WWTSButton>
      )}
      <WWTSButton variant="admin" onClick={handleBallotDelte}>
        Delete
      </WWTSButton>
      <WWTSButton variant="admin" onClick={toggleRunning}>
        {ballot.running ? "Pause" : "Start"}
      </WWTSButton>
    </div>
  );
}

export default BallotView;
