import { MdAdd } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoAddButton = ({ onAddTodo }) => {
  return (
    <TodoButton onClick={onAddTodo} icon={MdAdd} iconColor={colors.green} />
  );
};

export default TodoAddButton;
