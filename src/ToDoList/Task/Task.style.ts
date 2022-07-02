import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 250px;
  background-color: #666;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 35px;
`;

export const Label = styled.span`
  width: fit-content;

  font-size: 22px;
  font-weight: 500;
  color: white;
`;
