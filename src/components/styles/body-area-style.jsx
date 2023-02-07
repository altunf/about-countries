import styled from "styled-components";

export const BodyAreaStyle = styled.div`
  width: 100%;
  padding: 50px;

  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.backgroundColor};
`;
