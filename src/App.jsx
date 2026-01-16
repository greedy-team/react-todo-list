import { useRef, useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((prev) => prev.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}
