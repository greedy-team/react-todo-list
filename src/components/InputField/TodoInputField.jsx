import React from 'react';
import { StyledTodoInput } from './TodoInputField.styles';

const TodoInputField = ({ text, setText }) => {
  return (
    <StyledTodoInput
      name="todo"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="할 일을 입력해주세요"
    />
  );
};

export default TodoInputField;
