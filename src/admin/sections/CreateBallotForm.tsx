import { FormEvent, useState } from "react";
import { VoteOption } from "../../models";
import { addBallot } from "../../network/ballotApi";
import { Jwt } from "../../network/jwt";
import VoteOptionView from "../components/VoteOption";
import styles from "./CreateBallotForm.module.scss";

interface CreateBallotProps {
  jwt: Jwt;
  onSubmit(): void;
}

export function CreateBallotForm({ jwt, onSubmit }: CreateBallotProps) {
  const [error, setError] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [running, setRunning] = useState(false);
  const [question, setQuestion] = useState("");
  const [voteOptions, setVoteOptions] = useState<VoteOption[]>([]);

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
    } else {
      setShowErrors(true);
      setDisabled(true);
      addBallot(jwt, {
        running,
        question,
        options: voteOptions,
      })
        .then(onSubmit)
        .catch((e) => {
          console.error(e);
          setError("An error occured creating the ballot.");
        });
    }
  }

  function addVoteOption(e: FormEvent) {
    e.preventDefault();
    setVoteOptions([...voteOptions, { identifier: "", label: "" }]);
    setShowErrors(false);
  }

  function removeVoteOption(index: number) {
    setVoteOptions(voteOptions.slice().splice(index, 1));
    setShowErrors(false);
  }

  function changeVoteOption(index: number, newVo: VoteOption) {
    setVoteOptions(voteOptions.map((vo, i) => (i === index ? newVo : vo)));
    setShowErrors(false);
  }

  return (
    <>
      <h2>Create new Ballot</h2>
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
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label>Vote Options:</label>
        {voteOptions.map((vo, i) => (
          <VoteOptionView
            key={i}
            voteOption={vo}
            onChange={(vo) => changeVoteOption(i, vo)}
            onRemove={() => removeVoteOption(i)}
            showErrors={showErrors}
          />
        ))}
        <button className={styles.addVoteOption} onClick={addVoteOption}>
          +
        </button>

        <input type="submit" value="Submit" disabled={disabled} />
      </form>
    </>
  );
}
