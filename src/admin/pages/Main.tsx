import { Jwt } from "../../network/jwt";
import { BallotCrud } from "../sections/BallotCrud";
import { TokenGeneration } from "../sections/TokenGeneration";
import styles from "./Main.module.scss";

interface MainProps {
  jwt: Jwt;
  onLogout(): void;
}

export const Main = ({ jwt, onLogout }: MainProps) => {
  return (
    <div className={styles.outer}>
      <header className={styles.header}>
        <div className={styles.title}>we.wantToSleep() ADMIN area</div>
        <div className={styles.greeting}>Hello {jwt.username}</div>
        <button onClick={onLogout}>Logout</button>
      </header>

      <h1>Tokens</h1>
      <TokenGeneration jwt={jwt} />

      <h1>Ballots</h1>
      <BallotCrud jwt={jwt} />
    </div>
  );
};
