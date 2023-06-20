import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import SigninForm from "../../components/SigninForm";
import Header from "../../components/common/Header";
import { ACCESS_TOKEN } from "../../utils/constants";
import { getAccessToken } from "../../utils/handleAccessToken";
import { StyledContainer } from "./style";

export default function Signin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken(ACCESS_TOKEN);
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <StyledContainer>
      <Header title={"Signin"} />
      <SigninForm />
    </StyledContainer>
  );
}
