import styled from "styled-components";
import COLORS from "../../constants/color";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { RemoveTodo, TodoItem, ToggleTodo } from "../../types/todo";
import { memo } from "react";

const TodoListItemContainer = styled.li<{ $checked: boolean }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid ${COLORS.black};
  background-color: ${({ $checked }) =>
    $checked ? COLORS.gray : COLORS.white};
  margin: 0.1rem 0rem;
`;

const TodoListItemCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 4rem;
  font-size: 2rem;
`;

const TodoListItemContent = styled.span`
  display: block;
  align-items: center;
  line-height: 4rem;
  width: 100%;
  height: 4rem;
  font-size: 1.5rem;
  color: ${COLORS.black};
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TodoListItemRemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 4rem;
  font-size: 2rem;
`;

interface TodoListItemProps extends RemoveTodo, ToggleTodo {
  todo: TodoItem;
}

const TodoListItem = ({ todo, removeTodo, toggleTodo }: TodoListItemProps) => {
  return (
    <TodoListItemContainer $checked={todo.checked}>
      <TodoListItemCheckBox
        onClick={() => toggleTodo(todo.id)}
        aria-label="할 일 체크박스"
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </TodoListItemCheckBox>
      <TodoListItemContent>
        {todo.checked ? <s>{todo.text}</s> : todo.text}
      </TodoListItemContent>
      <TodoListItemRemoveButton>
        <MdRemoveCircleOutline
          onClick={() => removeTodo(todo.id)}
          aria-label="할 일 삭제"
        />
      </TodoListItemRemoveButton>
    </TodoListItemContainer>
  );
};

export default memo(TodoListItem);
