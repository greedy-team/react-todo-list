import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { RemoveTodo, ToggleTodo, TodoItem } from "../../types/todo";
import TEXTS from "../../constants/texts";
import COLORS from "../../constants/color";
import { useCallback } from "react";
import { List, ListRowProps, AutoSizer } from "react-virtualized";

const TodoListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TodoListTitle = styled.h2`
  position: relative;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TodoListProps extends RemoveTodo, ToggleTodo {
  todos: TodoItem[];
}

const TodoList = ({ todos, removeTodo, toggleTodo }: TodoListProps) => {
  const rowRenderer = useCallback(
    ({ index, key, style }: ListRowProps) => {
      const todo = todos[index];
      return (
        <div key={key} style={style}>
          <TodoListItem
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </div>
      );
    },
    [todos, removeTodo, toggleTodo]
  );
  return (
    <TodoListContainer>
      <TodoListTitle>{TEXTS.todo.listTitle}</TodoListTitle>
      <div style={{ flex: 1, width: "100%" }}>
        <AutoSizer>
          {({ width }) => (
            <List
              width={width}
              height={window.innerHeight - 100}
              rowCount={todos.length}
              rowHeight={50}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </TodoListContainer>
  );
};

export default TodoList;
