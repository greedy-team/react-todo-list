import { useState } from 'react';
import styled from 'styled-components';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: '123', checked: true },
    { id: 2, text: '4233', checked: false },
  ]);

  const addNewTodo = ( newTodoText ) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      checked: false,
    };
    const newTodoList = [...todoList, newTodo ];
    setTodoList(newTodoList);
  };

  const deleteTodoById = ( id ) => {
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
        <TodoList todoList={todoList}></TodoList>
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