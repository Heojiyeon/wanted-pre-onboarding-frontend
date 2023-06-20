import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import { postTodo } from "../../apis/todos";
import { currTodo } from "../../utils/types";
import { StyledTodoButton, StyledTodoForm, StyledTodoInput } from "./style";

interface TodoFormProps {
  accessToken: string;
  setTodoList: Dispatch<SetStateAction<currTodo[]>>;
}

export default function TodoForm({ accessToken, setTodoList }: TodoFormProps) {
  const [currTodo, setCurrTodo] = useState("");

  const handlePostTodo = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const response = await postTodo(accessToken, currTodo);
      setTodoList(prevList => [...prevList, response]);

      setCurrTodo("");
    },
    [accessToken, currTodo, setTodoList]
  );

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
