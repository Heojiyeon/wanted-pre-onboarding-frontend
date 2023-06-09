import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledNotExistButton, StyledNotExistContainer } from "./style";

export default function NotExist() {
  const navigate = useNavigate();

  return (
    <StyledNotExistContainer>
      This page does not exist!
      <StyledNotExistButton onClick={() => navigate(-1)}>
        뒤로 가기
      </StyledNotExistButton>
    </StyledNotExistContainer>
  );
}
