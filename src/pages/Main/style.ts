import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledContainer = styled.ul`
  position: absolute;
  width: 20rem;
  top: 30%;
  left: 40%;
  padding: 0;
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
