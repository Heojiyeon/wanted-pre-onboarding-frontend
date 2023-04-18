import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpAuth } from "../../apis/auth";

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

    const response = await signUpAuth(email, password);
    if (response === 201) {
      navigate("/signin");
    }
  };

  return (
    <form onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <input
        id="email-input"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <label id="password-input">password</label>
      <input
        id="password-input"
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
