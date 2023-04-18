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

export { postTodo };
