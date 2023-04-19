import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { getAccessToken } from "../../utils/handleAccessToken";
import { StyledContainer, StyledLi, StyledLink } from "./style";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    if (getAccessToken("access_token")) {
      navigate("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
