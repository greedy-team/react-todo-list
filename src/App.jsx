import { useState, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const newId = useRef(1);
  const [todoList, setTodoList] = useState([]);

  const handleAddNewTodo = (newTodoText) => {
    setTodoList((prev) => [
      { id: newId.current++, text: newTodoText, checked: false },
      ...prev,
    ]);
  };

  const handleDeleteTodoById = (selectedId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== selectedId));
  };

  const handleToggleTodoCheckBox = (targetTodoId) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === targetTodoId ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onAddNewTodo={handleAddNewTodo} />
      <TodoList
        todos={todoList}
        onToggleTodoCheckBox={handleToggleTodoCheckBox}
        onDeleteTodoById={handleDeleteTodoById}
      />
    </TodoTemplate>
  );
}

export default App;
