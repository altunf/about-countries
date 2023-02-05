import styled from "styled-components";

export const DetailPageStyle = styled.div`
  font-size: var(--font-size-l);
`;

export const StyledButton = styled.button`
  border: none;
  width: 120px;
  padding: 8px;
  margin: 2rem;
  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius-m);

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;
