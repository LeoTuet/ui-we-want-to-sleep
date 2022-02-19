import {configureStore} from "@reduxjs/toolkit";
import {Api} from "../network/Api";

import {
  ballotSlice,
  BallotState,
  initialState as ballotState,
} from "./ballot";

import {
  tokenSlice,
  TokenState,
  initialState as tokenState,
} from "./token";

import {
  voteSlice,
  VoteState,
  initialState as voteState
} from "./vote";

export type RootState = {
  ballot: BallotState;
  token: TokenState;
  vote: VoteState;
};

export type ThunkExtra = {
  extra: {
    api: Api;
  };
};

export const createStore = (api: Api) =>
  configureStore({
    reducer: {
      ballot: ballotSlice.reducer,
      token: tokenSlice.reducer,
      vote: voteSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api,
          },
        },
      }),
  });

export const initialRootState: RootState = {
  ballot: ballotState,
  token: tokenState,
  vote: voteState,
};
