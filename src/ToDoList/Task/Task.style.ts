import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 250px;
  background-color: #666;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 15px 25px 5px 50px;
  position: relative;
`;

export const Label = styled.span`
  width: fit-content;

  font-size: 22px;
  font-weight: 500;
  color: white;
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 5px;
  padding: 5px;
  background-color: orange;
`;
