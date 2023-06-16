import React, { useEffect, useState } from "react";
import { getTodos } from "../../apis/todos";
import { currTodo } from "../../utils/types";
import TodoItem from "../TodoItem";
import { StyledUl } from "./style";

interface TodoListProps {
  accessToken: string;
  newTodo: currTodo | undefined;
}

export default function TodoList({ accessToken, newTodo }: TodoListProps) {
  const [list, setList] = useState([]);

  const handleGetTodos = async (accessToken: string) => {
    const response = await getTodos(accessToken);
    setList(response);
  };

  useEffect(() => {
    if (accessToken) {
      handleGetTodos(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, newTodo]);

  return (
    <StyledUl>
      {list.length !== 0 &&
        list.map((todo: currTodo) => {
          return (
            <TodoItem
              key={todo.id}
              currTodo={todo}
              accessToken={accessToken}
              setList={setList}
            />
          );
        })}
    </StyledUl>
  );
}
