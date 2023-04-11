import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken("access_token")) {
      navigate("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Link to="/signup">회원가입</Link>
      <Link to="/signin">로그인</Link>
    </div>
  );
}
