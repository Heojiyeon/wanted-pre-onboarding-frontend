import { useState } from "react";
import { baseRequest } from "../../apis/core";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = email => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return email.match(regExp);
  };

  const isValidPassword = password => {
    return password.length >= 8 ? true : false;
  };

  const handleForm = async e => {
    e.preventDefault();
    try {
      await baseRequest.post("/auth/signup", {
        email,
        password,
      });
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <input
        id="signup-email"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <label id="signup-password">password</label>
      <input
        id="signup-password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button
        data-testid="signup-button"
        disabled={!(isValidPassword(password) && isValidEmail(email))}>
        Sign up
      </button>
    </form>
  );
}
