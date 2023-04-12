import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import TodoForm from "../../components/TodoForm";
import { getAccessToken } from "../../utils/handleAccessToken";
import TodoList from "../../components/TodoList";

export default function Todo() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");

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
      <TodoForm accessToken={accessToken} />
      <TodoList accessToken={accessToken} />
    </>
  );
}
