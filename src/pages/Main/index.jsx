import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "../../utils/handleAccessToken";
import { StyledLink, StyledLi, StyledContainer } from "./style";

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
