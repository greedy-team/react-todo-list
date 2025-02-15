import React, { useState } from 'react';
import TodoInputField from '../../InputField/TodoInputField';
import { StyledTodoForm } from './TodoInsert.styles';
import TodoAddButton from '../../Button/TodoAddButton';

const TodoInsert = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTodo(text);
    setText('');
  };

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <label htmlFor="todo">할일 추가</label>
      <TodoInputField text={text} setText={setText} />
      <TodoAddButton />
    </StyledTodoForm>
  );
};

export default TodoInsert;
