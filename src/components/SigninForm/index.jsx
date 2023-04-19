import { useNavigate } from "react-router";
import { signInAuth } from "../../apis/auth";
import { setAccessToken } from "../../utils/handleAccessToken";
import { StyledSignupForm, StyledInput, StyledSignupButton } from "./style";
export default function SigninForm() {
  const navigate = useNavigate();

  const handleForm = async e => {
    e.preventDefault();

    const response = await signInAuth(e.target[0].value, e.target[1].value);

    if (response.status === 200) {
      setAccessToken("access_token", response.data.access_token);
      navigate("/todo");
    }
  };

  return (
    <StyledSignupForm onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <StyledInput data-testid="email-input" type="email" />
      <label id="password-input">password</label>
      <StyledInput data-testid="password-input" type="password" />
      <StyledSignupButton data-testid="signin-button">Login</StyledSignupButton>
    </StyledSignupForm>
  );
}
