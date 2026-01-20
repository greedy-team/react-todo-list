import { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

export default function TodoInsert({ addTodo }) {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    addTodo(text);
    setValue("");
  };

  return (
    <TodoInsertBlock onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" aria-label="추가">
        <MdAdd />
      </Button>
    </TodoInsertBlock>
  );
}

const TodoInsertBlock = styled.form`
  background-color: #495057;
  display: flex;
  height: 43px;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: #fff;
  flex: 1 1;
  font-size: 1.125rem;
  line-height: 1.5rem;
  outline: none;
  padding: 0.5rem;

  &::placeholder {
    color: #dee2e6;
  }
`;

const Button = styled.button`
  align-items: center;
  background: none;
  background: #868e96;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: background 0.1s ease-in;

  &:hover {
    background: #adb5bd;
  }
`;
