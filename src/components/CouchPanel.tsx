import styles from "./CouchPanel.module.scss";
import sofa from "../assets/sofa.png";

export interface CouchPanelProps {
  mainText?: string;
  subText?: string
}

export const CouchPanel = ({mainText, subText}: CouchPanelProps) => {

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h4>{mainText}</h4>
          <p>{subText}</p>
        </div>
        <div className={styles.sofaContainer}>
          <img src={sofa} className={styles.sofa} alt="Couch"/>
        </div>
      </div>
    </div>
  );
};
