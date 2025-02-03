import React from 'react';
import { StyledTodoInput } from './TodoInputField.styles';

const TodoInputField = ({ todoName }) => {
  return (
    <StyledTodoInput
      onChange={''}
      name="todo"
      value={todoName}
      placeholder="할 일을 입력해주세요"
    />
  );
};

export default TodoInputField;
