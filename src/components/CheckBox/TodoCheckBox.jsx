import TodoButton from '../Button/Todo/TodoButton';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { MdCheckBox } from 'react-icons/md';
import colors from '../../color/color';

export const TodoCheckbox = ({ checked, onChange }) => {
  return checked ? (
    <TodoButton onClick={''} icon={MdCheckBox} iconColor={colors.green} />
  ) : (
    <TodoButton
      onClick={''}
      icon={MdCheckBoxOutlineBlank}
      iconColor={colors.grey}
    />
  );
};
