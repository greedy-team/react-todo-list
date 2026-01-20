import styled, { css } from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

export default function TodoListItem({ todo, removeTodo, toggleTodo }) {
  const { id, text, checked } = todo;

  const inputId = `todo-${id}`;

  return (
    <Item>
      <CheckLabel htmlFor={inputId}>
        <HiddenCheckbox
          id={inputId}
          type="checkbox"
          checked={checked}
          onChange={() => toggleTodo(id)}
        />

        <Icon $checked={checked} aria-hidden="true">
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </Icon>

        <Text $checked={checked}>{text}</Text>
      </CheckLabel>

      <RemoveButton
        type="button"
        onClick={() => removeTodo(id)}
        aria-label="할 일 삭제"
      >
        <MdRemoveCircleOutline />
      </RemoveButton>
    </Item>
  );
}

const Item = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;
`;

const CheckLabel = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1 1;

  svg {
    font-size: 1.5rem;
  }
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Icon = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  color: #495057;

  ${(props) =>
    props.$checked &&
    css`
      color: #007356;
    `}
`;

const Text = styled.div`
  flex: 1 1;
  margin-left: 0.5rem;
  color: #495057;

  ${(props) =>
    props.$checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;

const RemoveButton = styled.button`
  align-items: center;
  background: none;
  border: 0;
  color: #ff6b6b;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  padding: 0;

  &:hover {
    color: #ff8787;
  }
`;
