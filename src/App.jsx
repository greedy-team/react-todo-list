import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (text) => {
    if (text === "") {
      alert("할 일을 작성해주셔야 합니다.");
      return;
    }

    const todo = {
      id: crypto.randomUUID(),
      text,
      checked: false,
    };
    setTodos([...todos, todo]);
  };

  const removeTodoItem = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const toggleChecked = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

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
