import React from 'react';
import { TodoContainer } from './TodoTemplate.styles';

const TodoTemplate = ({ children }) => {
  return <TodoContainer>{children}</TodoContainer>;
};

export default TodoTemplate;
