import {
  createAsyncThunk,
  createSelector,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import { Ballot } from "../models";

import { RootState, ThunkExtra } from "./rootStore";

export interface BallotState {
  runningBallot?: Ballot;
  ballotError?: SerializedError;
  ballotLoading?: boolean;
}

export const initialState: BallotState = {
  runningBallot: undefined,
  ballotError: undefined,
  ballotLoading: false,
};

export const fetchRunningBallot = createAsyncThunk<
  Ballot | undefined,
  undefined,
  ThunkExtra
>("ballot/fetchRunningBallot", async (_, { extra: { api }}) => {
  return await api.ballotApi.fetchRunningBallot();
});

export const ballotSlice = createSlice({
  name: "ballot",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRunningBallot.pending, (state) => {
      state.ballotError = undefined;
      state.ballotLoading = true;
    });
    builder.addCase(fetchRunningBallot.fulfilled, (state, action) => {
      if (action.payload) {
        state.runningBallot = action.payload;
      }
      state.ballotLoading = false;
    });
    builder.addCase(fetchRunningBallot.rejected, (state, action) => {
      state.ballotError = action.error;
      state.ballotLoading = false;
    });
  },
});

export const { reducer } = ballotSlice;
export const actions = {
  ...ballotSlice.actions,
  fetchRunningBallot,
};

export const selectBallotStore = (state: RootState) => state.ballot;

export const selectBallot = createSelector(selectBallotStore, (store) => ({
  ballot: store.runningBallot,
  ballotLoading: store.ballotLoading,
  ballotError: store.ballotError,
}));