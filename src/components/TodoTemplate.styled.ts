import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #e0e0e0;
  padding: 20px;
  box-sizing: border-box;
`;

export const TodoAppWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  height: 600px;
  max-width: 400px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  background-color: #007356;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px 8px 0 0;
`;

export const TextTitle = styled.h1`
  font-size: 1.8em;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GreedyIcon = styled.img`
  width: 50px;
  height: auto;
  margin-right: 15px;
  vertical-align: middle;
`;
