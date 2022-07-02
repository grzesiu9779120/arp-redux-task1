import { TaskProps } from "../../../ToDoList/Task/Task";
import { IAction } from "../../action";
import { createAction } from "../../action-creator";
import { ToDoListActionsNamesEnum } from "../toDoList-actions-names.enum";

export interface IToDoListAddTaskActionPayload {
  task: TaskProps;
}

export interface IToDoListAddTaskAction
  extends IAction<
    typeof ToDoListActionsNamesEnum.ADD_TASK,
    IToDoListAddTaskActionPayload
  > {}

export const toDoListAddTask = (
  payload: IToDoListAddTaskActionPayload
): IToDoListAddTaskAction =>
  createAction(ToDoListActionsNamesEnum.ADD_TASK, payload);
