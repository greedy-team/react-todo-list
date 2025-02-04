import { MdRemoveCircleOutline } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoDeleteButton = ({ id, onDeleteTodo }) => {
  return (
    <TodoButton
      onClick={() => onDeleteTodo(id)}
      icon={MdRemoveCircleOutline}
      iconColor={colors.grey}
    />
  );
};

export default TodoDeleteButton;
