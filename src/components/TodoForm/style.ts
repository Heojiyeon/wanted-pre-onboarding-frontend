import styled from "@emotion/styled";

const StyledTodoForm = styled.form`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StyledTodoInput = styled.input`
  width: 16rem;
`;

const StyledTodoButton = styled.button`
  width: 3rem;
  margin-left: 0.2rem;
  background: none;
  border: 0.2px solid;
`;

export { StyledTodoForm, StyledTodoInput, StyledTodoButton };
