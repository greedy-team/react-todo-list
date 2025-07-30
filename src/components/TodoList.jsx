import TodoListItem from "./TodoListItem";
import styled from "styled-components";
import React, { useEffect, useRef, useCallback } from "react";
import { List } from "react-virtualized";

const TodoListBlock = styled.ul`
  list-style: none;
  flex: 1;
  overflow-y: auto;
  overflow: scroll;
  margin-top: 8.5rem;
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <div key={key} style={style}>
          <TodoListItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
        </div>
      );
    },
    [todos, onToggle, onRemove]
  );

  return (
    <TodoListBlock>
      <List
        width={640}
        height={544}
        rowCount={todos.length}
        rowHeight={70}
        rowRenderer={rowRenderer}
        overscanRowCount={5}
      />
    </TodoListBlock>
  );
};

export default React.memo(TodoList);
