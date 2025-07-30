import styled from "styled-components";
import TodoList from "./TodoList";
import TodoInsert from "./TodoInsert";
import { AddTodo, RemoveTodo, TodoItem, ToggleTodo } from "../../types/todo";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface MainProps extends AddTodo, RemoveTodo, ToggleTodo {
  todos: TodoItem[];
}

const Main = ({ todos, addTodo, removeTodo, toggleTodo }: MainProps) => {
  return (
    <MainContainer>
      <TodoInsert addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </MainContainer>
  );
};

export default Main;
