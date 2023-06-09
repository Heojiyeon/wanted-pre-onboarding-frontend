import { baseRequest } from "./core";

const signUpAuth = async (email: string, password: string) => {
  try {
    const response = await baseRequest.post("/auth/signup", {
      email,
      password,
    });
    return response.status;
  } catch (error) {
    console.error(error);
  }
};

const signInAuth = async (email: string, password: string) => {
  try {
    const response = await baseRequest.post("/auth/signin", {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { signUpAuth, signInAuth };
