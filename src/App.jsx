import { useCallback, useRef, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoCreateForm from "./components/TodoCreateForm";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 5000; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

export default function App() {
  const [todos, setTodos] = useState(createBulkTodos());

  const nextId = useRef(5000);

  const addTodo = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((prev) => prev.concat(todo));
    nextId.current += 1;
  };

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

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
