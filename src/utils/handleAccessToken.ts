const getAccessToken = (key: string) => {
  return window.localStorage.getItem(key);
};

const setAccessToken = (key: string, value: string) => {
  return window.localStorage.setItem(key, value);
};

export { getAccessToken, setAccessToken };
