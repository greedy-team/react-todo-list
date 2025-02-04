import styled from 'styled-components';

export const TodoListItemContainer = styled.div`
  width: 37.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 0.25rem;
  border: 1px solid #ebedf0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.75rem;
`;

export const TodoListItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & p {
    font-size: 0.85rem;
  }
`;
