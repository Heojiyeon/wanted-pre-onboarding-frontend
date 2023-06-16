import React, { Dispatch, SetStateAction, useState } from "react";
import { postTodo } from "../../apis/todos";
import { currTodo } from "../../utils/types";
import { StyledTodoButton, StyledTodoForm, StyledTodoInput } from "./style";

interface TodoFormProps {
  accessToken: string;
  setNewTodo: Dispatch<SetStateAction<currTodo | undefined>>;
}

export default function TodoForm({ accessToken, setNewTodo }: TodoFormProps) {
  const [currTodo, setCurrTodo] = useState("");
  const handlePostTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await postTodo(accessToken, currTodo);
    setNewTodo(response);

    setCurrTodo("");
  };

  return (
    <StyledTodoForm onSubmit={e => handlePostTodo(e)}>
      <StyledTodoInput
        data-testid="new-todo-input"
        value={currTodo}
        onChange={e => setCurrTodo(e.target.value)}
      />
      <StyledTodoButton data-testid="new-todo-add-button">
        추가
      </StyledTodoButton>
    </StyledTodoForm>
  );
}