import { memo } from 'react';
import styled from 'styled-components';
import {MdRemoveCircleOutline} from 'react-icons/md';
import { BaseButton } from '../ui/BaseButton.jsx';
import CheckBoxButton from './CheckBoxButton.jsx';
import theme from '../../theme';

const TodoListItem = memo(function TodoListItem({todo, style}) {

  return (
    <TodoItem style={style} role="listitem">
      <CheckBoxButton
        checked={todo.isChecked}
        data-action="toggle"
        data-id={todo.id}
      />
      <Text $isChecked={todo.isChecked}>{todo.text}</Text>
      <RemoveButton
        aria-label="할 일 삭제 버튼"
        type="button"
        data-action="remove"
        data-id={todo.id}
      >
        <MdRemoveCircleOutline />
      </RemoveButton>
    </TodoItem>
  );
});

export default TodoListItem;

const TodoItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Text = styled.span`
  margin-left: 0.5rem;
  flex: 1; 
  word-break: break-all;
  color: ${({ $isChecked }) => ($isChecked ? theme.colors.grayText : theme.colors.text)};
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
`;

const RemoveButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${theme.colors.removeIcon};
  &:hover {
    opacity: 0.5;
  }
`;
