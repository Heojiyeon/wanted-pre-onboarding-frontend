import axios from "axios";
import { BASE_URL } from "../utils/constant";

const baseURL = BASE_URL;

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
