import { Link } from "react-router-dom";
import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
  return (
    <Link to="/" className={styles.title}>
      we.
      <div style={{ color: "#FFF153" }}>wantToSleep</div>
      ()_
    </Link>
  );
};

export default HeaderSection;
