import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./rootStore";

export interface TokenState {
  token?: string;
  captchaToken?: string;
}

export const initialState: TokenState = {
  token: undefined,
  captchaToken: undefined,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    saveToken(state, action: PayloadAction<string>) {
      if (action.payload) {
        state.token = action.payload;
      }
    },
    saveCaptchaToken(state, action: PayloadAction<string>) {
      if (action.payload) {
        state.captchaToken = action.payload;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { reducer } = tokenSlice;
export const actions = {
  ...tokenSlice.actions,
};

export const selectTokenStore = (state: RootState) => state.token;

export const selectToken = createSelector(selectTokenStore, (store) => ({
  token: store.token,
  captchaToken: store.captchaToken,
}));
