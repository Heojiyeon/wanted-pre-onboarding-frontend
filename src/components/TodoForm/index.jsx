import { postTodo } from "../../apis/todos";

export default function TodoForm({ accessToken, setNewTodo }) {
  const handlePostTodo = async e => {
    e.preventDefault();

    const response = await postTodo(accessToken, e.target[0].value);
    setNewTodo(response);

    e.target[0].value = "";
  };

  return (
    <form onSubmit={e => handlePostTodo(e)}>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
}
