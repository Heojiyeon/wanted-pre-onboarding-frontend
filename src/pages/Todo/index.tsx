import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { getAccessToken } from "../../utils/handleAccessToken";
import { StyledContainer } from "./style";
import { currTodo } from "../../utils/types";

export default function Todo() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState("");
  const [newTodo, setNewTodo] = useState<currTodo>();

  useEffect(() => {
    const token = getAccessToken("access_token");

    if (token) {
      setAccessToken(token);
    }
    if (!token) {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledContainer>
      <Header title={"TodoList"} />
      <TodoForm accessToken={accessToken} setNewTodo={setNewTodo} />
      <TodoList accessToken={accessToken} newTodo={newTodo} />
    </StyledContainer>
  );
}
