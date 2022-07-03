import { createReducer } from "@reduxjs/toolkit";
import { incrementActions } from "./actions/counter-increment.actions";
import { counterInitialState } from "./counter-state";

export const counterReducerToolkit = createReducer(
  counterInitialState,
  (builder) => {
    builder.addCase(incrementActions, (state, _payload) => {
      state.value += 1;
    });
  }
);
