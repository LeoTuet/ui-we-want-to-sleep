import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions, selectUI } from "../stores/ui";

export const useTheme = () => {
  const dispatch = useDispatch();
  let { theme } = useSelector(selectUI);

  const isDefaultDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (theme === "default") {
    const value = window.localStorage.getItem("theme");

    if (value != null && (value === "light" || value === "dark")) {
      theme = value;
    } else if (isDefaultDark) {
      theme = "dark";
    } else {
      theme = "light";
    }

    dispatch(actions.setTheme(theme));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    if (isDefaultDark === (theme === "dark")) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isDefaultDark]);

  return { theme };
};
