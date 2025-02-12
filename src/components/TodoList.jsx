import styled from "styled-components";
import TodoListItem from "./TodoListItem.jsx";

const TodoListContainer = styled.div`
    max-height: 465px;
    overflow-y: auto;
    background: #fff;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 4px;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
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
