import { useState } from "react";
import { InsertButton, InsertForm, StyledInput } from "./TodoInsert.styled";
import useTodosStore from "../stores/todoStore";
import { MdAdd } from "react-icons/md";

function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useTodosStore((state) => state.addTodo);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return alert("할 일을 입력해주세요!");
    }

    addTodo(value);
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
