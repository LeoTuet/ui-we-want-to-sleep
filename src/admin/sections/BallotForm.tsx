import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Ballot, VoteOption } from "../../models";
import { addBallot, updateBallot } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import { FetchError } from "../../network/request";
import { Button, Input } from "../components/Button";
import VoteOptionView from "../components/VoteOption";
import styles from "./BallotForm.module.scss";

interface BallotProps {
  payload?: Ballot;
  onSubmit(): void;
  onCancel(): void;
}

export function BallotForm({ payload, onSubmit, onCancel }: BallotProps) {
  const [error, setError] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [id, setId] = useState("");
  const [running, setRunning] = useState(false);
  const [question, setQuestion] = useState("");
  const [voteOptions, setVoteOptions] = useState<VoteOption[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (payload) {
      setId(payload._id);
      setRunning(payload.running);
      setQuestion(payload.question);
      setVoteOptions(payload.options);
    }
  }, [payload]);

  function submit(e: FormEvent) {
    e.preventDefault();

    if (question === "") {
      setError("Error: Question missing");
      setShowErrors(false);
    } else if (voteOptions.length < 2) {
      setError("Error: You need at least 2 vote options");
      setShowErrors(false);
    } else if (
      voteOptions.find((vo) => vo.identifier === "" || vo.label === "") != null
    ) {
      setError("Error: Some values are missing");
      setShowErrors(true);
    } else if (payload) {
      setShowErrors(true);
      setDisabled(true);
      // updateBallot(jwt, id, {
      //   running,
      //   question,
      //   options: voteOptions,
      // })
      //   .then(onSubmit)
      //   .catch((e: FetchError) => {
      //     dispatch(e.showToast("Failed to update ballot"));
      //   });
    } else {
      setShowErrors(true);
      setDisabled(true);
      // addBallot(jwt, {
      //   running,
      //   question,
      //   options: voteOptions,
      // })
      //   .then(onSubmit)
      //   .catch((e: FetchError) => {
      //     dispatch(e.showToast("Failed to create ballot"));
      //   });
    }
  }

  function cancel(e: FormEvent) {
    e.preventDefault();
    onCancel();
  }

  function addVoteOption(e: FormEvent) {
    e.preventDefault();
    setVoteOptions([...voteOptions, { identifier: "", label: "" }]);
    setShowErrors(false);
  }

  function removeVoteOption(index: number) {
    setVoteOptions(voteOptions.filter((_, i) => i !== index));
    setShowErrors(false);
  }

  function changeVoteOption(index: number, newVo: VoteOption) {
    setVoteOptions(voteOptions.map((vo, i) => (i === index ? newVo : vo)));
    setShowErrors(false);
  }

  return (
    <div className={styles.outer}>
      <h2>{payload ? "Update" : "Create new"} Ballot</h2>
      <p className={styles.error}>{error}</p>

      <form className={styles.form} onSubmit={submit}>
        <label>
          <input
            type="checkbox"
            checked={running}
            onChange={(e) => setRunning(e.target.checked)}
          />
          Running
        </label>

        <label htmlFor="question">Question:</label>
        <Input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <h3>Vote Options:</h3>
        {voteOptions.map((vo, i) => (
          <VoteOptionView
            key={i}
            voteOption={vo}
            onChange={(vo) => changeVoteOption(i, vo)}
            onRemove={() => removeVoteOption(i)}
            showErrors={showErrors}
          />
        ))}
        <Button className={styles.addVoteOption} onClick={addVoteOption}>
          +
        </Button>

        <div>
          <Input
            className={styles.submit}
            type="submit"
            value="Submit"
            disabled={disabled}
          />
          <Button className={styles.cancel} onClick={cancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
