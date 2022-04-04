import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../models";
import { RootState } from "./rootStore";

export interface UIState {
  theme: Theme;
}

export const initialState: UIState = {
  theme: "default",
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
  },
});

export const { reducer } = uiSlice;
export const actions = {
  ...uiSlice.actions,
};

export const selectUIStore = (state: RootState) => state.ui;

export const selectUI = createSelector(selectUIStore, (store) => ({
  theme: store.theme,
}));
