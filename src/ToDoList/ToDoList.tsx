import { useId, useState } from "react";
import Task from "./Task/Task";

import { useToDoList } from "./useToDoList";

import * as S from "./ToDoList.style";

const ToDoList = () => {
  const id = useId();

  const {
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
  } = useToDoList();

  return (
    <S.Container>
      <S.TaskForm>
        <S.InputConainer>
          <label htmlFor={id + "-title"}>Title</label>
          <S.FormInput
            id={id + "-title"}
            value={title}
            onChange={handleChangeTitle}
          />
          <label htmlFor={id + "-description"}>Description</label>
          <S.FormInput
            id={id + "-description"}
            value={description}
            onChange={handleChangeDescription}
          />
          <label htmlFor={id + "-author"}>Author</label>
          <S.FormInput
            id={id + "-author"}
            value={author}
            onChange={handleChangeAuthor}
          />
          <label htmlFor={id + "-score"}>Score</label>
          <S.FormInput
            id={id + "-score"}
            value={score}
            onChange={handleChangeScore}
          />
        </S.InputConainer>
        <S.ButtonContainer>
          <S.Button onClick={handleAddTask}>Add Task</S.Button>{" "}
        </S.ButtonContainer>
      </S.TaskForm>
      <S.TaskContainer>
        {toDoListState.map((task, index) => (
          <Task {...task} key={`${task.title}/${index}`} />
        ))}
      </S.TaskContainer>
    </S.Container>
  );
};

export default ToDoList;
