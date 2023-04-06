import { useEffect } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";
import { useNavigate } from "react-router";

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getAccessToken("access_token")) {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Todo</div>;
}
