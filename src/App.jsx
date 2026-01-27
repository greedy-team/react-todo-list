import { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 2500; i += 1) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todoList, setTodoList] = useState(createBulkTodos());
  const todoId = useRef(2500);

  const addNewTodo = useCallback((newTodoText) => {
    const newTodo = {
      id: todoId.current,
      text: newTodoText,
      checked: false,
    };
    todoId.current += 1;
    setTodoList((prev) => [...prev, newTodo]);
  }, []);

  const deleteTodoById = useCallback((id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const toggleTodoCheckedById = useCallback((id) => {
    setTodoList((prev) => prev.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    }));
  }, []);

  return (
    <Wrapper>
      <TodoTemplate>
        <TodoInsert addNewTodo={addNewTodo} />
        <TodoList
          todoList={todoList}
          deleteTodoById={deleteTodoById}
          toggleTodoCheckedById={toggleTodoCheckedById}
        />
      </TodoTemplate>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #bdbfc1;

  *:focus-visible {
    outline: auto;
  }
`;
