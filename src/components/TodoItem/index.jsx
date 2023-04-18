import { useState } from "react";
import { baseRequest } from "../../apis/core";
import { getTodos, deleteTodo } from "../../apis/todos";

export default function TodoItem({ currTodo, accessToken, setList }) {
  const [completed, setCompleted] = useState(currTodo.isCompleted);
  const [updatedTodo, setUpdatedTodo] = useState(currTodo.todo);
  const [edited, setEdited] = useState(false);

  const updateTodo = async id => {
    try {
      await baseRequest
        .put(
          `/todos/${id}`,
          {
            todo: updatedTodo,
            isCompleted: !completed,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(() => {
          setEdited(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async id => {
    const response = await deleteTodo(id, accessToken);

    if (response === 204) {
      const latestTodos = await getTodos(accessToken);
      setList(latestTodos);
    }
  };

  return (
    <li>
      {!edited ? (
        <>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                setCompleted(!completed);
                updateTodo(currTodo.id);
              }}
              checked={completed}
            />
            <span>{updatedTodo}</span>
          </label>
          <button data-testid="modify-button" onClick={() => setEdited(true)}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => handleDelete(currTodo.id)}>
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            data-testid="modify-input"
            onChange={e => setUpdatedTodo(e.target.value)}
          />
          <button
            data-testid="submit-button"
            onClick={() => updateTodo(currTodo.id)}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setEdited(false)}>
            취소
          </button>
        </>
      )}
    </li>
  );
}
