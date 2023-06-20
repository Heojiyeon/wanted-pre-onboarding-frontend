import React, { FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { signInAuth } from "../../apis/auth";
import { ACCESS_TOKEN } from "../../utils/constants";
import { setAccessToken } from "../../utils/handleAccessToken";
import { isValidEmail, isValidPassword } from "../../utils/validates";
import { StyledInput, StyledSignupButton, StyledSignupForm } from "./style";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const response = await signInAuth(email, password);

      if (response?.status === 200) {
        setAccessToken(ACCESS_TOKEN, response.data.access_token);
        navigate("/todo");
      }
    },
    [email, navigate, password]
  );

  return (
    <StyledSignupForm onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <StyledInput
        data-testid="email-input"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <label id="password-input">password</label>
      <StyledInput
        data-testid="password-input"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <StyledSignupButton
        data-testid="signin-button"
        disabled={!(isValidPassword(password) && isValidEmail(email))}>
        Sign in
      </StyledSignupButton>
    </StyledSignupForm>
  );
}
