import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { generateToken, selectGeneratedToken } from "../../stores/admin";
import { actions as adminActions } from "../../stores/admin";
import { WWTSButton, WWTSInput } from "../components/Button";
import { DownloadFile } from "../components/DownloadFile";
import styles from "./TokenGen.module.scss";

export function TokenGeneration() {
  const { generatedToken } = useSelector(selectGeneratedToken);
  const [tokenNumber, setTokenNumber] = useState(1);
  const dispatch = useDispatch();

  const handleTokenGeneration = useCallback(() => {
    dispatch(generateToken({ amount: tokenNumber, valid: true }));
  }, [dispatch, tokenNumber]);

  const handleClearToken = useCallback(() => {
    dispatch(adminActions.clearToken());
  }, [dispatch]);

  function changeTokenNumber(e: ChangeEvent<HTMLInputElement>) {
    const number = +e.target.value;
    setTokenNumber(Number.isNaN(number) ? 1 : number);
  }

  return (
    <>
      <p>
        Generate
        <WWTSInput
          type="number"
          className={styles.tokenNumberInput}
          min={1}
          value={tokenNumber}
          onChange={changeTokenNumber}
        />
        tokens
        <WWTSButton onClick={handleTokenGeneration}>GO</WWTSButton>
      </p>

      {generatedToken.length > 0 && (
        <>
          <p>
            <strong>Tokens generated:</strong>
          </p>
          <ul className={styles.tokenList}>
            {generatedToken.map((token) => (
              <li key={token}>{token}</li>
            ))}
          </ul>
          <p>
            <DownloadFile
              contents={generatedToken.join("\n")}
              type="text/plain"
              download={`WWTS_${
                generatedToken.length
              }_tokens_${formatDate()}_${timestamp()}.txt`}
            >
              Download
            </DownloadFile>
            <WWTSButton onClick={handleClearToken}>Clear tokens</WWTSButton>
          </p>
        </>
      )}
    </>
  );
}

function formatDate(): string {
  return new Date().toISOString().substring(0, 10);
}

function timestamp(): number {
  return (Date.now() / 1000) | 0;
}
