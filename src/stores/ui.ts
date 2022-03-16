import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../models";
import { RootState } from "./rootStore";

export interface UIState {
  theme: Theme;
}

export const initialState: UIState = {
  theme: "light",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      if (action.payload) {
        state.theme = action.payload;
      }
    },
    toggleTheme(state) {
      if (localStorage.getItem("theme")) {
        const newTheme = getOppositeTheme(
          localStorage.getItem("theme") as Theme
        );
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.removeItem("theme");
        state.theme = newTheme;
      } else {
        const newTheme = getOppositeTheme(
          document.documentElement.getAttribute("data-theme") as Theme
        );
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        state.theme = newTheme;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { reducer } = uiSlice;
export const actions = {
  ...uiSlice.actions,
};

export const selectUIStore = (state: RootState) => state.ui;

export const selectUI = createSelector(selectUIStore, (store) => ({
  theme: store.theme,
}));

const getOppositeTheme = (oldTheme: Theme): Theme => {
  if (oldTheme === "dark") return "light";
  else return "dark";
};
