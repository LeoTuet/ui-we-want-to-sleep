import { NoVotingType } from "./../sections/NoVotingSection";
import {
  createSelector,
  createSlice,
  PayloadAction,
  createAsyncThunk,
  SerializedError,
} from "@reduxjs/toolkit";
import { TokenStatus } from "../models";
import { RootState, ThunkExtra } from "./rootStore";
import { selectBallot } from "./ballot";

export interface TokenState {
  token?: string;
  captchaToken?: string;
  statusError?: SerializedError;
  statusLoading: boolean;
  statusResult?: TokenStatus;
}

export const initialState: TokenState = {
  token: undefined,
  captchaToken: undefined,
  statusError: undefined,
  statusLoading: false,
  statusResult: undefined,
};

export const fetchTokenStatus = createAsyncThunk<
  TokenStatus | undefined,
  undefined,
  ThunkExtra
>("token/fetchTokenStatus", async (_, { getState, extra: { api } }) => {
  const { token } = selectToken(getState() as RootState);
  const { ballot } = selectBallot(getState() as RootState);
  if (token && ballot) {
    return await api.tokenApi.getStatus(ballot._id, token);
  }
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchTokenStatus.pending, (state) => {
      state.statusError = undefined;
      state.statusLoading = true;
    });
    builder.addCase(fetchTokenStatus.fulfilled, (state, action) => {
      state.statusLoading = false;
      state.statusResult = action.payload;
    });
    builder.addCase(fetchTokenStatus.rejected, (state, action) => {
      state.statusError = action.error;
      state.statusLoading = false;
    });
  },
});

export const { reducer } = tokenSlice;
export const actions = {
  ...tokenSlice.actions,
  fetchTokenStatus,
};

export const selectTokenStore = (state: RootState) => state.token;

export const selectToken = createSelector(selectTokenStore, (store) => ({
  token: store.token,
  captchaToken: store.captchaToken,
  statusError: store.statusError,
  statusLoading: store.statusLoading,
  statusResult: getStatusResult(store.statusResult),
}));

const getStatusResult = (result: TokenStatus | undefined): string => {
  if (result) {
    if (result.exists) {
      if (result.used) {
        return "USED";
      } else if (!result.valid) {
        return "INVALID";
      } else return "VALID";
    } else return "NONE_EXISTENT";
  } else return "MISSING";
};
