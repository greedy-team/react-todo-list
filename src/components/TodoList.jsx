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
