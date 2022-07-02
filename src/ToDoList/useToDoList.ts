import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { RootStoreType } from "../store/store";

import * as toDoListActions from "../store/toDoList";

export const useToDoList = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const toDoListState = useSelector(
    (state: RootStoreType) => state.tasks.tasks
  );
  const dispatch = useDispatch();

  const { toDoListAddTask } = useMemo(
    () => bindActionCreators(toDoListActions, dispatch),
    [dispatch]
  );

  const handleAddTask = useCallback(() => {
    toDoListAddTask({ task: { title, description, author, score } });
  }, [toDoListAddTask]);

  const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeDescription = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const handleChangeAuthor = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  }, []);

  const handleChangeScore = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setScore(+e.target.value);
  }, []);

  return {
    title,
    description,
    author,
    score,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeAuthor,
    handleChangeScore,
    handleAddTask,
    toDoListState,
  };
};
