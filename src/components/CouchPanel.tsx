import styles from "./CouchPanel.module.scss";
import sofa from "../assets/sofa.png";
import classNames from "classnames";

export interface CouchPanelProps {
  mainText?: string;
  subText?: string
  flipped?: boolean
}

export const CouchPanel = ({mainText, subText, flipped = false}: CouchPanelProps) => {


  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h4>{mainText}</h4>
          <p>{subText}</p>
        </div>
        <div className={classNames(styles.sofaContainer, {[styles.flipped]: flipped})}>
          <img src={sofa} className={styles.sofa} alt="Couch"/>
        </div>
      </div>
    </div>
  );
};
