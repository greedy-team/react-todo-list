import styled from "styled-components";

export const TodoInsertWrapper = styled.div`
  background-color: #495057;
  width: 100px;
  max-width: 400px;
`;

export const InsertForm = styled.form`
  display: flex;
  background: #495057;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 1.125rem;
  outline: none;
  background: transparent;
  color: white;
  &::placeholder {
    color: #ced4da;
  }
`;

export const InsertButton = styled.button`
  background: #868e96;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 0;
  font-size: 1.125rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #9aa1a9ff;
  }
`;
