import { TodoListBlock } from "./TodoList.styled.ts";
import TodoListItem from "./TodoListItem.tsx";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onCheckedTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

function TodoList({ todos, onCheckedTodo, onDeleteTodo }: TodoListProps) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCheckedTodo={onCheckedTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
