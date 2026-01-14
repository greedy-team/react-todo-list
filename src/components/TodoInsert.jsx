import styled from 'styled-components';
import { MdAdd } from "react-icons/md";

export default function TodoInsert() {
  return (
		<Container>
			<Input />
			<Button>
				<PlusIcon />
			</Button>
		</Container>
	);
}

const Container = styled.form`
	display: flex;
	height: 45px;

`

const Input = styled.input`
	border: none;
	width: 100%;
	padding-left: 10px;

	font-size: 30px;

	outline: none;
	background-color: gray;
`;

const Button = styled.button`
	border: none;
	border-radius: 0px;

	outline: none;
	&:focus, &:active {
    outline: none;
  }

	background-color: #5c5c5c;
`;

const PlusIcon = styled(MdAdd)`
	color: white;
	font-size: 25px;


`;