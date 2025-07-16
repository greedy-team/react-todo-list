import GreedyLogo from "../assets/greedySquareImage.jpg";
import styled from "styled-components";

const TodoListContainer = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const ListHeader = styled.div`
  background: #007356;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.img`
  width: 4rem;
  height: 4rem;
`;

const ListContent = styled.div`
  background-color: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoListContainer>
      <ListHeader>
        <LogoContainer src={GreedyLogo} alt="greedyLogo" />
        <p>일정관리</p>
      </ListHeader>
      <ListContent>{children}</ListContent>
    </TodoListContainer>
  );
};

export default TodoTemplate;
