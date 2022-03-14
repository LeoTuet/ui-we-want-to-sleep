import React, { useEffect, useState } from "react";
import halfMoon from "../assets/half-moon.png";
import sheep from "../assets/sheep.png";
import { Theme } from "../models";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>();
  useEffect(() => {
    // Checks initial Theme
    const theme = document.documentElement.getAttribute("data-theme") as Theme;
    setTheme(theme);
  }, []);

  const handleChangeTheme = () => {
    if (localStorage.getItem("theme")) {
      const newTheme = getOppositeTheme(localStorage.getItem("theme") as Theme);
      document.documentElement.setAttribute("data-theme", newTheme as string);
      localStorage.removeItem("theme");
    } else {
      const newTheme = getOppositeTheme(
        document.documentElement.getAttribute("data-theme") as Theme
      );
      document.documentElement.setAttribute("data-theme", newTheme as string);
      localStorage.setItem("theme", newTheme as string);
    }
  };

  const getOppositeTheme = (oldTheme: Theme) => {
    if (oldTheme === "dark") return "light";
    else if (oldTheme === "light") return "dark";
  };

  return (
    <div onClick={handleChangeTheme}>
      <img
        src={theme ? halfMoon : sheep}
        alt={"Moon Icon for Theme Toggle"}
        width={"50"}
      />
    </div>
  );
};

export default ThemeToggle;
