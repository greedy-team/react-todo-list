import styled, { css } from 'styled-components';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';

export default function TodoListItem({ todo, deleteTodoById, toggleTodoCheckedById }) {
  const handleTextCheckBoxClick = () => {
    toggleTodoCheckedById(todo.id);
  };
  const handleDeleteButtonClick = () => {
    deleteTodoById(todo.id);
  };
  return (
    <Container>
      <TextCheckBoxButton onClick={handleTextCheckBoxClick}>
        {!todo.checked && <BlankBoxIcon />}
        {todo.checked && <CheckedBoxIcon />}
        <Text $checked={todo.checked}>
          {todo.text}
        </Text>
      </TextCheckBoxButton>
      <DeleteButton onClick={handleDeleteButtonClick}>
        <DeleteIcon />
      </DeleteButton>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  flex-direction: row;

`;

const TextCheckBoxButton = styled.button`
  border: none;
  border-radius: 0px;

  width: 100%;
  padding: 18px;
  gap: 10px;
  
  display: flex;
  align-items: center;

  &:focus, &:active {
    outline: none;
  }
`;

const BlankBoxIcon = styled(MdCheckBoxOutlineBlank)`
  font-size: 22px;
`;

const CheckedBoxIcon = styled(MdCheckBox)`
  font-size: 22px;

  color: #007356;
`;

const Text = styled.span`
  font-size: 18px;

  flex: 1;
  word-break: break-all;

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
  font-size: 22px;
  color: red;

  &:hover {
    color: #ff5454;
  }
`;
