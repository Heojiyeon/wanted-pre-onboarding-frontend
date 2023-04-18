import { useEffect, useState } from "react";
import { getTodos } from "../../apis/todos";
import TodoItem from "../TodoItem";

export default function TodoList({ accessToken, newTodo }) {
  const [list, setList] = useState("");

  const handleGetTodos = async accessToken => {
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
    <ul>
      {list.length !== 0 &&
        list.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              currTodo={todo}
              currCompleted={todo.isCompleted}
              accessToken={accessToken}
              setList={setList}
            />
          );
        })}
    </ul>
  );
}
