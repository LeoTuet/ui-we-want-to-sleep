import classNames from "classnames";

import { VoteOption } from "../../models";
import { WWTSButton, WWTSInput } from "./Button";
import styles from "./VoteOption.module.scss";

interface VoteOptionProps {
  voteOption: VoteOption;
  onChange(voteOption: VoteOption): void;
  onRemove(): void;
  showErrors: boolean;
  onlyEdit: boolean;
}

function VoteOptionView({
  voteOption: { identifier, label },
  onRemove,
  onChange,
  showErrors,
  onlyEdit,
}: VoteOptionProps) {
  return (
    <div className={styles.outer}>
      {!onlyEdit && (
        <WWTSButton
          className={styles.removeButton}
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
        >
          –
        </WWTSButton>
      )}

      <WWTSInput
        aria-label="Identifier"
        title="Identifier"
        placeholder="Identifier"
        value={identifier}
        onChange={(e) => onChange({ identifier: e.target.value, label })}
        className={classNames(styles.identifier, {
          [styles.invalid]: showErrors && identifier === "",
        })}
        disabled={onlyEdit}
      />
      <WWTSInput
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
