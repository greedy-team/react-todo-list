import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert';

function App() {
  return (
    <MainContainer>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
      </TodoTemplate>
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #bdbfc1;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;