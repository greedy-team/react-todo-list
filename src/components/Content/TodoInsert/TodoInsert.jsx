import React, { useState } from 'react';
import TodoInputField from '../../InputField/TodoInputField';
import {
  TodoInsertContainer,
  StyledTodoInsertLabel,
} from './TodoInsert.styles';
import TodoAddButton from '../../Button/TodoAddButton';

const TodoInsert = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText('');
  };

  return (
    <TodoInsertContainer>
      <form onSubmit={handleSubmit}>
        <StyledTodoInsertLabel>
          <TodoInputField text={text} setText={setText} />
          <TodoAddButton />
        </StyledTodoInsertLabel>
      </form>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
