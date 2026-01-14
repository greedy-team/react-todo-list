import { useState } from 'react';
import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = ( newTodoText ) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      checked: false,
    };
    const newTodoList = [...todoList, newTodo ];
    setTodoList(newTodoList);
  };

  const removeTodoById = ( id ) => {
    const removedTodoList = todoList.filter( (todo) => (todo.id !== id));
    setTodoList(removedTodoList);
  };

  const toggleTodoCheckedById = ( id ) => {
    const changedTodoList = todoList.map(( todo ) => {
      if (todo.id === id) {
        return {...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodoList(changedTodoList);
  };

  return (
    <MainContainer>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
      </TodoTemplate>
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #bdbfc1;

  display: flex;
  justify-content: center;
  align-items: center;
  
`;