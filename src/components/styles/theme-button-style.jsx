import styled from "styled-components";

export const ThemeButtonStyle = styled.button`
  background-color: ${(props) => props.theme.body};
  border-radius: 16px;
  outline: none;
  align-items: center;
  color: ${(props) => props.theme.text};

  i {
    fill: ${(props) => props.theme.text};
  }
`;
