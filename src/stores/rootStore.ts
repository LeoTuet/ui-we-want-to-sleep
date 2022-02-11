import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../network/Api";

import {
  ballotSlice,
  BallotState,
  initialState as ballotState,
} from "./ballot";

export type RootState = {
  ballot: BallotState;
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
};
