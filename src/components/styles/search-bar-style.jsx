import styled from "styled-components";

export const FormStyle = styled.form`
  width: 600px;
  border: none;

  font-size: var(--font-size-m);
  box-shadow: var(--box-shadow-2);
  border-radius: var(--border-radius-m);

  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  div {
    input {
      border: none;
      outline: none;
      margin: 1.2rem;

      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.body};
    }
    i {
      margin-left: 1.5rem;
    }
  }
`;
