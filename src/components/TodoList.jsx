import styled from 'styled-components';
import TodoListItem from './TodoListItem';

export default function TodoList({ todoList, deleteTodoById, toggleTodoCheckedById }) {
  return (
    <Container>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodoById={deleteTodoById}
          toggleTodoCheckedById={toggleTodoCheckedById}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  min-height: 420px;
  max-height: 540px;
  width: 500px;

  overflow-y: auto;

  background-color: white;
`;
