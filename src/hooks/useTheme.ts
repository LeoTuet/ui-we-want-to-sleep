import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../models";

import { actions, selectUI } from "../stores/ui";

export const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUI);

  useEffect(() => {
    const value = window.localStorage.getItem("theme");

    if (value) {
      dispatch(actions.setTheme(value as Theme));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch(actions.setTheme("dark"));
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      dispatch(actions.setTheme("light"));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme };
};
