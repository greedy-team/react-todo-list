import { useState } from "react";
import { InsertButton, InsertForm, StyledInput } from "./TodoInsert.styled";
import { MdAdd } from "react-icons/md";

function TodoInsert({ onAddTodo }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
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
