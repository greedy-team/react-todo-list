import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, removeTodo, toggleTodoChecked } = useTodos();

  return (
    <TodoTemplate>
      <TodoInsert addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodoChecked={toggleTodoChecked}
      />
    </TodoTemplate>
  );
}

export default App;
