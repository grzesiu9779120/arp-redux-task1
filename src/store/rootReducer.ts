import { combineReducers } from "redux";
import { counterReducer } from "./counter/counter-reducer";
import { toDoListReducer } from "./toDoList/toDoList-reducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: toDoListReducer,
});
