import styled from 'styled-components';
import  TodoListItem from './TodoListItem.jsx';

const TodoList=({todos, onToggleCheckBox, onRemoveTodo})=>{

  const handleClick = (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;

    if (action === 'toggle') {
      onToggleCheckBox(id);
    } else if (action === 'remove') {
      onRemoveTodo(id);
    }
  };

  return (
    <TodoItems onClick={handleClick}>
      {todos.map((todo)=>(
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </TodoItems>
  );
};

export default TodoList;

const TodoItems = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;       
  width: 100%;   
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  `;
