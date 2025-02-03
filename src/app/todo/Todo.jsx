import React from 'react';
import TodoList from '../../components/Content/TodoList/TodoList';
import Header from '../../components/Header/Header';
import { TodoContainer } from './Todo.styles';
import TodoInputField from '../../components/InputField/TodoInputField';

const Todo = () => {
  return (
    <TodoContainer>
      <Header />
      <TodoInputField />
      <TodoList />
    </TodoContainer>
  );
};

export default Todo;
