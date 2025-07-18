import {
  CheckBox,
  TodoListItemBlock,
  Remove,
  Text,
} from "./TodoListItem.styled";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

function TodoListItem({ todo, onCheckedTodo, onDeleteTodo }) {
  const handleCheckedTodo = () => {
    onCheckedTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <TodoListItemBlock>
      <CheckBox checked={todo.checked} onClick={handleCheckedTodo}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <Text checked={todo.checked}>{todo.text}</Text>
      <Remove onClick={handleDeleteTodo}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemBlock>
  );
}

export default TodoListItem;
