import { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export default function TodoInsert({ addNewTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') {
      return;
    }
    addNewTodo(trimmedValue);
    setInputValue('');
  };

  return (
    <InsertForm onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <InsertButton aria-label={inputValue === '' ? '할 일 추가' : `${inputValue} 추가`}>
        <PlusIcon />
      </InsertButton>
    </InsertForm>
  );
}

const InsertForm = styled.form`
  height: 45px;
  width: 500px;

  display: flex;
`;

const TextInput = styled.input`
  color: white;
  font-size: 18px;

  border: none;
  outline: none;
  
  width: 100%;
  padding-left: 10px;

  background-color: #373737;
`;

const InsertButton = styled.button`
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
