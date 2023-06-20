import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getTodos } from "../../apis/todos";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import Header from "../../components/common/Header";
import { ACCESS_TOKEN } from "../../utils/constants";
import { getAccessToken } from "../../utils/handleAccessToken";
import { currTodo } from "../../utils/types";
import { StyledContainer } from "./style";

export default function Todo() {
  const [accessToken, setAccessToken] = useState("");
  const [todoList, setTodoList] = useState<currTodo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken(ACCESS_TOKEN);

    const handleGetTodos = async (accessToken: string) => {
      return await getTodos(accessToken);
    };

    const fetchData = async (token: string) => {
      const todos = await handleGetTodos(token);
      setTodoList(todos);
    };

    if (!token) {
      navigate("/signin");
    } else {
      setAccessToken(token);
      fetchData(token);
    }
  }, [navigate]);

  return (
    <StyledContainer>
      <Header title={"TodoList"} />
      <TodoForm setTodoList={setTodoList} accessToken={accessToken} />
      <TodoList
        todoList={todoList}
        accessToken={""}
        setTodoList={setTodoList}
      />
    </StyledContainer>
  );
}
