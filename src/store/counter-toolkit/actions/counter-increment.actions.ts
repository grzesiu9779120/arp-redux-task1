import { createAction } from "@reduxjs/toolkit";
import { CounterActionsNameEnum } from "./counter-actions-name-enums";

export const incrementActions = createAction<undefined>(
  CounterActionsNameEnum.INCREMENT
);
