import { useDispatch, useSelector } from "react-redux";
import { selectUIStore, actions } from "../stores/ui";
import styles from "./ThemeToggle.module.scss";
import halfMoon from "../assets/half-moon.png";
import sun from "../assets/sun.png";

const ThemeToggle = () => {
  const { theme } = useSelector(selectUIStore);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(actions.toggleTheme());
  };

  return (
    <button className={styles.button} onClick={handleChangeTheme}>
      {theme == "light" ? (
        <img
          src={halfMoon}
          alt="Moon Icon for Theme Toggle"
          title="Zum dunklen Design wechseln"
        />
      ) : (
        <img
          src={sun}
          alt="Sun Icon for Theme Toggle"
          title="Zum hellen Design wechseln"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
