import { useState } from "react";
import { InsertButton, InsertForm, StyledInput } from "./TodoInsert.styled.ts";
import { MdAdd } from "react-icons/md";

interface TodoInsertProps {
  onAddTodo: (text: string) => void;
}

function TodoInsert({ onAddTodo }: TodoInsertProps) {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() === "") {
      return alert("할 일을 입력해주세요!");
    }

    onAddTodo(value);
    setValue("");
  };

  return (
    <>
      <InsertForm onSubmit={handleAddTodo}>
        <StyledInput
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={handleInputChange}
        />
        <InsertButton type="submit">
          <MdAdd />
        </InsertButton>
      </InsertForm>
    </>
  );
}

export default TodoInsert;
