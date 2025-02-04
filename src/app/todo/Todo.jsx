import React, { useState } from 'react';
import TodoList from '../../components/Content/TodoList/TodoList';
import Header from '../../components/Header/Header';
import { TodoContainer } from './Todo.styles';
import TodoInsert from '../../components/Content/TodoInsert/TodoInsert';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (text) => {
    const todoItem = {
      id:
        todoList.length > 0
          ? Math.max(...todoList.map((todo) => todo.id)) + 1
          : 1,
      text: text,
      checked: false,
    };

    setTodoList((prev) => [...prev, todoItem]);
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCheckedTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoContainer>
      <Header />
      <TodoInsert onAddTodo={handleAddTodo} />
      <TodoList
        todoList={todoList}
        onDeleteTodo={handleDeleteTodo}
        onCheckedTodo={handleCheckedTodo}
      />
    </TodoContainer>
  );
};

export default Todo;
