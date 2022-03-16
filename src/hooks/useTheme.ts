import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../models";

import { actions, selectUI } from "../stores/ui";

export const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectUI);

  useEffect(() => {
    const value = window.localStorage.getItem("theme");
    dispatch(actions.setTheme(value as Theme));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    dispatch(actions.toggleTheme());
  }, [dispatch]);

  return [theme, toggleTheme];
};
