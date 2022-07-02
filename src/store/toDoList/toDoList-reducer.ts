import { TaskProps } from "../../ToDoList/Task/Task";
import { IToDoListAddTaskAction } from "./actions/toDoList-add-task.action";
import { ToDoListActionsNamesEnum } from "./toDoList-actions-names.enum";

type Action = IToDoListAddTaskAction;

interface IToDoListState {
  tasks: TaskProps[];
}

const initialState: IToDoListState = {
  tasks: [],
};

export const toDoListReducer = (
  state: IToDoListState = initialState,
  action: Action
): IToDoListState => {
  switch (action.type) {
    case ToDoListActionsNamesEnum.ADD_TASK:
      return { tasks: [...state.tasks, action.payload.task] };
    default:
      return state;
  }
};
