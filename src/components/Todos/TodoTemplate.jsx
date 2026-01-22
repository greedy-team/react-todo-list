import styled from 'styled-components';
import GreedyLogo from '../ui/GreedyLogo.jsx';
import theme from '../../theme';

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateLayout>
      <TodoTemplateContainer>
        <TodoTemplateHeader/>
        {children}
      </TodoTemplateContainer>
    </TodoTemplateLayout>
  );
};
export default TodoTemplate;

const TodoTemplateHeader=()=>{
  return(
    <TodoTemplateHeaderContainer>
      <GreedyLogo/>
      <TodoTemplateHeaderText>
        일정관리
      </TodoTemplateHeaderText>
    </TodoTemplateHeaderContainer>
  );
};

const TodoTemplateLayout = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;     
  min-height: 100vh;      
`;

const TodoTemplateContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;   
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;       
  width: 480px;
  height: 400px;

`;

const TodoTemplateHeaderContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width:100%;
  height:48px;
  background-color: ${theme.colors.primary};
`;

const TodoTemplateHeaderText = styled.h2`
  margin: 0;
  font-weight:normal;
  color: ${theme.colors.lightText};
  font-size: 20px;
`;
