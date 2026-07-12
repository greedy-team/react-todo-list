import styled from "styled-components";
import React, { useCallback } from "react";
import { AutoSizer, List } from "react-virtualized";
import TodoListItem from "./TodoListItem";

export default React.memo(function TodoList({
  todos,
  removeTodo,
  toggleTodoChecked,
}) {
  const rowHeight = 59;

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <div key={key} style={style}>
          <TodoListItem
            todo={todo}
            removeTodo={removeTodo}
            toggleTodoChecked={toggleTodoChecked}
          />
        </div>
      );
    },
    [todos, removeTodo, toggleTodoChecked],
  );

  return (
    <Container>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowCount={todos.length}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer}
            overscanRowCount={5}
          />
        )}
      </AutoSizer>
    </Container>
  );
});

const Container = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
