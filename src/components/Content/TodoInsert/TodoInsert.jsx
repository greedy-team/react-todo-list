import React from 'react';
import TodoInputField from '../../InputField/TodoInputField';
import {
  TodoInsertContainer,
  StyledTodoInsertLabel,
} from './TodoInsert.styles';
import TodoAddButton from '../../Button/TodoAddButton';

const TodoInsert = () => {
  return (
    <TodoInsertContainer>
      <StyledTodoInsertLabel>
        <TodoInputField />
        <TodoAddButton />
      </StyledTodoInsertLabel>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
