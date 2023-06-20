import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;

const StyledLi = styled.li`
  list-style: none;
  margin: 1rem;
  display: flex;
  justify-content: center;

  :hover {
    mouse: pointer;
  }
`;

export { StyledLink, StyledLi, StyledContainer };
