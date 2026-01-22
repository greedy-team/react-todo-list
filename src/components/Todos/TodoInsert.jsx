import styled from 'styled-components';
import { BaseButton } from '../ui/BaseButton.jsx';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';
import theme from '../../theme';

const TodoInsert =({onInsertTodo})=>{
  const [value, setValue]= useState('');

  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (value.length > 50){
      alert('할 일은 50자 이하로 입력해주세요. 현재 길이:' + value.length+'자');
      return;
    }
    if (!value.trim()){
      alert('할 일을 입력해주세요.');
      return;
    }
    onInsertTodo(value);
    setValue('');
  };

  return (
    <TodoInsertForm onSubmit={onSubmitTodo}>
      <TodoInsertInput
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        aria-label="할 일 입력창"
        maxLength={100}
      />
      <TodoInsertButton type="submit"
        aria-label="할 일 추가 버튼">
        <MdAdd />
      </TodoInsertButton>
    </TodoInsertForm>
  );

};
export default TodoInsert;

const TodoInsertForm = styled.form`
  display: flex;
  width: 100%;
  height: 50px;    
  background: ${theme.colors.background};
`;

const TodoInsertInput = styled.input`
  background-color: ${theme.colors.background};
  border: none;
  color: ${theme.colors.lightText};
  font-size: 1.125rem;
  line-height: 1.5;
  outline: none;
  flex: 1;
  &::placeholder {
    color: ${theme.colors.grayText};
  }
`;

const TodoInsertButton = styled(BaseButton)`
  align-items: center;
  justify-content: center;
  background: ${theme.colors.buttonColor};
  border: none;
  padding: 0 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  transition: 0.1s background ease-in;
  color: ${theme.colors.lightText};
  &:hover {
    opacity: 0.5;
  }
`;
