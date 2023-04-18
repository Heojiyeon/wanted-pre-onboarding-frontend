import { useState } from "react";
import { baseRequest } from "../../apis/core";

export default function TodoItem({
  currTodo,
  accessToken,
  currCompleted,
  getTodo,
}) {
  const [completed, setCompleted] = useState(currCompleted);

  const updateTodo = async id => {
    setCompleted(!completed);
    try {
      await baseRequest.put(
        `/todos/${id}`,
        {
          todo: currTodo.todo,
          isCompleted: !completed,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
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

  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            updateTodo(currTodo.id);
          }}
          checked={completed}
        />
        <span>{currTodo.todo}</span>
      </label>
      <button
        data-testid="modify-button"
        // onClick={() => updateTodo(currTodo.id)}
      >
        수정
      </button>
      <button
        data-testid="delete-button"
        onClick={() => deleteTodo(currTodo.id)}>
        삭제
      </button>
    </li>
  );
}
