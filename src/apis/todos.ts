import { baseRequest } from "./core";

const postTodo = async (accessToken: string, todo: String) => {
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

const getTodos = async (accessToken: String) => {
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

const deleteTodo = async (id: string, accessToken: string) => {
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

const updateTodo = async (
  id: string,
  accessToken: string,
  completed: boolean,
  updatedTodo: string
) => {
  try {
    const response = await baseRequest.put(
      `/todos/${id}`,
      {
        todo: updatedTodo,
        isCompleted: completed,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.status;
  } catch (error) {
    console.error(error);
  }
};

export { postTodo, getTodos, deleteTodo, updateTodo };
