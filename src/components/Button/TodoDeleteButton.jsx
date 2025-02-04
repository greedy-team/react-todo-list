import { MdRemoveCircleOutline } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoDeleteButton = ({ onDelete }) => {
  return (
    <TodoButton
      onClick={onDelete}
      icon={MdRemoveCircleOutline}
      iconColor={colors.grey}
    />
  );
};

export default TodoDeleteButton;
