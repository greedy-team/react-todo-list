import { useState } from 'react';
import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      checked: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  const deleteTodoById = (id) => {
    const removedTodoList = todoList.filter((todo) => (todo.id !== id));
    setTodoList(removedTodoList);
  };

  const toggleTodoCheckedById = (id) => {
    const changedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodoList(changedTodoList);
  };

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
`;
