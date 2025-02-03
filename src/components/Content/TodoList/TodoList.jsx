import TodoContent from '../TodoContent/TodoContent';
import { TodoListLayout } from './TodoList.styles';

const TODODATA = [
  {
    isChecked: true,
    todoName: '리액트 공부하기',
  },
  {
    isChecked: true,
    todoName: '리액트 공부하기',
  },
  {
    isChecked: true,
    todoName: '리액트 공부하기',
  },
];

const TodoList = () => {
  return (
    <TodoListLayout>
      {TODODATA.map(() => {
        return <TodoContent />;
      })}
    </TodoListLayout>
  );
};

export default TodoList;
