import { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoForm = styled.form`
  display: flex;
  background-color: #495057;
`;

const InsertInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const InsertButton = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = ({ addTodoItem }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    addTodoItem(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <TodoForm onSubmit={onSubmit}>
      <InsertInput
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <InsertButton type="submit">
        <MdAdd />
      </InsertButton>
    </TodoForm>
  );
};

export default TodoInsert;
