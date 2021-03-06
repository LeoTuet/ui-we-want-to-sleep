import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { WWTSButton } from "../../components/Button";
import { actions as adminActions, selectAdminLogin } from "../../stores/admin";
import { BallotCrud } from "../sections/BallotCrud";
import { TokenGeneration } from "../sections/TokenGeneration";
import styles from "./Main.module.scss";

export const Main = () => {
  const dispatch = useDispatch();
  const { decodedJwt } = useSelector(selectAdminLogin);

  const handleLogout = useCallback(() => {
    dispatch(adminActions.logout());
  }, [dispatch]);

  return (
    <div className={styles.outer}>
      <header className={styles.header}>
        <span className={styles.title}>we.wantToSleep() ADMIN area</span>
        <span className={styles.greeting}>Hello {decodedJwt?.username}</span>
        <WWTSButton variant="admin" onClick={handleLogout}>
          Logout
        </WWTSButton>
      </header>

      <h1>Tokens</h1>
      <TokenGeneration />

      <h1>Ballots</h1>
      <BallotCrud />
    </div>
  );
};
