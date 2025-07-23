import { useState } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const NewTodoInsertForm = styled.form`
  display: flex;
  align-items: center;
  background: #35caa3;
  padding: 1rem;
`;

const NewTodoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const NewTodoTextInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  color: white;
  background: transparent;

  &::placeholder {
    color: #dee2e6;
  }
`;

const NewTodoTextCount = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: #dee2e6;
  white-space: nowrap;
`;

const NewTodoAddButton = styled.button`
  background: #38d9a9;
  border: none;
  color: white;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #63e6be;
  }
`;

const TodoInsert = ({ onAddNewTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    onAddNewTodo(trimmedValue);
    setInputValue("");
  };

  return (
    <NewTodoInsertForm onSubmit={handleSubmit}>
      <NewTodoInputWrapper>
        <NewTodoTextInput
          placeholder="할 일을 입력하세요"
          aria-label="할 일 텍스트 입력"
          value={inputValue}
          required
          maxLength={20}
          onChange={(e) => setInputValue(e.target.value)}
          onInvalid={(e) =>
            e.target.setCustomValidity("할 일을 입력해 주세요!!")
          }
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <NewTodoTextCount>{inputValue.length}/20</NewTodoTextCount>
        <NewTodoAddButton
          type="submit"
          aria-label="할 일 추가"
          title="할 일 추가"
        >
          <MdAdd />
        </NewTodoAddButton>
      </NewTodoInputWrapper>
    </NewTodoInsertForm>
  );
};

export default TodoInsert;
