import { useEffect } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";
import { useNavigate } from "react-router";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAccessToken("access_token")) {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}
