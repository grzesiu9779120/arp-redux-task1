import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const BasketDetails = styled.div`
  background-color: #3da;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BasketPosition = styled.div`
  width: 70%;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: space-around;
`;

export const DeleteButton = styled.div`
  background-color: orange;
  font-size: 12px;
  color: black;
  font-weight: 700;
  padding: 5px;
`;
