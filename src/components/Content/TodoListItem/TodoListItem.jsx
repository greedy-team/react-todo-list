import React from 'react';
import { TodoCheckbox } from '../../CheckBox/TodoCheckBox';
import TodoDeleteButton from '../../Button/TodoDeleteButton';
import { TodoListItemContainer, TodoListItemBox } from './TodoListItem.styles';

const TodoListItem = ({ text, checked }) => {
  const handleChange = () => {};

  const handleDelete = () => {
    console.log('삭제');
  };

  return (
    <TodoListItemContainer>
      <TodoListItemBox>
        <TodoCheckbox checked={checked} onChange={handleChange} />
        <p>{text}</p>
      </TodoListItemBox>
      <TodoDeleteButton onDelete={handleDelete} />
    </TodoListItemContainer>
  );
};

export default TodoListItem;
