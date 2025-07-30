import styled from "styled-components";
import logo from "../assets/greedySquareImage.jpg";

const TodoTemplateBlock = styled.main`
  display: flex;
  flex-direction: column;
  width: var(--template-width);
  background: white;
  border-radius: var(--border-radius);
  margin: 8rem auto;
  min-height: var(--template-min-height);
  max-height: var(--template-max-height);
  overflow: hidden;
`;

const TodoTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--title);
  height: 5rem;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  position: absolute;
  width: inherit;
  z-index: 99;

  img {
    width: 5rem;
    height: 5rem;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    background: var(--title);
  }
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateBlock>
      <TodoTitle>
        <img src={logo} alt="로고"></img>
        <span>일정관리</span>
      </TodoTitle>
      {children}
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;
