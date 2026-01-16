import styled from "styled-components";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, removeTodo, toggleTodoChecked }) {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
          removeTodo={removeTodo}
          toggleTodoChecked={toggleTodoChecked}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
