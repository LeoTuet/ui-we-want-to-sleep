import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

import { store } from "..";
import { RootState } from "./rootStore";

interface ToastProps {
  kind: "info" | "error";
  title?: ReactNode;
  children: ReactNode;
  timeout_ms?: number;
}

export interface ToastState {
  toasts: ToastProps[];
}

export const initialState: ToastState = {
  toasts: [],
};

export const toastSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast(state, action: PayloadAction<ToastProps>) {
      const { timeout_ms, ...props } = action.payload;
      const length = state.toasts.push(props);

      if (timeout_ms) {
        setTimeout(() => {
          store.dispatch(actions.removeToastIndex(length - 1));
        }, timeout_ms);
      }
    },

    removeToastIndex(state, action: PayloadAction<number>) {
      delete state.toasts[action.payload];
    },
  },
});

export const { reducer } = toastSlice;
export const actions = {
  ...toastSlice.actions,
};

export const selectToastStore = (state: RootState) => state.toasts;

export const selectToasts = createSelector(selectToastStore, (store) => ({
  toasts: store.toasts,
}));
