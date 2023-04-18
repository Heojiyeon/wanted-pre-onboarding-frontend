import { baseRequest } from "../../apis/core";
import { useEffect, useState } from "react";

export default function TodoList({ accessToken, newTodo }) {
  const [list, setList] = useState("");

  const updateTodo = id => {
    console.log("update todo", id);
  };

  const deleteTodo = id => {
    try {
      baseRequest
        .delete(`/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          getTodo(accessToken);
        });
    } catch (error) {
      console.error(error);
    }
  };

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
            <li key={todo.id}>
              <label>
                <input type="checkbox" />
                <span>{todo.todo}</span>
              </label>
              <button
                data-testid="modify-button"
                onClick={() => updateTodo(todo.id)}>
                수정
              </button>
              <button
                data-testid="delete-button"
                onClick={() => deleteTodo(todo.id)}>
                삭제
              </button>
            </li>
          );
        })}
    </ul>
  );
}
