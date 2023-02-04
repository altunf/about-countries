import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  width: 120px;
  padding: 8px;
  margin: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;
