import styled, { css } from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const Item = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;
`;

const CheckBox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex: 1 1;

  svg {
    font-size: 1.5rem;
  }
`;

const Icon = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  color: #495057;

  ${(props) =>
    props.$checked &&
    css`
      color: #007356;
    `}
`;

const Text = styled.div`
  flex: 1 1;
  margin-left: 0.5rem;
  color: #495057;

  ${(props) =>
    props.$checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  align-items: center;
  color: #ff6b6b;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;

  &:hover {
    color: #ff8787;
  }
`;

export default function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;

  return (
    <Item>
      <CheckBox onClick={() => onToggle(id)}>
        <Icon $checked={checked}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </Icon>
        <Text $checked={checked}>{text}</Text>
      </CheckBox>

      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </Item>
  );
}
