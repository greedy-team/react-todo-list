import { memo, useCallback } from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";
import { List } from "react-virtualized";

const TodoListContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = memo(function TodoList({
  todos,
  removeTodoItem,
  toggleChecked,
}) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <div key={key} style={style}>
          <TodoListItem
            todo={todo}
            removeTodoItem={removeTodoItem}
            toggleChecked={toggleChecked}
          />
        </div>
      );
    },
    [todos, removeTodoItem, toggleChecked]
  );

  return (
    <TodoListContainer>
      <List
        width={512}
        height={348}
        rowCount={todos.length}
        rowHeight={55}
        rowRenderer={rowRenderer}
        style={{ outline: "none" }}
      />
    </TodoListContainer>
  );
});

export default TodoList;
