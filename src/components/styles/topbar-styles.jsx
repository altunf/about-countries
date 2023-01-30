import styled from "styled-components";

export const TopbarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  b {
    color: ${(props) => props.theme.text};
  }

  background-color: ${(props) => props.theme.body};
`;
