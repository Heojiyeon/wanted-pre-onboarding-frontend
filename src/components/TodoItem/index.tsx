import { Dispatch, SetStateAction, useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "../../apis/todos";
import {
  StyledLi,
  StyledSpan,
  StyledTodoButton,
  StyledTodoContainer,
} from "./style";
import React from "react";

interface TodoItemProps {
  currTodo: currTodo;
  accessToken: string;
  setList: Dispatch<SetStateAction<never[]>>;
}

type currTodo = {
  id: string;
  isCompleted: boolean;
  todo: string;
};

export default function TodoItem({
  currTodo,
  accessToken,
  setList,
}: TodoItemProps) {
  const [completed, setCompleted] = useState(currTodo.isCompleted);
  const [updatedTodo, setUpdatedTodo] = useState(currTodo.todo);
  const [edited, setEdited] = useState(false);

  const handleDeleteTodo = async (id: string) => {
    const response = await deleteTodo(id, accessToken);

    if (response === 204) {
      const latestTodos = await getTodos(accessToken);
      setList(latestTodos);
    }
  };

  const handleUpdateTodo = async (id: string, completed: boolean) => {
    const response = await updateTodo(id, accessToken, completed, updatedTodo);

    if (response === 200) {
      setEdited(false);
    }
  };

  const hnadleCompleted = (id: string) => {
    setCompleted(!completed);
    handleUpdateTodo(id, !completed);
  };

  return (
    <StyledLi>
      {!edited ? (
        <StyledTodoContainer>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                hnadleCompleted(currTodo.id);
              }}
              checked={completed}
            />
            <StyledSpan>{updatedTodo}</StyledSpan>
          </label>
          <div>
            <StyledTodoButton
              data-testid="modify-button"
              onClick={() => setEdited(true)}>
              수정
            </StyledTodoButton>
            <StyledTodoButton
              data-testid="delete-button"
              onClick={() => handleDeleteTodo(currTodo.id)}>
              삭제
            </StyledTodoButton>
          </div>
        </StyledTodoContainer>
      ) : (
        <StyledTodoContainer>
          <input
            data-testid="modify-input"
            onChange={e => setUpdatedTodo(e.target.value)}
          />
          <div>
            <StyledTodoButton
              data-testid="submit-button"
              onClick={() => handleUpdateTodo(currTodo.id, completed)}>
              제출
            </StyledTodoButton>
            <StyledTodoButton
              data-testid="cancel-button"
              onClick={() => setEdited(false)}>
              취소
            </StyledTodoButton>
          </div>
        </StyledTodoContainer>
      )}
    </StyledLi>
  );
}