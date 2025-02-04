import TodoListItem from '../TodoListItem/TodoListItem';
import { TodoListLayout } from './TodoList.styles';

const TODODATA = [
  {
    id: 1,
    checked: true,
    text: `할 일`,
  },
  {
    id: 2,
    checked: true,
    text: `할 일`,
  },
  {
    id: 3,
    checked: true,
    text: `할 일`,
  },
];

const TodoList = () => {
  return (
    <TodoListLayout>
      {TODODATA.map((todo) => {
        return (
          <TodoListItem id={todo.id} checked={todo.checked} text={todo.text} />
        );
      })}
    </TodoListLayout>
  );
};

export default TodoList;
