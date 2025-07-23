import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, removeTodoItem, toggleChecked }) => {
  return (
    <TodoListContainer>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodoItem={removeTodoItem}
          toggleChecked={toggleChecked}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
