import styled from "styled-components";

export const ThemeButtonStyle = styled.button`
  background-color: ${(props) => props.theme.body};
  border: none;
  align-items: center;
  outline: none;
  margin-right: 4.1rem;

  i {
    fill: ${(props) => props.theme.text};
  }

  color: ${(props) => props.theme.text};
`;
