import { useEffect } from "react";
import { useNavigate } from "react-router";
import { baseRequest } from "../../apis/core";
import { getAccessToken, setAccessToken } from "../../utils/handleAccessToken";

export default function SigninForm() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken("access_token")) {
      navigate("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = async e => {
    e.preventDefault();
    try {
      const response = await baseRequest.post("/auth/signin", {
        email: e.target[0].value,
        password: e.target[1].value,
      });
      if (response.status === 200) {
        setAccessToken("access_token", response.data.access_token);
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
      <label id="password-input">password</label>
      <input data-testid="password-input" type="password" />
      <button data-testid="signin-button">Login</button>
    </form>
  );
}
