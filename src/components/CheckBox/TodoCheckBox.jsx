import TodoButton from '../Button/Todo/TodoButton';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdCheckBox } from 'react-icons/md';
import colors from '../../color/color';

export const TodoCheckbox = ({ checked, onCheckedTodo, id }) => {
  return checked ? (
    <TodoButton
      onClick={() => onCheckedTodo(id)}
      icon={MdCheckBox}
      iconColor={colors.green}
    />
  ) : (
    <TodoButton
      onClick={() => onCheckedTodo(id)}
      icon={MdCheckBoxOutlineBlank}
      iconColor={colors.grey}
    />
  );
};
