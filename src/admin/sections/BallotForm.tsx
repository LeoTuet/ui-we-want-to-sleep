import { FormEvent, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Ballot, VoteOption } from "../../models";
import { CreationBallot } from "../../network/ballotApi";
import { createBallot, updateBallot } from "../../stores/admin";
import { WWTSButton, WWTSInput } from "../components/Button";
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
    formState: { isDirty, isValid, errors },
    handleSubmit,
    register,
    setError,
    clearErrors,
  } = useForm<CreationBallot>({
    defaultValues: payload ?? {
      question: { de: "", en: "" },
      options: [],
      running: false,
    },
  });

  // TODO: Should be done with the validation of react-hook-form but i'm to dumb to do it
  const validateForm = useCallback(() => {
    clearErrors();
    if (watch().question.de.length < 1 && watch().question.en.length < 1) {
      setError("question", { message: "Error: Question missing" });
    }

    if (
      watch().options.some(
        (o) =>
          o.label.en.length < 1 ||
          o.label.de.length < 1 ||
          o.identifier.length < 1
      )
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
    validateForm();
  }, [register, validateForm]);

  const onSubmit = useCallback(() => {
    if (payload) {
      dispatch(updateBallot({ ballot: payload, creationBallot: watch() }));
    } else {
      dispatch(createBallot(watch()));
    }
    onFormClose();
  }, [dispatch, onFormClose, payload, watch]);

  const addVoteOption = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setValue(
        "options",
        [...watch().options, { identifier: "", label: { en: "", de: "" } }],
        {
          shouldDirty: true,
          shouldValidate: true,
        }
      );
      validateForm();
    },
    [setValue, validateForm, watch]
  );

  const removeVoteOption = useCallback(
    (index: number) => {
      setValue(
        "options",
        watch().options.filter((_, i) => i !== index),
        { shouldDirty: true, shouldValidate: true }
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
        watch().options.map((vo, i) => (i === index ? newVo : vo)),
        { shouldDirty: true, shouldValidate: true }
      );
      validateForm();
    },
    [clearErrors, setValue, validateForm, watch]
  );

  return (
    <div className={styles.outer}>
      <h2>{payload ? "Update" : "Create new"} Ballot</h2>
      <p className={styles.error}>{}</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="checkbox"
            checked={watch().running}
            onChange={(e) =>
              setValue("running", e.target.checked, {
                shouldDirty: true,
                shouldValidate: true,
              })
            }
          />
          Running
        </label>

        <label htmlFor="question">Question:</label>
        <WWTSInput
          className={styles.input}
          id="question.de"
          type="text"
          placeholder="German Question"
          value={watch().question.de}
          onChange={(e) => {
            setValue("question.de", e.target.value, {
              shouldDirty: true,
              shouldValidate: true,
            });
            validateForm();
          }}
        />
        <WWTSInput
          className={styles.input}
          id="question.en"
          type="text"
          placeholder="English Question"
          value={watch().question.en}
          onChange={(e) => {
            setValue("question.en", e.target.value, {
              shouldDirty: true,
              shouldValidate: true,
            });
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
            showErrors={Object.keys(errors).includes(`options[${i}]`)}
            onlyEdit={!!payload}
          />
        ))}
        <WWTSButton className={styles.addVoteOption} onClick={addVoteOption}>
          +
        </WWTSButton>

        <div>
          <WWTSInput
            className={styles.submit}
            type="submit"
            value="Submit"
            disabled={!isDirty || !isValid}
          />
          <WWTSButton className={styles.cancel} onClick={onFormClose}>
            Cancel
          </WWTSButton>
        </div>
      </form>
    </div>
  );
}
