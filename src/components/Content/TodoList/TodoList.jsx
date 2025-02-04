import TodoListItem from '../TodoListItem/TodoListItem';
import { TodoListLayout } from './TodoList.styles';

const TodoList = ({ todoList, onDeleteTodo, onCheckedTodo }) => {
  return (
    <TodoListLayout>
      {todoList.map((todo) => {
        return (
          <TodoListItem
            id={todo.id}
            checked={todo.checked}
            text={todo.text}
            onDeleteTodo={onDeleteTodo}
            onCheckedTodo={onCheckedTodo}
          />
        );
      })}
    </TodoListLayout>
  );
};

export default TodoList;
