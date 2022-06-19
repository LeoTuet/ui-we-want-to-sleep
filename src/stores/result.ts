import {
  createAsyncThunk,
  createSelector,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

import { TotalVoteCount } from "../models";
import { VoteResult } from "./../models/index";
import { selectBallot } from "./ballot";
import { RootState, ThunkExtra } from "./rootStore";

export interface ResultState {
  voteResult?: VoteResult[];
  voteResultError?: SerializedError;
  voteResultLoading?: boolean;
  totalVoteCount?: number;
  totalVoteCountError?: SerializedError;
  totalVoteCountLoading: boolean;
}

export const initialState: ResultState = {
  voteResult: undefined,
  voteResultError: undefined,
  voteResultLoading: false,
  totalVoteCount: undefined,
  totalVoteCountError: undefined,
  totalVoteCountLoading: false,
};

export const fetchVoteResult = createAsyncThunk<
  VoteResult[] | undefined,
  string,
  ThunkExtra
>("result/fetchVoteResult", async (ballotID, { extra: { api } }) => {
  return await api.ballotApi.getVoteResult(ballotID);
});

export const fetchTotalVoteCount = createAsyncThunk<
  TotalVoteCount | undefined,
  string,
  ThunkExtra
>("result/fetchTotalVoteCount", async (ballotID, { extra: { api } }) => {
  return await api.ballotApi.getTotalVoteCount(ballotID);
});

export const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVoteResult.pending, (state) => {
      state.voteResultError = undefined;
      state.voteResultLoading = true;
    });
    builder.addCase(fetchVoteResult.fulfilled, (state, action) => {
      if (action.payload) {
        state.voteResult = action.payload;
      }
      state.voteResultLoading = false;
    });
    builder.addCase(fetchVoteResult.rejected, (state, action) => {
      state.voteResultError = action.error;
      state.voteResultLoading = false;
    });
    builder.addCase(fetchTotalVoteCount.pending, (state) => {
      state.totalVoteCountError = undefined;
      state.totalVoteCountLoading = true;
    });
    builder.addCase(fetchTotalVoteCount.fulfilled, (state, action) => {
      if (action.payload) {
        state.totalVoteCount = action.payload.count;
      }
      state.totalVoteCountLoading = false;
    });
    builder.addCase(fetchTotalVoteCount.rejected, (state, action) => {
      state.totalVoteCountError = action.error;
      state.totalVoteCountLoading = false;
    });
  },
});

export const { reducer } = resultSlice;
export const actions = {
  ...resultSlice.actions,
  fetchVoteResult,
  fetchTotalVoteCount,
};

export const selectResultStore = (state: RootState) => state.result;

export const selectResult = createSelector(selectResultStore, (store) => ({
  voteResult: store.voteResult,
  voteResultError: store.voteResultError,
  voteResultLoading: store.voteResultLoading,
  totalVoteCount: store.totalVoteCount,
  totalVoteCountError: store.totalVoteCountError,
  totalVoteCountLoading: store.totalVoteCountLoading,
}));
