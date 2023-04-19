import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import SigninForm from "../../components/SigninForm";
import { getAccessToken } from "../../utils/handleAccessToken";
import { StyledContainer } from "./style";

export default function Signin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken("access_token")) {
      navigate("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer>
      <Header title={"Signin"} />
      <SigninForm />
    </StyledContainer>
  );
}
