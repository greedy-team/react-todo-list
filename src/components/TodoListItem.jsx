import styled from "styled-components";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: #f1f3f5;
  border-radius: 8px;
  margin-bottom: 0.75rem;

  &:hover {
    background: #e9ecef;
  }
`;

const TodoItemCheckbox = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #35caa3;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  padding: 0;
`;

const TodoItemText = styled.span`
  flex: 1;
  font-size: 0.9rem;
  color: ${(props) => (props.checked ? "#616161" : "#495057")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const TodoItemDeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff6f61;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    color: #ff8a75;
  }
`;

const TodoListItem = ({ todo, onToggleTodoCheckBox, onDeleteTodoById }) => {
  return (
    <TodoItemContainer>
      <TodoItemCheckbox
        onClick={() => onToggleTodoCheckBox(todo.id)}
        aria-label={todo.checked ? "할 일 체크 해제" : "할 일 체크"}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </TodoItemCheckbox>

      <TodoItemText checked={todo.checked}>{todo.text}</TodoItemText>

      <TodoItemDeleteButton
        onClick={() => onDeleteTodoById(todo.id)}
        aria-label="할 일 삭제"
      >
        <MdRemoveCircleOutline />
      </TodoItemDeleteButton>
    </TodoItemContainer>
  );
};

export default TodoListItem;
