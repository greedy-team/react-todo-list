import styled from "styled-components";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={removeTodo}
          onToggle={toggleTodo}
        />
      ))}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  max-height: 513px;
  min-height: 320px;
  overflow-y: auto;
`;
