import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { generateToken, selectGeneratedToken } from "../../stores/adminLogin";
import { actions as adminActions } from "../../stores/adminLogin";
import { Button, Input } from "../components/Button";
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
        <Input
          type="number"
          className={styles.tokenNumberInput}
          min={1}
          value={tokenNumber}
          onChange={changeTokenNumber}
        />
        tokens
        <Button onClick={handleTokenGeneration}>GO</Button>
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
            <Button onClick={handleClearToken}>Clear tokens</Button>
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
