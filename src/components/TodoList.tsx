import { TodoListBlock } from "./TodoList.styled.ts";
import TodoListItem from "./TodoListItem.tsx";
import { Todo } from "../stores/todoStore.ts";
import { List } from "react-virtualized";

interface TodoListProps {
  todos: Todo[];
  onCheckedTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onCheckedTodo,
  onDeleteTodo,
}) => {
  const rowRenderer = ({ index, key, style }) => {
    const todo = todos[index];

    return (
      <div key={key} style={style}>
        <TodoListItem
          todo={todo}
          onCheckedTodo={onCheckedTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </div>
    );
  };

  return (
    <TodoListBlock>
      <List
        width={400}
        height={600}
        rowCount={todos.length}
        rowHeight={50}
        rowRenderer={rowRenderer}
        overscanRowCount={10}
      />
    </TodoListBlock>
  );
};

export default TodoList;
