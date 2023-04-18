import { useEffect } from "react";
import { useNavigate } from "react-router";
import SigninForm from "../../components/SigninForm";
import { getAccessToken } from "../../utils/handleAccessToken";

export default function Signin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken("access_token")) {
      navigate("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SigninForm />
    </div>
  );
}
