import styled from 'styled-components';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";


export default function TodoListItem({ todo }) {
  return (
    <li>
      <TextCheckBoxButton>
        <BlankBoxIcon />
      </TextCheckBoxButton>
      <DeleteButton>
        <DeleteIcon />
      </DeleteButton>
    </li>
  );
}

const TextCheckBoxButton = styled.button`
  
`;

const DeleteButton = styled.button`
  
`;

const BlankBoxIcon = styled(MdCheckBoxOutlineBlank)`
  
`;

const CheckedBoxIcon = styled(MdCheckBox)`
  
`;

const DeleteIcon = styled(MdRemoveCircleOutline)`
  
`;