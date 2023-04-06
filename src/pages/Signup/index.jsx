import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/SignupForm";
import { getAccessToken } from "../../utils/handleAccessToken";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken("access_token")) {
      navigate("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SignupForm />
    </div>
  );
}
