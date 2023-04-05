import { useState } from "react";
import { baseRequest } from "../../apis/core";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkValues = async e => {
    e.preventDefault();
    console.log(baseRequest);
    if (password.length < 8) {
      alert("8자 이상 작성해주세요!");
    } else {
      try {
        await baseRequest.post("/auth/signup", {
          email: e.target[0].value,
          password: e.target[1].value,
        });
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={e => checkValues(e)}>
      <label id="email-input">email</label>
      <input id="signup-email" type="email" />
      <label id="signup-password">password</label>
      <input
        id="signup-password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      {password.length >= 1 && password.length < 8 && (
        <div>*8자 이상 입력해주세요.</div>
      )}
      <button data-testid="signup-button">Sign up</button>
    </form>
  );
}
