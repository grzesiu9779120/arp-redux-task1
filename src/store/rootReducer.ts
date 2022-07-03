import { combineReducers } from "redux";
import { basketSlice } from "./basket/basketSlice";
import { counterReducerToolkit } from "./counter-toolkit/counter-reducer";
import { counterReducer } from "./counter/counter-reducer";
import { toDoListReducer } from "./toDoList/toDoList-reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: toDoListReducer,
  counterToolkit: counterReducerToolkit,
  basket: basketSlice.reducer,
});
