import styled from "styled-components";
import COLORS from "../../constants/color";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { AddTodo } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";
import TEXTS from "../../constants/texts";
import NUMBERS from "../../constants/numbers";
import React from "react";

const TodoInsertContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TodoInsertForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const TodoInsertInput = styled.input`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.black};
  width: 100%;
  padding: 1rem;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};
  margin: 1rem 0rem;
`;

const TodoInsertButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.white};
  background-color: ${COLORS.primary};
  padding: 1rem;
`;

const TodoInsert = ({ addTodo }: AddTodo) => {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    if (value.length > NUMBERS.todoInputMaxLength) {
      setValue(value.slice(0, NUMBERS.todoInputMaxLength));
      return;
    }
    addTodo({
      id: uuidv4(),
      text: value,
      checked: false,
    });
    setValue("");
  };

  return (
    <TodoInsertContainer>
      <TodoInsertForm onSubmit={onSubmit}>
        <TodoInsertInput
          type="text"
          placeholder={TEXTS.todo.insertPlaceholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={NUMBERS.todoInputMaxLength}
        />
        <TodoInsertButton type="submit">
          <MdAdd />
        </TodoInsertButton>
      </TodoInsertForm>
    </TodoInsertContainer>
  );
};

export default TodoInsert;
