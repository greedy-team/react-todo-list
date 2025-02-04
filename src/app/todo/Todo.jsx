import React from 'react';
import TodoList from '../../components/Content/TodoList/TodoList';
import Header from '../../components/Header/Header';
import { TodoContainer } from './Todo.styles';
import TodoInsert from '../../components/Content/TodoInsert/TodoInsert';

const Todo = () => {
  return (
    <TodoContainer>
      <Header />
      <TodoInsert />
      <TodoList />
    </TodoContainer>
  );
};

export default Todo;
