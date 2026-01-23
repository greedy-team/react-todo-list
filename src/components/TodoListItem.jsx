import styled from "styled-components";
import React, { useCallback } from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

export default React.memo(function TodoListItem({
  todo,
  removeTodo,
  toggleTodoChecked,
}) {
  const handleToggle = () => toggleTodoChecked(todo.id);
  const handleRemove = () => removeTodo(todo.id);

  return (
    <Item>
      <CheckboxAndText>
        <CheckButton
          onClick={handleToggle}
          role="checkbox"
          aria-checked={todo.checked}
          aria-label={todo.checked ? "할 일 체크 해제" : "할 일 체크"}
          aria-labelledby={`todo-text-${todo.id}`}
        >
          {todo.checked ? (
            <MdCheckBox size="24" color="var(--greedyColor)" />
          ) : (
            <MdCheckBoxOutlineBlank size="24" />
          )}
        </CheckButton>
        <TodoText id={`todo-text-${todo.id}`} checked={todo.checked}>
          {todo.text}
        </TodoText>
      </CheckboxAndText>
      <RemoveButton onClick={handleRemove} aria-label="할 일 삭제">
        <MdRemoveCircleOutline size="24" />
      </RemoveButton>
    </Item>
  );
});

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

const CheckboxAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
`;
const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--removeButtonColor);
`;

const CheckButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "gray" : "black")};
`;
