import { useDispatch, useSelector } from "react-redux";
import halfMoon from "../assets/half-moon.png";
import sheep from "../assets/sheep.png";
import { selectUIStore, actions } from "../stores/ui";

const ThemeToggle = () => {
  const uiStore = useSelector(selectUIStore);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(actions.toggleTheme());
  };

  return (
    <div onClick={handleChangeTheme}>
      <img
        src={uiStore.theme === "light" ? halfMoon : sheep}
        alt={"Moon Icon for Theme Toggle"}
        width={"50"}
      />
    </div>
  );
};

export default ThemeToggle;
