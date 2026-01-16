import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";

export default function TodoInsert({ addTodo }) {
  const [InputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (InputValue.trim()) {
      addTodo(InputValue);
      setInputValue("");
    }
  };

  return (
    <InsertForm onSubmit={handleSubmit}>
      <VisuallyHidden htmlFor="todo-input">할 일 입력</VisuallyHidden>
      <InsertInput
        id="todo-input"
        placeholder="할 일을 입력하세요"
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoComplete="off"
      />
      <InsertButton type="submit" aria-label="할 일 추가">
        <MdAdd />
      </InsertButton>
    </InsertForm>
  );
}

const InsertForm = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #495057;
  border: none;
`;

const InsertInput = styled.input`
  background: none;
  border: none;
  color: #fff;
  flex: 1;
  font-size: 1.125rem;
  line-height: 1.5;
  outline: none;
  padding: 0.5rem;
`;

const InsertButton = styled.button`
  align-items: center;
  background: #868e96;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: background 0.1s ease-in;

  &:hover {
    background: #adb5bd;
  }
`;

const VisuallyHidden = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
