import { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export default function TodoInsert({ addNewTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    addNewTodo(inputValue);
    setInputValue('');
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button aria-label="할 일 추가">
        <PlusIcon />
      </Button>
    </Container>
  );
}

const Container = styled.form`
  height: 45px;
  width: 500px;

  display: flex;
`;

const Input = styled.input`
  color: white;
  font-size: 18px;

  border: none;
  outline: none;
  
  width: 100%;
  padding-left: 10px;

  background-color: #373737;
`;

const Button = styled.button`
  border: none;
  border-radius: 0px;

  outline: none;
  &:focus, &:active {
    outline: none;
  }

  background-color: #5c5c5c;

  &:hover {
    background-color: #888888;
  }
`;

const PlusIcon = styled(MdAdd)`
  color: white;
  font-size: 25px;


`;
