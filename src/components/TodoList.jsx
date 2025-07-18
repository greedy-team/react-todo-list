import { TodoListBlock } from "./TodoList.styled";
import TodoListItem from "./TodoListItem";
import useTodoStore from "../stores/todoStore";

function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
