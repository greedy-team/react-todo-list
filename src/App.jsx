import TodoTemplate from './components/Todos/TodoTemplate.jsx';
import TodoInsert from './components/Todos/TodoInsert.jsx';
import TodoList from './components/Todos/TodoList.jsx';
import { useState } from 'react';

function createBulkTodos(){
  const array = [];
  for(let i=1;i<2500;i++){
    array.push({
      id : String(i),
      text : `할 일${i}`,
      isChecked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const onInsertTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isChecked: false,
    };
    setTodos(prevTodos=>[newTodo, ...prevTodos]);
  };

  const onToggleCheckBox = (selectedTodoId) => {
    setTodos(
      prevTodos => prevTodos.map((todo) =>
        todo.id === selectedTodoId ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  };

  const onRemoveTodo = (selectedTodoId) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== selectedTodoId));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsertTodo={onInsertTodo} />
      <TodoList todos={todos}
        onToggleCheckBox={onToggleCheckBox}
        onRemoveTodo={onRemoveTodo}
      />
    </TodoTemplate>
  );
}

export default App;
