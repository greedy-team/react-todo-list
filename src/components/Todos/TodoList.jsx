import styled from 'styled-components';
import 'react-virtualized/styles.css';
import { useCallback } from 'react';
import { List, AutoSizer } from 'react-virtualized';
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

  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        style={style}
      />
    );
  }, [todos]);

  return (
    <VirtualListContainer onClick={handleClick}>
      <AutoSizer>
        {({ width, height }) => (
          <List
            width={width}
            height={height}
            rowHeight={57}

            rowCount={todos.length}
            rowRenderer={rowRenderer}

            role="list"
            aria-label="할 일 목록"
            list={todos}
          />
        )}
      </AutoSizer>
    </VirtualListContainer>
  );
};

export default TodoList;

const VirtualListContainer = styled.div`
  flex: 1; 
  width: 100%;
  height: 100%; 
  outline: none;
`;
