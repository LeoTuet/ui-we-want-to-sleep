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
      <img
        src={theme == "light" ? halfMoon : sun}
        alt={altText[theme]}
        title={germanTitleText[theme]}
      />
    </button>
  );
};

const altText = {
  light: "Moon Icon for Theme Toggle",
  dark: "Sun Icon for Theme Toggle",
};

const germanTitleText = {
  light: "Zum dunklen Design wechseln",
  dark: "Zum hellen Design wechseln",
};

export default ThemeToggle;
