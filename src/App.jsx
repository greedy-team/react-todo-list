import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const newId = useRef(2501);
  const [todoList, setTodoList] = useState(createBulkTodos);

  const handleAddNewTodo = (newTodoText) => {
    setTodoList((prev) => [
      { id: newId.current++, text: newTodoText, checked: false },
      ...prev,
    ]);
  };

  const handleDeleteTodoById = useCallback((selectedId) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== selectedId));
  }, []);

  const handleToggleTodoCheckBox = useCallback((targetTodoId) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === targetTodoId ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

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
