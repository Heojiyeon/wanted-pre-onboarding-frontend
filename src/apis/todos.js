import { baseRequest } from "./core";

const postTodo = async (accessToken, todo) => {
  try {
    const response = await baseRequest.post(
      "/todos",
      {
        todo,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    alert("올바르게 작성해주세요!");
  }
};

const getTodos = async accessToken => {
  try {
    const response = await baseRequest.get("/todos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteTodo = async (id, accessToken) => {
  try {
    const response = await baseRequest.delete(`/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
};

export { postTodo, getTodos, deleteTodo };
