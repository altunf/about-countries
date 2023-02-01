import styled from "styled-components";

export const BodyAreaStyle = styled.div`
  padding: 50px;
  width: 100%;

  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.backgroundColor};
`;
