import styled from "styled-components";

export const TopbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.body};
`;
