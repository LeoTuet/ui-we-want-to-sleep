import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme, CookieConsent } from "../models";
import { RootState } from "./rootStore";

export interface UIState {
  theme: Theme;
  cookieConsent: CookieConsent;
}

export const initialState: UIState = {
  theme: "light",
  cookieConsent: undefined,
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
      state.theme = state.theme == "light" ? "dark" : "light";
    },
    setCookieConsent(state, action: PayloadAction<CookieConsent>) {
      if (action.payload) state.cookieConsent = action.payload;
    },
    consentCookies(state) {
      state.cookieConsent = "accepted";
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
  cookieConsent: store.cookieConsent,
}));
