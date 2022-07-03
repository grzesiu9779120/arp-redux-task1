import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { ToDoListActionsNamesEnum } from "../toDoList-actions-names.enum";

export interface IToDoListDeleteTaskActionPayload {
  id: number;
}

export interface IToDoListDeleteTaskAction
  extends IAction<
    typeof ToDoListActionsNamesEnum.DELETE_TASK,
    IToDoListDeleteTaskActionPayload
  > {}

export const toDoListDeleteTask = (
  payload: IToDoListDeleteTaskActionPayload
): IToDoListDeleteTaskAction =>
  createAction(ToDoListActionsNamesEnum.DELETE_TASK, payload);
