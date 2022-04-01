import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../network/Api";
import {
  ballotSlice,
  BallotState,
  initialState as ballotState,
} from "./ballot";
import { initialState as tokenState, tokenSlice, TokenState } from "./token";
import { initialState as uiState, uiSlice, UIState } from "./ui";
import { initialState as voteState, voteSlice, VoteState } from "./vote";
import { initialState as jwtState, jwtSlice, JwtState } from "./jwts";

export type RootState = {
  ballot: BallotState;
  token: TokenState;
  vote: VoteState;
  ui: UIState;
  jwt: JwtState;
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
      ui: uiSlice.reducer,
      jwt: jwtSlice.reducer,
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
  ui: uiState,
  jwt: jwtState,
};
