import useTodosStore from "../stores/todoStore";
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

function TodoListItem({ todo }) {
  const toggleTodo = useTodosStore((state) => state.toggleTodo);
  const deleteTodo = useTodosStore((state) => state.deleteTodo);

  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <TodoListItemBlock>
      <CheckBox checked={todo.checked} onClick={handleToggleTodo}>
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
