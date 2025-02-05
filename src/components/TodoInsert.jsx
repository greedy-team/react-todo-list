import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const TodoForm = styled.form`
    background: #495057;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TodoInput = styled.input`
    background: none;
    border: none;
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.5;
    outline: none;
    width: 100%;
    margin-left: 0.5rem;
`;

const TodoAddButton = styled.button`
    background: #d3d3d3;
    border: none;
    width: 48px;
    height: 48px;
`;

const PlusIcon = styled(FaPlus)`
    background: none;
    color: #fff;
    font-size: 1.2rem;
`;

const TodoInsert = () => {
    return (
        <TodoForm>
            <TodoInput placeholder="할 일을 입력하세요."></TodoInput>
            <TodoAddButton type="submit">
                <PlusIcon />
            </TodoAddButton>
        </TodoForm>
    );
}

export default TodoInsert;