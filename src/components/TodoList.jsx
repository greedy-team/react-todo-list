import React, { useCallback } from 'react';
import styled from 'styled-components';
import { List, useDynamicRowHeight } from 'react-window';
import TodoListItem from './TodoListItem';

function TodoList({ todoList = [], deleteTodoById, toggleTodoCheckedById }) {
  const rowHeight = useDynamicRowHeight({ defaultRowHeight: 60 });

  const Row = useCallback(
    ({ index, style, todoList, deleteTodoById, toggleTodoCheckedById }) => {
      const todo = todoList[index];
      if (!todo) return <div style={style} />;
      return (
        <div style={style}>
          <TodoListItem
            todo={todo}
            deleteTodoById={deleteTodoById}
            toggleTodoCheckedById={toggleTodoCheckedById}
          />
        </div>
      );
    },
    [],
  );

  return (
    <TodoListContainer>
      <List
        rowComponent={Row}
        rowCount={todoList.length}
        rowHeight={rowHeight}
        rowProps={{ todoList, deleteTodoById, toggleTodoCheckedById }}
        style={{ width: 500, height: 480 }}
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
