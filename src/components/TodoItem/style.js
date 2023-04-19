import styled from "@emotion/styled";

const StyledTodoContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

const StyledLi = styled.li`
  list-style: none;
`;

const StyledSpan = styled.span`
  margin-left: 1rem;
`;

const StyledTodoButton = styled.button`
  width: 3rem;
  margin-left: 0.2rem;
  background: none;
  border: 0.2px solid;
`;

export { StyledTodoContainer, StyledLi, StyledSpan, StyledTodoButton };
