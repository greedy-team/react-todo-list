import { MdRemoveCircleOutline } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoDeleteButton = ({ id, onDeleteTodo }) => {
  return (
    <TodoButton
      onClick={() => onDeleteTodo(id)}
      icon={MdRemoveCircleOutline}
      iconColor={colors.grey}
      ariaLabel="할일 삭제 버튼"
    />
  );
};

export default TodoDeleteButton;
