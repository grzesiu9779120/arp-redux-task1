import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddButton = styled.div`
  width: fit-content;
  border-radius: 5px;
  background-color: brown;
  padding: 10px;
  font-weight: 600;
`;

export const RemoveButton  = styled.div`
  width: fit-content;
  border-radius: 5px;
  background-color: red;
  padding: 10px;
  font-weight: 600;
`;
