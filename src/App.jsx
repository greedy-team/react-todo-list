import { useRef, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const addTodo = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((prev) => prev.concat(todo));
    nextId.current += 1;
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoCreateForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </TodoTemplate>
    </>
  );
}
