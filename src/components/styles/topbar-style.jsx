import styled from "styled-components";

export const TopbarStyle = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.theme.body};
`;
