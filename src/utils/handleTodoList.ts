import { currTodo } from "./types";

const getTodoList = () => {
  return window.localStorage.getItem("todos");
};

const setTodoList = (currentList: Array<currTodo>) => {
  return window.localStorage.setItem("todos", JSON.stringify(currentList));
};

export { getTodoList, setTodoList };
