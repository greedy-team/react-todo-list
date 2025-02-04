import React from 'react';
import { TodoCheckbox } from '../../CheckBox/TodoCheckBox';
import TodoDeleteButton from '../../Button/TodoDeleteButton';
import { TodoListItemContainer, TodoListItemBox } from './TodoListItem.styles';

const TodoListItem = ({ id, text, checked, onDeleteTodo, onCheckedTodo }) => {
  return (
    <TodoListItemContainer>
      <TodoListItemBox>
        <TodoCheckbox checked={checked} onCheckedTodo={onCheckedTodo} id={id} />
        <p>{text}</p>
      </TodoListItemBox>
      <TodoDeleteButton onDeleteTodo={onDeleteTodo} id={id} />
    </TodoListItemContainer>
  );
};

export default TodoListItem;
