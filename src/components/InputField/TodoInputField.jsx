import React from 'react';
import { StyledTodoInput } from './TodoInputField.styles';

const TodoInputField = ({ text, setText }) => {
  return (
    <StyledTodoInput
      type="text"
      name="todo"
      value={text}
      maxLength="50"
      onChange={(e) => setText(e.target.value)}
      placeholder="할 일을 입력해주세요"
      required
    />
  );
};

export default TodoInputField;
