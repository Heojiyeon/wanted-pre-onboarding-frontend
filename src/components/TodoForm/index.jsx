import { baseRequest } from "../../apis/core";

export default function TodoForm({ accessToken, setNewTodo }) {
  const handleTodo = async e => {
    e.preventDefault();

    try {
      await baseRequest
        .post(
          "/todos",
          {
            todo: e.target[0].value,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then(response => {
          setNewTodo(response.data.todo);
        });
    } catch (error) {
      alert("올바르게 작성해주세요!");
    }
    e.target[0].value = "";
  };

  return (
    <form onSubmit={e => handleTodo(e)}>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}
