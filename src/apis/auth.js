import { baseRequest } from "./core";

const postAuth = async (email, password) => {
  try {
    const response = await baseRequest.post("/auth/signup", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { postAuth };
