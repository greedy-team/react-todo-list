import { TodoListBlock } from "./TodoList.styled";
import TodoListItem from "./TodoListItem";

function TodoList({ todos, onCheckedTodo, onDeleteTodo }) {
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
