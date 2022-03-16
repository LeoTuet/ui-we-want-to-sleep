import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../models";

import { actions, selectUI } from "../stores/ui";

export const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUI);

  const isDefaultDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const isDefaultLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  useEffect(() => {
    const value = window.localStorage.getItem("theme");

    if (value) {
      dispatch(actions.setTheme(value as Theme));
    } else if (isDefaultDark) {
      dispatch(actions.setTheme("dark"));
    } else if (isDefaultLight) {
      dispatch(actions.setTheme("light"));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    if (
      (isDefaultDark && theme === "dark") ||
      (isDefaultLight && theme === "light")
    ) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isDefaultDark, isDefaultLight]);

  return { theme };
};
