import * as S from "./Task.style";

export interface TaskProps {
  title: string;
  description: string;
  author: string;
  score: number;
  id: number;
}

const Task = ({ title, description, author, score, id }: TaskProps) => {
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <S.Label>{description}</S.Label>
      <S.Label>{author}</S.Label>
      <S.Label>{score}</S.Label>
      <S.Label>{id}</S.Label>
      <S.DeleteButton>Delete</S.DeleteButton>
    </S.Container>
  );
};

export default Task;
