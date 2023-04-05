import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const baseRequest = axios.create({
  baseURL,
});

baseRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export { baseRequest };
