import { StyledButton, StyledIcon } from './TodoButton.styles';

const TodoButton = ({ onClick, icon: Icon, iconColor, ariaLabel, title }) => {
  return (
    <StyledButton onClick={onClick} aria-label={ariaLabel} title={title}>
      <StyledIcon color={iconColor}>
        <Icon />
      </StyledIcon>
    </StyledButton>
  );
};

export default TodoButton;
