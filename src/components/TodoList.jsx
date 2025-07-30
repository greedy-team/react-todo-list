import { FixedSizeList } from "react-window";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListContainer = styled.div`
  padding: 12px 16px;
`;

const TodoList = ({ todos, onToggleTodoCheckBox, onDeleteTodoById }) => {
  const renderTodoItem = ({ index, style }) => {
    return (
      <div style={style}>
        <TodoListItem
          todo={todos[index]}
          onToggleTodoCheckBox={onToggleTodoCheckBox}
          onDeleteTodoById={onDeleteTodoById}
        />
      </div>
    );
  };

  return (
    <TodoListContainer role="list" aria-label="할 일 목록">
      <FixedSizeList
        height={370}
        itemCount={todos.length}
        itemSize={63}
        width={"100%"}
      >
        {renderTodoItem}
      </FixedSizeList>
    </TodoListContainer>
  );
};

export default TodoList;
