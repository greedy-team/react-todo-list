import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState, useCallback } from "react";

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

function App() {
  const [todos, setTodos] = useState(createBulkTodos());

  const addTodoItem = useCallback((text) => {
    if (text === "") {
      alert("할 일을 작성해주셔야 합니다.");
      return;
    }

    const todo = {
      id: crypto.randomUUID(),
      text,
      checked: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const removeTodoItem = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const toggleChecked = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoInsert addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          removeTodoItem={removeTodoItem}
          toggleChecked={toggleChecked}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
