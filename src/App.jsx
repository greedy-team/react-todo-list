import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate'

function App() {
  return (
    <MainContainer>
      <TodoTemplate>
        aa
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