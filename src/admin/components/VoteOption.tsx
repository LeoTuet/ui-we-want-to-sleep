import classNames from "classnames";
import { VoteOption } from "../../models";
import styles from "./VoteOption.module.scss";

interface VoteOptionProps {
  voteOption: VoteOption;
  onChange(voteOption: VoteOption): void;
  onRemove(): void;
  showErrors: boolean;
}

function VoteOptionView({
  voteOption: { identifier, label },
  onRemove,
  onChange,
  showErrors,
}: VoteOptionProps) {
  return (
    <div className={styles.outer}>
      <button
        className={styles.removeButton}
        onClick={(e) => {
          e.preventDefault();
          onRemove();
        }}
      >
        –
      </button>
      <input
        aria-label="Identifier"
        title="Identifier"
        placeholder="Identifier"
        value={identifier}
        onChange={(e) => onChange({ identifier: e.target.value, label })}
        className={classNames(styles.identifier, {
          [styles.invalid]: showErrors && identifier === "",
        })}
      />
      <input
        aria-label="Label"
        title="Label"
        placeholder="Label"
        value={label}
        onChange={(e) => onChange({ identifier, label: e.target.value })}
        className={classNames(styles.label, {
          [styles.invalid]: showErrors && label === "",
        })}
      />
    </div>
  );
}

export default VoteOptionView;
