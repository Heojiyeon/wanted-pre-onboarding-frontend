import { useState } from "react";
import { deleteTodo, getTodos, updateTodo } from "../../apis/todos";

export default function TodoItem({ currTodo, accessToken, setList }) {
  const [completed, setCompleted] = useState(currTodo.isCompleted);
  const [updatedTodo, setUpdatedTodo] = useState(currTodo.todo);
  const [edited, setEdited] = useState(false);

  const handleDeleteTodo = async id => {
    const response = await deleteTodo(id, accessToken);

    if (response === 204) {
      const latestTodos = await getTodos(accessToken);
      setList(latestTodos);
    }
  };

  const handleUpdateTodo = async (id, completed) => {
    const response = await updateTodo(id, accessToken, completed, updatedTodo);

    if (response === 200) {
      setEdited(false);
    }
  };

  const hnadleCompleted = id => {
    setCompleted(!completed);
    handleUpdateTodo(id, !completed);
  };

  return (
    <li>
      {!edited ? (
        <>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                hnadleCompleted(currTodo.id);
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
            onClick={() => handleDeleteTodo(currTodo.id)}>
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
            onClick={() => handleUpdateTodo(currTodo.id, completed)}>
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
