import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { parseJwt } from "../lib/parseJwt";
import { Ballot, Jwt } from "../models";
import { CreationBallot } from "../network/ballotApi";
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
>("adminLogin/login", async ({ username, password }, { extra: { api } }) => {
  const data = await api.adminApi.loginAdmin({ username, password });
  return data;
});

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

export const updateBallot = createAsyncThunk<
  Ballot,
  { ballot: Ballot; creationBallot: CreationBallot },
  ThunkExtra
>(
  "adminLogin/updateBallot",
  async ({ ballot, creationBallot }, { getState, extra: { api } }) => {
    const { decodedJwt } = selectAdminLogin(getState() as RootState);

    if (!decodedJwt) {
      throw new Error("You must be logged in to generate token");
    }

    return api.ballotApi.updateBallot(decodedJwt, ballot._id, {
      ...ballot,
      ...creationBallot,
    });
  }
);

export const deleteBallot = createAsyncThunk<void, Ballot, ThunkExtra>(
  "adminLogin/deleteBallot",
  async (ballot, { getState, extra: { api } }) => {
    const { decodedJwt } = selectAdminLogin(getState() as RootState);

    if (!decodedJwt) {
      throw new Error("You must be logged in to generate token");
    }

    return api.ballotApi.deleteBallot(decodedJwt, ballot._id);
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
>("adminLogin/fetchAllBallots", async (_, { extra: { api } }) => {
  return api.ballotApi.fetchAllBallots();
});

export const adminLoginSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    logout(state) {
      state.jwt = undefined;
      state.decodedJwt = undefined;
      localStorage.removeItem("accessToken");
    },
    clearToken(state) {
      state.generatedToken = [];
    },

    setAccessToken(state, { payload }: PayloadAction<string>) {
      state.jwt = payload;
      state.decodedJwt = parseJwt(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loginLoading = true;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.jwt = payload;
      state.decodedJwt = parseJwt(payload);
      state.loginLoading = false;
    });

    builder.addCase(login.rejected, (state) => {
      state.loginLoading = false;
    });

    builder.addCase(generateToken.fulfilled, (state, { payload }) => {
      state.generatedToken = [...state.generatedToken, ...payload];
    });

    builder.addCase(fetchAllBallots.fulfilled, (state, { payload }) => {
      state.ballots = payload;
    });

    builder.addCase(createBallot.fulfilled, (state, { payload }) => {
      state.ballots = [...state.ballots, payload];
    });

    builder.addCase(deleteBallot.fulfilled, (state, { meta }) => {
      state.ballots = state.ballots.filter(
        (ballot) => ballot._id !== meta.arg._id
      );
    });

    builder.addCase(updateBallot.fulfilled, (state, { payload }) => {
      state.ballots = state.ballots.map((ballot) =>
        ballot._id === payload._id ? payload : ballot
      );
    });

    createBallot;
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
    jwt: store.jwt,
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
