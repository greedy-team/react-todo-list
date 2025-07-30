import { TodoItem } from "../types/todo";

export const isTodoItem = (item: unknown): item is TodoItem => {
  if (typeof item !== "object" || item === null) return false;
  const todo = item as TodoItem;
  return (
    typeof todo.id === "string" &&
    typeof todo.text === "string" &&
    typeof todo.checked === "boolean"
  );
};

export function loadTodos(): TodoItem[] {
  try {
    const savedRawTodos = localStorage.getItem("todos");
    if (!savedRawTodos) return [];
    const parsedTodos = JSON.parse(savedRawTodos);
    if (!Array.isArray(parsedTodos)) return [];
    return parsedTodos.filter(isTodoItem);
  } catch {
    return [];
  }
}

export function saveTodos(todos: TodoItem[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
