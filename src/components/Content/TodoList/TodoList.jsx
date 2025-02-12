import { useCallback } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import { TodoListLayout } from './TodoList.styles';
import { List } from 'react-virtualized';

const TodoList = ({ todoList, onDeleteTodo, onCheckTodo }) => {
  const rowRenderer = useCallback(({ key, index, style }) => {
    const todo = todoList[index];
    return (
      <div key={key} style={style}>
        <TodoListItem
          id={todo.id}
          checked={todo.checked}
          text={todo.text}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
        />
      </div>
    );
  });

  return (
    <TodoListLayout>
      <List
        width={600}
        height={700}
        rowCount={todoList.length}
        rowHeight={50}
        rowRenderer={rowRenderer}
      />
    </TodoListLayout>
  );
};

export default TodoList;
