import { baseRequest } from "../../apis/core";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";

export default function TodoList() {
  const [list, setList] = useState("");
  const [token, setToken] = useState("");

  const updateTodo = id => {
    console.log("update todo", id);
  };

  const deleteTodo = id => {
    try {
      baseRequest
        .delete(`/todos/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          getTodo(token);
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
    const token = getAccessToken("access_token");
    if (token) {
      getTodo(token);
      setToken(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

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
