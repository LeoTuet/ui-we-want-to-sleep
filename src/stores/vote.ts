import {
  createAsyncThunk,
  createSelector,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

import { selectBallot } from "./ballot";
import { RootState, ThunkExtra } from "./rootStore";
import { selectToken } from "./token";

export interface VoteState {
  voteError?: SerializedError;
  voteLoading: boolean;
  voteResult?: "SUCCESS";
}

export const initialState: VoteState = {
  voteError: undefined,
  voteLoading: false,
  voteResult: undefined,
};

export const recordVote = createAsyncThunk<void, string, ThunkExtra>(
  "vote/recordVote",
  async (identifier, { getState, extra: { api } }) => {
    const { token, captchaToken } = selectToken(getState() as RootState);
    const { ballot } = selectBallot(getState() as RootState);

    if (ballot && token && captchaToken) {
      await api.voteApi.recordVote(identifier, ballot._id, token, captchaToken);
    }
  }
);

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(recordVote.pending, (state) => {
      state.voteError = undefined;
      state.voteLoading = true;
    });
    builder.addCase(recordVote.fulfilled, (state) => {
      state.voteLoading = false;
      state.voteResult = "SUCCESS";
    });
    builder.addCase(recordVote.rejected, (state, action) => {
      state.voteError = action.error;
      state.voteLoading = false;
    });
  },
});

export const { reducer } = voteSlice;
export const actions = {
  ...voteSlice.actions,
};

export const selectVoteStore = (state: RootState) => state.vote;

export const selectVote = createSelector(selectVoteStore, (store) => ({
  voteError: store.voteError,
  voteLoading: store.voteLoading,
  voteResult: store.voteResult,
}));
