import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/SignupForm";
import Header from "../../components/common/Header";
import { ACCESS_TOKEN } from "../../utils/constants";
import { getAccessToken } from "../../utils/handleAccessToken";
import { StyledContainer } from "./style";

export default function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken(ACCESS_TOKEN);
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <StyledContainer>
      <Header title={"Signup"} />
      <SignupForm />
    </StyledContainer>
  );
}
