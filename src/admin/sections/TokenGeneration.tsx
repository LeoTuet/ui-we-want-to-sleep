import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { generateToken } from "../../stores/adminLogin";
import { Button, Input } from "../components/Button";
import { DownloadFile } from "../components/DownloadFile";
import styles from "./TokenGen.module.scss";

export function TokenGeneration() {
  const [generatedTokens, setGeneratedTokens] = useState<string[]>([]);
  const [tokenNumber, setTokenNumber] = useState(1);
  const dispatch = useDispatch();

  const handleTokenGeneration = useCallback(() => {
    dispatch(generateToken);
  }, [dispatch]);

  function changeTokenNumber(e: ChangeEvent<HTMLInputElement>) {
    const number = +e.target.value;
    setTokenNumber(Number.isNaN(number) ? 1 : number);
  }

  function clearTokens() {
    setGeneratedTokens([]);
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

      {generatedTokens.length > 0 && (
        <>
          <p>
            <strong>Tokens generated:</strong>
          </p>
          <ul className={styles.tokenList}>
            {generatedTokens.map((token) => (
              <li key={token}>{token}</li>
            ))}
          </ul>
          <p>
            <DownloadFile
              contents={generatedTokens.join("\n")}
              type="text/plain"
              download={`WWTS_${
                generatedTokens.length
              }_tokens_${formatDate()}_${timestamp()}.txt`}
            >
              Download
            </DownloadFile>
            <Button onClick={clearTokens}>Clear tokens</Button>
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
