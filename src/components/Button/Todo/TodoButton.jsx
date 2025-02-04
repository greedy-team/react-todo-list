import { StyledButton, StyledIcon } from './TodoButton.styles';

const TodoButton = ({ onClick, icon: Icon, iconColor }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon color={iconColor}>
        <Icon />
      </StyledIcon>
    </StyledButton>
  );
};

export default TodoButton;
