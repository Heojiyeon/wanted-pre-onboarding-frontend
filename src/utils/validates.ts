const isValidEmail = (email: string) => {
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return email.match(regExp);
};

const isValidPassword = (password: string) => {
  return password.length >= 8 ? true : false;
};

export { isValidEmail, isValidPassword };
