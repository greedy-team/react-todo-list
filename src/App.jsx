import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import useTodosStore from "./stores/todoStore";
import { useShallow } from "zustand/shallow";

function App() {
  const [todos, setTodos] = useTodosStore(
    useShallow((state) => [state.todos, state.setTodos])
  );

  const handleAddTodo = (text) => {
    if (text.trim() === "") {
      return alert("할 일을 입력해주세요!");
    }
    const newTodo = {
      id: Date.now(),
      text: text,
      checked: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleCheckedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onCheckedTodo={handleCheckedTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
