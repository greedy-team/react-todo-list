import { useCallback, useState } from "react";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 10000; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

export function useTodos() {
  const [todos, setTodos] = useState(() => createBulkTodos());

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      checked: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodoChecked = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return { todos, addTodo, removeTodo, toggleTodoChecked };
}
