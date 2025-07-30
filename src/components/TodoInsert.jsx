import { useRef, useCallback, memo } from "react";
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

const TodoInsert = memo(function TodoInsert({ addTodoItem }) {
  const inputValue = useRef();

  const submitForm = useCallback(
    (e) => {
      e.preventDefault();
      const text = inputValue.current.value.trim();
      if (text) {
        addTodoItem(text);
        inputValue.current.value = "";
      }
    },
    [addTodoItem]
  );

  return (
    <TodoForm onSubmit={submitForm}>
      <InsertInput placeholder="할 일을 입력하세요" ref={inputValue} />
      <InsertButton type="submit">
        <MdAdd />
      </InsertButton>
    </TodoForm>
  );
});

export default TodoInsert;
