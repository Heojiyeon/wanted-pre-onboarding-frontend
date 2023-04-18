import { baseRequest } from "../../apis/core";
import { useEffect, useState } from "react";
import TodoItem from "../TodoItem";

export default function TodoList({ accessToken, newTodo }) {
  const [list, setList] = useState("");

  const getTodo = async accessToken => {
    try {
      await baseRequest
        .get("/todos", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(response => {
          if (response.status === 200) {
            setList(response.data);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (accessToken) {
      getTodo(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, newTodo]);

  return (
    <ul>
      {list.length !== 0 &&
        list.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              currTodo={todo}
              currCompleted={todo.isCompleted}
              accessToken={accessToken}
              getTodo={getTodo}
            />
          );
        })}
    </ul>
  );
}
