import { Trans } from "react-i18next";

import voteHere from "../assets/arrow-down.svg";
import styles from "./VoteHere.module.scss";

export function VoteHere(): React.ReactElement {
  return (
    <div className={styles.voteHere}>
      <img src={voteHere} alt=""></img>
      <p className={styles.label}>
        <Trans i18nKey="ui.voteHere" />
      </p>
      <img src={voteHere} alt=""></img>
    </div>
  );
}
