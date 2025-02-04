import styled from 'styled-components';
import colors from '../../../color/color';

export const StyledButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.lightGrey};
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ color }) => color || colors.grey};
  }
`;
