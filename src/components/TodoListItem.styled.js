import styled from "styled-components";

export const TodoListItemBlock = styled.div`
padding: 15px 20px;
display: flex;
align-items: center;
`;

export const CheckBox = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
        props.checked &&
        `
    border: 1px solid #20c997;
    color: #20c997;
  `}
`;

export const Text = styled.div`
  flex: 1;
  font-size: 1.125rem;
  color: #495057;
  ${props =>
        props.checked &&
        `
    color: #adb5bd;
    text-decoration: line-through;
  `}
`;

export const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
