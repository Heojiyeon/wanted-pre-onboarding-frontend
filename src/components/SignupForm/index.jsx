import { useState } from "react";

export default function SignupForm() {
  const [password, setPassword] = useState("");

  const checkValues = e => {
    e.preventDefault();
    if (password.length < 8) {
      alert("8자 이상 작성해주세요!");
    } else {
      console.log("제출 되었습니다.", e.target[0].value, e.target[1].value);
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
