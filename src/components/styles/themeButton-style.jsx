import styled from "styled-components";

export const ThemeButtonStyle = styled.button`
  border: none;
  outline: none;

  align-items: center;
  margin-right: 4.1rem;

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  i {
    fill: ${(props) => props.theme.text};
  }
`;
