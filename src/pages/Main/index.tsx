import React from "react";
import { useNavigate } from "react-router";
import Header from "../../components/common/Header";
import { ACCESS_TOKEN } from "../../utils/constants";
import {
  deleteAccessToken,
  getAccessToken,
} from "../../utils/handleAccessToken";
import { StyledButton, StyledContainer, StyledLi, StyledLink } from "./style";

export default function Main() {
  const token = getAccessToken(ACCESS_TOKEN);
  const navigate = useNavigate();

  if (token) {
    return (
      <StyledContainer>
        <Header title={"환영합니다!"} />
        <StyledButton onClick={() => navigate("/todo")}>
          투두 리스트로 바로 가기
        </StyledButton>
        <br />
        <StyledButton
          onClick={() => {
            deleteAccessToken("access_token");
            navigate("/");
          }}>
          로그아웃
        </StyledButton>
      </StyledContainer>
    );
  } else {
    return (
      <StyledContainer>
        <Header title={"pre-onboarding"} />
        <StyledLi>
          회원이신가요? &nbsp;
          <StyledLink to="/signin">로그인</StyledLink>
        </StyledLi>
        <StyledLi>
          아직 회원이 아니신가요? &nbsp;
          <StyledLink to="/signup">회원가입</StyledLink>
        </StyledLi>
      </StyledContainer>
    );
  }
}
