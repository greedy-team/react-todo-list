import { MdAdd } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoAddButton = ({ onDelete }) => {
  return (
    <TodoButton onClick={onDelete} icon={MdAdd} iconColor={colors.green} />
  );
};

export default TodoAddButton;
