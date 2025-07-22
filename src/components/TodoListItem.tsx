import {
  CheckBox,
  TodoListItemBlock,
  Remove,
  Text,
} from "./TodoListItem.styled.ts";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}

interface TodoListItemProps {
  todo: Todo;
  onCheckedTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

function TodoListItem({
  todo,
  onCheckedTodo,
  onDeleteTodo,
}: TodoListItemProps) {
  const handleCheckedTodo = () => {
    onCheckedTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <TodoListItemBlock>
      <CheckBox $checked={todo.checked} onClick={handleCheckedTodo}>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <Text $checked={todo.checked}>{todo.text}</Text>
      <Remove onClick={handleDeleteTodo}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemBlock>
  );
}

export default TodoListItem;
