import React from 'react';
import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

function TodoListItem({ todo, deleteTodoById, toggleTodoCheckedById }) {
  const handleTextCheckBoxClick = () => {
    toggleTodoCheckedById(todo.id);
  };
  const handleDeleteButtonClick = () => {
    deleteTodoById(todo.id);
  };

  return (
    <TodoItemContainer>
      <CheckBoxButton
        onClick={handleTextCheckBoxClick}
        aria-label={todo.checked ? `${todo.text} 체크 해제` : `${todo.text} 체크`}
      >
        {!todo.checked && <BlankBoxIcon />}
        {todo.checked && <CheckedBoxIcon />}
        <TodoItemText $checked={todo.checked}>
          {todo.text}
        </TodoItemText>
      </CheckBoxButton>
      <DeleteButton
        onClick={handleDeleteButtonClick}
        aria-label={`${todo.text} 삭제`}
      >
        <DeleteIcon />
      </DeleteButton>
    </TodoItemContainer>
  );
}

export default React.memo(TodoListItem);

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 60px;
  max-height: 160px;
`;

const CheckBoxButton = styled.button`
  border: none;
  border-radius: 0px;

  padding: 15px;
  gap: 10px;
  
  display: flex;
  flex: 1;
  align-items: center;

  &:focus, &:active {
    outline: none;
  }
`;

const BlankBoxIcon = styled(MdCheckBoxOutlineBlank)`
  font-size: 22px;
`;

const CheckedBoxIcon = styled(MdCheckBox)`
  color: #007356;
  font-size: 22px;
`;

const TodoItemText = styled.span`
  font-size: 18px;
  text-align: left;
  word-break: break-all;

  flex: 1;
  
  min-height: 30px;
  max-height: 130px;
  overflow-y: auto;

  align-items: center;
  ${(props) => (
    props.$checked
    && css`
      color: #969696;
      text-decoration: line-through;
    `)}
`;

const DeleteButton = styled.button`
  border: none;
  border-radius: 0px;
  
  &:focus, &:active {
    outline: none;
  }
`;

const DeleteIcon = styled(MdRemoveCircleOutline)`
  color: red;
  font-size: 22px;

  &:hover {
    color: #ff7474;
  }
`;
