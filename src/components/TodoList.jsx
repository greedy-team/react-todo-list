import styled from 'styled-components';
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo)=>(<TodoListItem key={todo.id} todo={todo} />))}
    </div>
  );
}