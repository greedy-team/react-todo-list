import { MdAdd } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoAddButton = () => {
  return <TodoButton type="submit" icon={MdAdd} iconColor={colors.green} />;
};

export default TodoAddButton;
