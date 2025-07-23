import {
  AppContainer,
  GreedyIcon,
  HeaderContainer,
  TextTitle,
  TodoAppWrapper,
} from "./TodoTemplate.styled.ts";

interface TodoTemplateProps {
  children: React.ReactNode;
}

function TodoTemplate({ children }: TodoTemplateProps) {
  return (
    <AppContainer>
      <TodoAppWrapper>
        <HeaderContainer>
          <TextTitle>
            <GreedyIcon
              src={"src/assets/greedySquareImage.jpg"}
              alt="Greedy Icon"
            />
            일정관리
          </TextTitle>
        </HeaderContainer>
        {children}
      </TodoAppWrapper>
    </AppContainer>
  );
}

export default TodoTemplate;
