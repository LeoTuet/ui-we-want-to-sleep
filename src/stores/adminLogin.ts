import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { parseJwt } from "../lib/parseJwt";
import { Ballot } from "../models";
import { CreationBallot } from "../network/ballotApi";
import { Jwt } from "../network/jwt";
import { post } from "../network/request";
import { RootState, ThunkExtra } from "./rootStore";

export interface AdminLoginState {
  loginError?: string;
  loginLoading: boolean;
  jwt?: string;
  decodedJwt?: Jwt;
  generatedToken: string[];
  ballots: Ballot[];
}

export const initialState: AdminLoginState = {
  loginError: undefined,
  loginLoading: false,
  jwt: undefined,
  decodedJwt: undefined,
  generatedToken: [],
  ballots: [],
};

export const login = createAsyncThunk<
  string,
  { username: string; password: string },
  ThunkExtra
>(
  "adminLogin/login",
  async ({ username, password }, { getState, extra: { api } }) => {
    const data = await post<{ accessToken: string }>("/api/admin/login", {
      body: { username, password },
    });
    return data.accessToken;
  }
);

export const createBallot = createAsyncThunk<
  Ballot,
  CreationBallot,
  ThunkExtra
>(
  "adminLogin/createBallot",
  async (creationBallot, { getState, extra: { api } }) => {
    const { decodedJwt } = selectAdminLogin(getState() as RootState);

    if (!decodedJwt) {
      throw new Error("You must be logged in to generate token");
    }

    return api.ballotApi.addBallot(decodedJwt, creationBallot);
  }
);

export const generateToken = createAsyncThunk<
  string[],
  { amount: number; valid: boolean },
  ThunkExtra
>(
  "adminLogin/generateToken",
  async ({ amount, valid }, { getState, extra: { api } }) => {
    const { decodedJwt } = selectAdminLogin(getState() as RootState);

    if (!decodedJwt) {
      throw new Error("You must be logged in to generate token");
    }

    return api.adminApi.generateToken(decodedJwt, {
      amount: amount,
      valid: valid,
    });
  }
);

export const fetchAllBallots = createAsyncThunk<
  Ballot[],
  undefined,
  ThunkExtra
>("adminLogin/fetchAllBallots", async (_, { getState, extra: { api } }) => {
  return api.ballotApi.fetchAllBallots();
});

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
    clearToken(state) {
      state.generatedToken = [];
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
    builder.addCase(generateToken.fulfilled, (state, { payload }) => {
      state.generatedToken = [...state.generatedToken, ...payload];
    });
    builder.addCase(generateToken.rejected, (state) => {
      console.error("Token Generation Failed");
    });

    builder.addCase(fetchAllBallots.fulfilled, (state, { payload }) => {
      state.ballots = payload;
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

export const selectGeneratedToken = createSelector(
  selectAdminLoginStore,
  ({ generatedToken }) => ({
    generatedToken,
  })
);

export const selectBallots = createSelector(
  selectAdminLoginStore,
  ({ ballots }) => ({
    ballots,
  })
);
