import styled from "styled-components";
import {
    MdOutlineCheckBox,
    MdOutlineCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from "react-icons/md";

const TodoItemContainer = styled.div`
    display: flex;
    align-items: center;
    background: none;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    height: 48px;
`;

const CheckButton = styled.button`
    background: none;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const TodoTask = styled.div`
    flex: 1; /* 할 일 텍스트가 자동으로 크기를 조절하도록 설정 */
    color: #000;
    font-size: 1.125rem;
    padding: 0 1rem;
`;

const RemoveButton = styled.button`
    background: none;
    border: none;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

const CheckIcon = styled(MdOutlineCheckBox)`
    font-size: 1.5rem;
    color: #38d9a9;
`;

const UncheckIcon = styled(MdOutlineCheckBoxOutlineBlank)`
    font-size: 1.5rem;
    color: #000;
`;

const RemoveIcon = styled(MdRemoveCircleOutline)`
    font-size: 1.5rem;
    color: #ff6b6b;
`;

const TodoListItem = ({ todo, onRemove, onCheck }) => {
    const { id, task, checked } = todo;

    return (
        <TodoItemContainer>
            <CheckButton onClick={() => onCheck(id)}>
                {checked ? <CheckIcon /> : <UncheckIcon />} {/* 체크 상태에 따라 아이콘 변경 */}
            </CheckButton>
            <TodoTask>{task}</TodoTask>
            <RemoveButton onClick={() => onRemove(id)}>
                <RemoveIcon />
            </RemoveButton>
        </TodoItemContainer>
    );
};

export default TodoListItem;
