import * as S from "./Task.style";

export type TaskProps = {
  title: string;
  description: string;
  author: string;
  score: number;
};

const Task = ({ title, description, author, score }: TaskProps) => {
  return (
    <S.Container>
      <S.Label>{title}</S.Label>
      <S.Label>{description}</S.Label>
      <S.Label>{author}</S.Label>
      <S.Label>{score}</S.Label>
    </S.Container>
  );
};

export default Task;
