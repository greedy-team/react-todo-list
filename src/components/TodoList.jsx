import styled from "styled-components";
import { AutoSizer, List } from "react-virtualized";
import TodoListItem from "./TodoListItem";

const LIST_HEIGHT = 513;
const ROW_HEIGHT = 56;

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  const rowRenderer = ({ index, key, style }) => {
    const todo = todos[index];

    return (
      <Row key={key} style={style}>
        <TodoListItem
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </Row>
    );
  };

  return (
    <TodoListBlock>
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            width={width}
            height={LIST_HEIGHT}
            rowCount={todos.length}
            rowHeight={ROW_HEIGHT}
            rowRenderer={rowRenderer}
            overscanRowCount={8}
          />
        )}
      </AutoSizer>
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  height: ${LIST_HEIGHT}px;
  min-height: 320px;
`;

const Row = styled.div``;
