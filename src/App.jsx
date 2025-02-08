import { useState } from 'react';
import TodoTemplate from './app/todo/TodoTemplate';
import styled from 'styled-components';
import Header from './components/Header/Header';
import TodoInsert from './components/Content/TodoInsert/TodoInsert';
import TodoList from './components/Content/TodoList/TodoList';

export const MainLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #bdbfc1;
`;

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (text) => {
    const todoItem = {
      id:
        todoList.length > 0
          ? Math.max(...todoList.map((todo) => todo.id)) + 1
          : 1,
      text: text,
      checked: false,
    };

    setTodoList((prev) => [...prev, todoItem]);
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoChecked = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <MainLayout>
      <TodoTemplate>
        <Header />
        <TodoInsert onAddTodo={handleAddTodo} />
        <TodoList
          todoList={todoList}
          onCheckTodo={toggleTodoChecked}
          onDeleteTodo={handleDeleteTodo}
        />
      </TodoTemplate>
    </MainLayout>
  );
};

export default App;
