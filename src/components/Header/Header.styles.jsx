import styled from 'styled-components';
import colors from '../../color/color';

export const HeaderContainer = styled.header`
  width: 780px;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem 0.75rem 0 0;
  background-color: ${colors.green};
`;

export const Title = styled.h2`
  color: white;
  font-size: 1.2rem;
`;
