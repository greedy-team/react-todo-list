export interface TodoItem {
  id: string;
  text: string;
  checked: boolean;
}


export interface AddTodo {
  addTodo: (todo: TodoItem) => void;
}

export interface RemoveTodo {
  removeTodo: (id: string) => void;
}

export interface ToggleTodo {
  toggleTodo: (id: string) => void;
}
