import styled from 'styled-components';
import TodoListItem from './TodoListItem';

export default function TodoList({ todoList, deleteTodoById, toggleTodoCheckedById }) {
  return (
    <TodoListContainer>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          deleteTodoById={deleteTodoById}
          toggleTodoCheckedById={toggleTodoCheckedById}
        />
      ))}
    </TodoListContainer>
  );
}

const TodoListContainer = styled.div` 
  min-height: 300px;
  max-height: 600px;
  width: 500px;

  overflow-y: auto;

  background-color: white;
`;
