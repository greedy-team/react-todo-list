import styled from "styled-components";
import TodoListItem from "./TodoListItem.jsx";

const TodoListContainer = styled.div`
    max-height: 512px;
    overflow-y: auto;
    background: none;
    padding: 1rem;
    border-radius: 4px;

    &::-webkit-scrollbar {
        width: 8px;
    }
`;

const TodoList = ({ todos, onRemove, onCheck }) => {
    return (
        <TodoListContainer>
            {todos.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onCheck={onCheck}
                />
            ))}
        </TodoListContainer>
    );
};

export default TodoList;
