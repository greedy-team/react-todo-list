import styled from "styled-components";
import greedyLogo from "../assets/greedySquareImage.jpg";

const TodoTemplateContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #cfd2d6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TodoTemplateHeader = styled.header`
  width: 500px;
  background: #007355;
  color: white;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TodoTemplateLogo = styled.img`
  height: 64px;
  margin-right: 0.5rem;
`;

const TodoTemplateTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
`;

const TodoTemplateMain = styled.main`
  width: 500px;
  height: 460px;
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  background: #f8f9fa;
`;

const TodoTemplateContentWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateContainer>
      <TodoTemplateHeader>
        <TodoTemplateLogo src={greedyLogo} alt="Greedy 그린이 캐릭터 로고" />
        <TodoTemplateTitle>일정관리</TodoTemplateTitle>
      </TodoTemplateHeader>
      <TodoTemplateMain>
        <TodoTemplateContentWrapper>{children}</TodoTemplateContentWrapper>
      </TodoTemplateMain>
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;
