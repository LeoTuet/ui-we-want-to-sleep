import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { parseJwt } from "../lib/parseJwt";
import { Jwt } from "../network/jwt";
import { post } from "../network/request";
import { RootState, ThunkExtra } from "./rootStore";

export interface AdminLoginState {
  loginError?: string;
  loginLoading: boolean;
  jwt?: string;
  decodedJwt?: Jwt;
}

export const initialState: AdminLoginState = {
  loginError: undefined,
  loginLoading: false,
  jwt: undefined,
  decodedJwt: undefined,
};

export const login = createAsyncThunk<
  string,
  { username: string; password: string },
  ThunkExtra
>(
  "token/fetchTokenStatus",
  async ({ username, password }, { getState, extra: { api } }) => {
    const data = await post<{ accessToken: string }>("/api/admin/login", {
      body: { username, password },
    });
    return data.accessToken;
  }
);

export const generateToken = createAsyncThunk<
  string,
  { amount: number; valid: boolean },
  ThunkExtra
>(
  "token/fetchTokenStatus",
  async ({ amount, valid }, { getState, extra: { api } }) => {
    return api.generateToken("jwt", {
      amount: amount,
      valid: valid,
    });
    // try {
    //   const tokens = await generateToken(jwt, {
    //     amount: tokenNumber,
    //     valid: true,
    //   });
    //   setGeneratedTokens((prev) => [...prev, ...tokens]);
    // } catch (e) {
    //   dispatch((e as FetchError).showToast("Failed to generate tokens"));
    // }
  }
);

export const adminLoginSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    logout(state) {
      state.jwt = undefined;
      state.decodedJwt = undefined;
      console.log("deleted token from store");

      //   dispatch(
      //     actions.addToast({
      //       kind: "info",
      //       timeout_ms: 4000,
      //       children: "You were logged out.",
      //     })
      //   );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log({ payload });
      state.jwt = payload;
      state.decodedJwt = parseJwt(payload);
      state.loginLoading = false;

      console.log(state.jwt, state.decodedJwt);
    });
    builder.addCase(login.rejected, (state) => {
      state.loginLoading = false;
    });
  },
});

export const { reducer } = adminLoginSlice;
export const actions = {
  ...adminLoginSlice.actions,
};

export const selectAdminLoginStore = (state: RootState) => state.adminLogin;

export const selectAdminLogin = createSelector(
  selectAdminLoginStore,
  (store) => ({
    decodedJwt: store.decodedJwt,
    loginLoading: store.loginLoading,
  })
);
