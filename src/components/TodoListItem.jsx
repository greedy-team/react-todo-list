import styled from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const ItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
    ${(props) => (props.checked ? "color:#007356;" : "color: black;")};
  }
`;

const RemoveIcon = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TextBox = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  ${(props) =>
    props.checked ? "color: #adb5bd; text-decoration: line-through;" : ""}
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <ItemContainer>
      <CheckBox onClick={() => onToggle(id)} checked={checked}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <TextBox checked={checked}>{text}</TextBox>
      </CheckBox>
      <RemoveIcon onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </RemoveIcon>
    </ItemContainer>
  );
};

export default TodoListItem;
