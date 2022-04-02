import { ChangeEvent, useState } from "react";
import { DownloadFile } from "../../components/DownloadFile";
import { generateToken } from "../../network/adminApi";
import { Jwt } from "../../network/jwt";
import styles from "./TokenGen.module.scss";

interface TokenGenerationProps {
  jwt: Jwt;
}

export function TokenGeneration({ jwt }: TokenGenerationProps) {
  const [generatedTokens, setGeneratedTokens] = useState<string[]>([]);
  const [tokenNumber, setTokenNumber] = useState(1);

  async function genToken() {
    const tokens = await generateToken(jwt.encoded, {
      amount: tokenNumber,
      valid: true,
    });
    setGeneratedTokens((prev) => [...prev, ...tokens]);
  }

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
        <input
          type="number"
          className={styles.tokenNumberInput}
          min={1}
          value={tokenNumber}
          onChange={changeTokenNumber}
        />
        tokens
        <button className={styles.button} onClick={genToken}>
          GO
        </button>
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
              className={styles.button}
              contents={generatedTokens.join("\n")}
              type="text/plain"
              download={`WWTS_${
                generatedTokens.length
              }_tokens_${formatDate()}_${timestamp()}.txt`}
            >
              Download
            </DownloadFile>
            <button className={styles.button} onClick={clearTokens}>
              Clear tokens
            </button>
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
