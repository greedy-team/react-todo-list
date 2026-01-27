import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { List, useDynamicRowHeight } from 'react-window';
import TodoListItem from './TodoListItem';

const listStyle = { width: 500, height: 480 };

function TodoList({ todoList = [], deleteTodoById, toggleTodoCheckedById }) {
  const rowHeight = useDynamicRowHeight({ defaultRowHeight: 60 });

  const rowProps = useMemo(() => ({
    todoList,
    deleteTodoById,
    toggleTodoCheckedById,
  }), [todoList, deleteTodoById, toggleTodoCheckedById]);

  const TodoItem = useCallback(
    ({ index, style, todoList, deleteTodoById, toggleTodoCheckedById }) => {
      const todo = todoList[index];
      if (!todo) return <div style={style} />;
      return (
        <li style={style}>
          <TodoListItem
            todo={todo}
            deleteTodoById={deleteTodoById}
            toggleTodoCheckedById={toggleTodoCheckedById}
          />
        </li>
      );
    },
    [],
  );

  return (
    <TodoListContainer>
      <List
        innerElementType="ul"
        rowComponent={TodoItem}
        rowCount={todoList.length}
        rowHeight={rowHeight}
        rowProps={rowProps}
        style={listStyle}
      />
    </TodoListContainer>
  );
}

export default React.memo(TodoList);

const TodoListContainer = styled.div`
  height: 480px;
  width: 500px;
  background-color: white;
`;
