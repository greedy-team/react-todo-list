import React from 'react';
import { TodoContentContainer, TodoContentBox } from './TodoContent.styles';
import TodoCheckbox from '../../CheckBox/TodoCheckBox';
import TodoDeleteButton from '../../Button/TodoDeleteButton';
import { useState } from 'react';

const TodoContent = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {};

  const handleDelete = () => {
    console.log('삭제');
  };

  return (
    <TodoContentContainer>
      <TodoContentBox>
        <TodoCheckbox checked={checked} onChange={handleChange} />
        <p>리액트 공부하기</p>
      </TodoContentBox>
      <TodoDeleteButton onDelete={handleDelete} />
    </TodoContentContainer>
  );
};

export default TodoContent;
