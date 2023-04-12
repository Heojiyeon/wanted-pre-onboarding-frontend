import { baseRequest } from "../../apis/core";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";

export default function TodoList() {
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
    const token = getAccessToken("access_token");
    if (token) {
      getTodo(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            </li>
          );
        })}
    </ul>
  );
}
