import React from 'react';
import { TodoCheckbox } from '../../CheckBox/TodoCheckBox';
import TodoDeleteButton from '../../Button/TodoDeleteButton';
import { TodoListItemContainer, TodoListItemBox } from './TodoListItem.styles';

const TodoListItem = ({ id, text, checked, onDeleteTodo, onCheckTodo }) => {
  return (
    <TodoListItemContainer>
      <TodoListItemBox>
        <TodoCheckbox checked={checked} onCheckTodo={onCheckTodo} id={id} />
        <label>{text}</label>
      </TodoListItemBox>
      <TodoDeleteButton onDeleteTodo={onDeleteTodo} id={id} />
    </TodoListItemContainer>
  );
};

export default TodoListItem;
