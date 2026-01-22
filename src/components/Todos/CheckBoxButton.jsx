import styled from 'styled-components';
import { MdCheckBox,MdCheckBoxOutlineBlank } from 'react-icons/md';
import { BaseButton } from '../ui/BaseButton.jsx';

const CheckBoxButton = ({ checked, type = 'button', ...props }) => {
  return (
    <StyledCheckBoxButton
      type={type}
      aria-label={checked ? '할 일 체크 해제 버튼' : '할 일 체크 버튼'}
      {...props}
    >
      {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    </StyledCheckBoxButton>
  );
};

export default CheckBoxButton;

const StyledCheckBoxButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  `;
