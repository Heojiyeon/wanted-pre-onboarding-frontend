import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { getAccessToken } from "../../utils/handleAccessToken";

export default function Todo() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const [newTodo, setNewTodo] = useState({});

  useEffect(() => {
    const token = getAccessToken("access_token");
    setAccessToken(token);
    if (!token) {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TodoForm accessToken={accessToken} setNewTodo={setNewTodo} />
      <TodoList accessToken={accessToken} newTodo={newTodo} />
    </>
  );
}
