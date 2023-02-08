import styled from "styled-components";

export const DetailCardStyle = styled.div`
  display: flex;
  margin: 2rem 2rem;

  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    margin-right: 7rem;
  }
`;

export const BorderCountriesStyle = styled.button`
  width: 100px;
  opacity: 0.6;
  border: none;
  display: flex;
  padding: 1px 35px;
  align-items: center;
  margin: 0 10px 0 10px;

  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius-s);

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;
