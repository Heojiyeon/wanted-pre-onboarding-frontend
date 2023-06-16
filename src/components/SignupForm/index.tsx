import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpAuth } from "../../apis/auth";
import { isValidEmail, isValidPassword } from "../../utils/validates";
import { StyledInput, StyledSignupButton, StyledSignupForm } from "./style";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signUpAuth(email, password);
    if (response === 201) {
      navigate("/signin");
    }
  };

  return (
    <StyledSignupForm onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <StyledInput
        id="email-input"
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
      <label id="password-input">password</label>
      <StyledInput
        id="password-input"
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <StyledSignupButton
        data-testid="signup-button"
        disabled={!(isValidPassword(password) && isValidEmail(email))}>
        Sign up
      </StyledSignupButton>
    </StyledSignupForm>
  );
}
