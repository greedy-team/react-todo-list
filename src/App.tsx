import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import { Todo } from "./stores/todoStore";
import { useCallback, useState } from "react";

function createBulkTodos(): Todo[] {
  const array: Todo[] = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(createBulkTodos());

  const handleAddTodo = useCallback((text: string) => {
    if (text.trim() === "") {
      return alert("할 일을 입력해주세요!");
    }
    const newTodo = {
      id: Date.now(),
      text: text,
      checked: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, []);

  const handleCheckedTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

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
