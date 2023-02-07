import styled from "styled-components";

export const CardsStyle = styled.div`
  cursor: pointer;

  padding: 0;
  width: 23rem;
  margin: 12px;
  margin-top: 4rem;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow-1);

  background-color: ${(props) => props.theme.body};

  img {
    width: 100%;
    height: 50%;
  }

  div {
    padding: 2rem;

    h4 {
      margin-bottom: 1.5rem;
    }
  }
`;
