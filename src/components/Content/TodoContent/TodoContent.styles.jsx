import styled from 'styled-components';

export const TodoContentContainer = styled.div`
  width: 37.5rem;
  height: 3.125rem;
  background-color: white;
  border-radius: 0.25rem;
  border: 1px solid #ebedf0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.75rem;

  & > svg {
    color: #8e8e93;
  }
`;

export const TodoContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
