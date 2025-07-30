import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoInsertBlock = styled.div`
  display: flex;
  padding-top: 5rem;
  position: absolute;
  width: 100%;
  max-width: var(--template-width);
`;

const TodoInput = styled.input`
  flex: 1;
  font-size: 1.4rem;
  padding: 0.5rem 0.7rem;
  border: none;
  outline: none;
  background: var(--input);
  color: var(--white);

  &::placeholder {
    color: var(--input-placeholder);
  }
`;

const TodoAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--add-button);
  color: var(--white);
  width: 4.2rem;
  height: 3.5rem;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background: var(--add-button-light);
  }

  svg {
    background: none;
    padding: 0;
    margin: 0;
    display: block;
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState("");
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (text.length > 50) {
      toast.error("⚠ 50자 이하로 입력해주세요!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    onInsert(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <TodoInsertBlock>
        <TodoInput
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TodoAddButton type="submit">
          <MdAdd />
        </TodoAddButton>
      </TodoInsertBlock>
      <ToastContainer />
    </form>
  );
};

export default React.memo(TodoInsert);
