import styled from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

export default function TodoListItem({
  id,
  text,
  checked,
  removeTodo,
  toggleTodoChecked,
}) {
  return (
    <Item>
      <CheckboxAndText>
        <CheckButton
          onClick={() => toggleTodoChecked(id)}
          aria-checked={checked}
          aria-label={checked ? "할 일 체크 해제" : "할 일 체크"}
        >
          {checked ? (
            <MdCheckBox size="24" color="var(--greedyColor)" />
          ) : (
            <MdCheckBoxOutlineBlank size="24" />
          )}
        </CheckButton>
        <TodoText checked={checked}>{text}</TodoText>
      </CheckboxAndText>
      <RemoveButton
        onClick={() => {
          removeTodo(id);
        }}
        aria-label="할 일 삭제"
      >
        <MdRemoveCircleOutline size="24" />
      </RemoveButton>
    </Item>
  );
}

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

const CheckboxAndText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
`;
const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--removeButtonColor);
`;

const CheckButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "gray" : "black")};
`;
