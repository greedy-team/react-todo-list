import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import useTodosStore from "./stores/todoStore";

function App() {
  const [todos, setTodos] = useTodosStore((state) => [
    state.todos,
    state.setTodos,
  ]);

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
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
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
