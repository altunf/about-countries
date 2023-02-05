import styled from "styled-components";

export const SearchbarStyle = styled.input`
  border: none;
  width: 600px;
  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius-m);

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;
