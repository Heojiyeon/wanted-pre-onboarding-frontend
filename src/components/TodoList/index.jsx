import { useEffect, useState } from "react";
import { getTodos } from "../../apis/todos";
import TodoItem from "../TodoItem";

export default function TodoList({ accessToken, newTodo }) {
  const [list, setList] = useState("");

  const getTodoList = async accessToken => {
    const response = await getTodos(accessToken);
    setList(response);
  };
  useEffect(() => {
    if (accessToken) {
      getTodoList(accessToken);
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
            />
          );
        })}
    </ul>
  );
}
