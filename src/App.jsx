import TodoTemplate from "./templates/TodoTemplate";
import "./index.css";
import { useState, useEffect } from "react";
import { saveTodos } from "./utils/utils";

function App() {
  const [todos, setTodos] = useState(() => createBulkTodos());

  function createBulkTodos() {
    const array = [];
    for (let i = 1; i < 2500; i++) {
      array.push({
        id: i,
        text: `할 일${i}`,
        checked: false,
      });
    }
    return array;
  }

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  return (
    <TodoTemplate
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
    />
  );
}

export default App;
