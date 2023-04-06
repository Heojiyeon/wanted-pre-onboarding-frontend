import { useNavigate } from "react-router";
import { baseRequest } from "../../apis/core";

export default function SigninForm() {
  const navigate = useNavigate();

  const handleForm = async e => {
    e.preventDefault();
    try {
      const response = await baseRequest.post("/auth/signin", {
        email: e.target[0].value,
        password: e.target[1].value,
      });
      if (response.status === 200) {
        window.localStorage.setItem("access_token", response.data.access_token);
        navigate("/todo");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={e => handleForm(e)}>
      <label id="email-input">email</label>
      <input data-testid="email-input" type="email" />
      <label id="email-input">password</label>
      <input data-testid="password-input" type="password" />
      <button data-testid="signin-button">Login</button>
    </form>
  );
}
