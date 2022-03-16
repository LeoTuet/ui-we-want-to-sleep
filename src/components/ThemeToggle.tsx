import { useDispatch, useSelector } from "react-redux";
import { selectUIStore, actions } from "../stores/ui";
import halfMoon from "../assets/half-moon.png";
import sheep from "../assets/sheep.png";

const ThemeToggle = () => {
  const { theme } = useSelector(selectUIStore);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(actions.toggleTheme());
  };

  return (
    <div onClick={handleChangeTheme}>
      <img
        src={theme === "light" ? halfMoon : sheep}
        alt={"Moon Icon for Theme Toggle"}
        width={"50"}
      />
    </div>
  );
};

export default ThemeToggle;
