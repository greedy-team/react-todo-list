import TodoButton from '../Button/Todo/TodoButton';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdCheckBox } from 'react-icons/md';
import colors from '../../color/color';

export const TodoCheckbox = ({ checked, onCheckTodo, id }) => {
  return checked ? (
    <TodoButton
      onClick={() => onCheckTodo(id)}
      icon={MdCheckBox}
      iconColor={colors.green}
    />
  ) : (
    <TodoButton
      onClick={() => onCheckTodo(id)}
      icon={MdCheckBoxOutlineBlank}
      iconColor={colors.grey}
    />
  );
};
