import { create } from "zustand";

export interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoStore {
  todos: Todo[];
  setTodos: (newTodos: Todo[]) => void;
}

function createBulkTodos(): Todo[] {
  const array: Todo[] = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

const useTodosStore = create<TodoStore>((set) => ({
  todos: createBulkTodos(),

  setTodos: (newTodos: Todo[]) => set({ todos: newTodos }),
}));

export default useTodosStore;
