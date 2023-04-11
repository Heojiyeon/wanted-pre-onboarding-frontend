import { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";
import { useNavigate } from "react-router";
import TodoForm from "../../components/TodoForm";
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
    <div>
      <TodoForm accessToken={accessToken} />
      <TodoList />
    </div>
  );
}
