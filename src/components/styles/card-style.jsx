import styled from "styled-components";

export const CardsStyle = styled.div`
  padding: 0;
  width: 23rem;
  margin: 12px;
  margin-top: 4rem;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow-1);
  
  background-color: ${(props) => props.theme.body};

  img {
    height: 50%;
    width: 100%;
  }

  div {
    padding: 2rem;

    h4 {
      margin-bottom: 1.5rem;
    }
  }
`;
