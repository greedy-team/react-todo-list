import styled from "styled-components";
import greedySquareImage from "../assets/greedySquareImage.jpg";

export default function TodoTemplate({ children }) {
  return (
    <Page>
      <TodoTemplateBlock>
        <AppTitle>
          <GreedyLogo src={greedySquareImage} alt="greedyLogo" />
          <p>일정관리</p>
        </AppTitle>

        <Content>{children}</Content>
      </TodoTemplateBlock>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  background: #bdbdbd;

  display: flex;
  justify-content: center;
  padding-top: 6rem;
`;

const TodoTemplateBlock = styled.div`
  width: 512px;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  align-items: center;
  background: #007356;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  height: 4rem;
  justify-content: center;
`;

const GreedyLogo = styled.img`
  width: 4rem;
  height: 4rem;
  display: block;
`;

const Content = styled.div`
  background: #ffffff;
`;
