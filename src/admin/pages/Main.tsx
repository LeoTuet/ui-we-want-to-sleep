import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  actions as adminLoginActions,
  selectAdminLogin,
} from "../../stores/adminLogin";
import { Button } from "../components/Button";
import { BallotCrud } from "../sections/BallotCrud";
import { TokenGeneration } from "../sections/TokenGeneration";
import styles from "./Main.module.scss";

export const Main = () => {
  const dispatch = useDispatch();
  const { decodedJwt } = useSelector(selectAdminLogin);

  const handleLogout = useCallback(() => {
    dispatch(adminLoginActions.logout());
  }, [dispatch]);

  return (
    <div className={styles.outer}>
      <header className={styles.header}>
        <span className={styles.title}>we.wantToSleep() ADMIN area</span>
        <span className={styles.greeting}>Hello {decodedJwt?.username}</span>
        <Button onClick={handleLogout}>Logout</Button>
      </header>

      <h1>Tokens</h1>
      <TokenGeneration />

      <h1>Ballots</h1>
      <BallotCrud />
    </div>
  );
};
