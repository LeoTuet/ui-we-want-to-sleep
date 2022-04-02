import { ChangeEvent, useState } from "react";
import { DownloadFile } from "../../components/DownloadFile";
import { generateToken } from "../../network/adminApi";
import { Jwt } from "../../network/jwt";
import styles from "./Main.module.scss";

interface MainProps {
  jwt: Jwt;
  onLogout(): void;
}

export const Main = ({ jwt, onLogout }: MainProps) => {
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
    <div className={styles.outer}>
      <header className={styles.header}>
        <div className={styles.title}>we.wantToSleep() ADMIN area</div>
        <div className={styles.greeting}>Hello {jwt.username}</div>
        <button onClick={onLogout}>Logout</button>
      </header>

      <h2>Tokens</h2>

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

      <h2>Ballots</h2>
      <p>This is not implemented yet!</p>
    </div>
  );
};

function formatDate(): string {
  return new Date().toISOString().substring(0, 10);
}

function timestamp(): number {
  return (Date.now() / 1000) | 0;
}
