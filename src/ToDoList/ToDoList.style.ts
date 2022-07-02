import styled from "styled-components";

const flexColumnCenter = ` display: flex;
flex-direction: column;
align-items: center;`;

export const Container = styled.div`
  ${flexColumnCenter};
  align-items: center;
`;

export const TaskForm = styled.div`
  width: 700px;
  height: 335px;
  margin-top: 50px;
  padding: 30px;
  background-color: #333;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InputConainer = styled.div`
  ${flexColumnCenter};

  label {
    font-size: 12px;
    width: 250px;
    font-weight: 700;
    color: orange;
    text-align: left;
    padding: 10px 0 2.5px 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: auto;
  height: 35px;
  background-color: orange;
  color: black;
  font-size: 18px;
  padding: 5px;
  border-radius: 7.5px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  border-radius: 10px;
  height: 35px;
  width: 250px;
`;

export const TaskContainer = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
