import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListContainer = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin: 0;
  list-style: none;
`;

const TodoList = ({ todos, onToggleTodoCheckBox, onDeleteTodoById }) => {
  return (
    <TodoListContainer aria-label="할 일 목록">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggleTodoCheckBox={onToggleTodoCheckBox}
          onDeleteTodoById={onDeleteTodoById}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
