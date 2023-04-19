import { postTodo } from "../../apis/todos";
import { StyledTodoButton, StyledTodoForm, StyledTodoInput } from "./style";

export default function TodoForm({ accessToken, setNewTodo }) {
  const handlePostTodo = async e => {
    e.preventDefault();

    const response = await postTodo(accessToken, e.target[0].value);
    setNewTodo(response);

    e.target[0].value = "";
  };

  return (
    <StyledTodoForm onSubmit={e => handlePostTodo(e)}>
      <StyledTodoInput data-testid="new-todo-input" />
      <StyledTodoButton data-testid="new-todo-add-button">
        추가
      </StyledTodoButton>
    </StyledTodoForm>
  );
}
