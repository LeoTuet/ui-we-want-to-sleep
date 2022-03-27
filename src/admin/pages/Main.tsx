import { ChangeEvent, useState } from "react";
import { generateToken } from "../../network/adminApi";
import styles from "./Main.module.scss";

interface MainProps {
  username: string;
  accessToken: string;
  onLogout(): void;
}

export const Main = ({ username, accessToken, onLogout }: MainProps) => {
  const [generatedTokens, setGeneratedTokens] = useState<string[]>([]);
  const [tokenNumber, setTokenNumber] = useState(1);

  async function genToken() {
    const tokens = await generateToken(accessToken, {
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
        <div className={styles.greeting}>Hello {username}</div>
        <button onClick={onLogout}>Logout</button>
      </header>

      <h2>Tokens</h2>

      <p>
        {"Generate "}
        <input
          type="number"
          className={styles.tokenNumberInput}
          min={1}
          value={tokenNumber}
          onChange={changeTokenNumber}
        />
        {" tokens "}
        <button className={styles.tokenButton} onClick={genToken}>
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
            <button className={styles.clearTokenButton} onClick={clearTokens}>
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
