const getTodoList = () => {
  return window.localStorage.getItem("todos");
};

const setTodoList = currentList => {
  return window.localStorage.setItem("todos", currentList);
};

export { getTodoList, setTodoList };
