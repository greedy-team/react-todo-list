import { MdAdd } from 'react-icons/md';
import TodoButton from './Todo/TodoButton';
import colors from '../../color/color';

const TodoAddButton = () => {
  return (
    <TodoButton
      type="submit"
      icon={MdAdd}
      iconColor={colors.green}
      title="할일을 추가합니다."
      ariaLabel="할일 추가"
    />
  );
};

export default TodoAddButton;
