import { useNavigate } from "react-router";
import { signInAuth } from "../../apis/auth";
import { setAccessToken } from "../../utils/handleAccessToken";

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
    <form onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <input data-testid="email-input" type="email" />
      <label id="password-input">password</label>
      <input data-testid="password-input" type="password" />
      <button data-testid="signin-button">Login</button>
    </form>
  );
}
