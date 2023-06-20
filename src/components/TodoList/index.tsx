import React, { Dispatch, SetStateAction } from "react";
import { currTodo } from "../../utils/types";
import TodoItem from "../TodoItem";
import { StyledUl } from "./style";

interface TodoListProps {
  accessToken: string;
  todoList: Array<currTodo>;
  setTodoList: Dispatch<SetStateAction<currTodo[]>>;
}

export default function TodoList({
  accessToken,
  todoList,
  setTodoList,
}: TodoListProps) {
  return (
    <StyledUl>
      {todoList.length !== 0 &&
        todoList.map((todo: currTodo) => {
          return (
            <TodoItem
              key={todo.id}
              currTodo={todo}
              setTodoList={setTodoList}
              accessToken={accessToken}
            />
          );
        })}
    </StyledUl>
  );
}
