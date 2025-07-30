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

const useTodosStore = create<TodoStore>((set) => ({
  todos: [],

  setTodos: (newTodos: Todo[]) => set({ todos: newTodos }),
}));

export default useTodosStore;
