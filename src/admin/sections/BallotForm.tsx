import { FormEvent, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Ballot, VoteOption } from "../../models";
import { CreationBallot } from "../../network/ballotApi";
import { createBallot } from "../../stores/adminLogin";
import { Button, Input } from "../components/Button";
import VoteOptionView from "../components/VoteOption";
import styles from "./BallotForm.module.scss";

interface BallotProps {
  payload?: Ballot;
  onFormClose: () => void;
}

export function BallotForm({ payload, onFormClose }: BallotProps) {
  const dispatch = useDispatch();

  const {
    watch,
    setValue,
    formState,
    handleSubmit,
    register,
    setError,
    clearErrors,
  } = useForm<CreationBallot>({
    defaultValues: payload ?? {
      question: "",
      options: [],
      running: false,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { isDirty, isValid } = formState;

  // Should be done with the validation of react hook form but i'm to dumb to do it
  const validateForm = useCallback(() => {
    console.log(watch(), "watch");
    clearErrors();
    if (watch().question.length < 1) {
      setError("question", { message: "Error: Question missing" });
    }

    if (
      watch().options.some((o) => o.label.length < 1 || o.identifier.length < 1)
    ) {
      setError("options", {
        message: "You have a invalid vote option",
      });
    }

    if (watch().options.length < 2) {
      setError("options", {
        message: "You need at least 2 vote options",
      });
    }
  }, [clearErrors, setError, watch]);

  useEffect(() => {
    register("question", { required: true });
    register("options", { required: true });
    register("running", { required: true });
    validateForm();
  }, [register, validateForm]);

  const onSubmit = useCallback(() => {
    console.log("dings");
    if (payload) {
      // dispatch(updateBallot(payload, watch()));
    } else {
      dispatch(createBallot(watch()));
    }
    onFormClose();
  }, [dispatch, onFormClose, payload, watch]);

  const addVoteOption = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setValue("options", [...watch().options, { identifier: "", label: "" }]);
      validateForm();
    },
    [setValue, validateForm, watch]
  );

  const removeVoteOption = useCallback(
    (index: number) => {
      setValue(
        "options",
        watch().options.filter((_, i) => i !== index)
      );
      validateForm();
    },
    [setValue, validateForm, watch]
  );

  const changeVoteOption = useCallback(
    (index: number, newVo: VoteOption) => {
      clearErrors("options");
      setValue(
        "options",
        watch().options.map((vo, i) => (i === index ? newVo : vo))
      );
      validateForm();
    },
    [clearErrors, setValue, validateForm, watch]
  );

  console.log(formState.errors);

  return (
    <div className={styles.outer}>
      <h2>{payload ? "Update" : "Create new"} Ballot</h2>
      <p className={styles.error}>{}</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="checkbox"
            checked={watch().running}
            onChange={(e) => setValue("running", e.target.checked)}
          />
          Running
        </label>

        <label htmlFor="question">Question:</label>
        <Input
          id="question"
          type="text"
          value={watch().question}
          onChange={(e) => {
            setValue("question", e.target.value);
            validateForm();
          }}
        />

        <h3>Vote Options:</h3>
        {watch().options.map((vo, i) => (
          <VoteOptionView
            key={i}
            voteOption={vo}
            onChange={(vo) => changeVoteOption(i, vo)}
            onRemove={() => removeVoteOption(i)}
            showErrors={Object.keys(formState.errors).includes(`options[${i}]`)}
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
            disabled={!isDirty || !isValid}
          />
          <Button className={styles.cancel} onClick={onFormClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
