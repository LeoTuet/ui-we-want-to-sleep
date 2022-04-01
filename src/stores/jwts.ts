import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Jwt } from "../network/jwt";
import { RootState } from "./rootStore";

export interface JwtState {
  jwts: Record<string, [Jwt, NodeJS.Timeout]>;
}

export const initialState: JwtState = {
  jwts: {},
};

export const jwtSlice = createSlice({
  name: "jwt",
  initialState,
  reducers: {
    setJwt(state, action: PayloadAction<[string, Jwt, NodeJS.Timeout]>) {
      const [name, jwt, timeout] = action.payload;
      if (state.jwts[name]) {
        clearTimeout(state.jwts[name][1]);
      }

      state.jwts[name] = [jwt, timeout];
      localStorage.setItem(name, jwt.encoded);
    },
    deleteJwt(state, action: PayloadAction<string>) {
      if (state.jwts[action.payload]) {
        clearTimeout(state.jwts[action.payload][1]);
        delete state.jwts[action.payload];
        localStorage.removeItem(action.payload);
      }
    },
  },
});

export const { reducer } = jwtSlice;
export const actions = {
  ...jwtSlice.actions,
};

export const selectJwtStore = (state: RootState) => state.jwt;

export const selectJwt = createSelector(selectJwtStore, (store) => ({
  jwts: store.jwts,
}));
