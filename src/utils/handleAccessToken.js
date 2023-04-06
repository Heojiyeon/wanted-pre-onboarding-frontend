const getAccessToken = key => {
  return window.localStorage.getItem(key);
};

const setAccessToken = (key, value) => {
  return window.localStorage.setItem(key, value);
};

export { getAccessToken, setAccessToken };
