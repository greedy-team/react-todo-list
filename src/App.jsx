import GlobalStyle from "./style/GlobalStyle.js";
import TodoTemplate from "./components/TodoTemplate.jsx";
import TodoInsert from "./components/TodoInsert.jsx";
import TodoList from "./components/TodoList.jsx";
import { useRef, useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const todoId = useRef(1);

    const onInsert = (task) => {
        const todo = {
            id: todoId.current,
            task: task,
            checked:false,
        }
        todoId.current += 1;
        setTodos((prev) => [...prev, todo]);
    };

    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const onCheck = (id) => {
        setTodos((prev) =>
            prev.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        );
    };

    return (
        <>
            <GlobalStyle />
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
            </TodoTemplate>
        </>
    )
}

export default App
