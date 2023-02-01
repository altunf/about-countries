import React from "react";
import styled from "styled-components";

function Logo() {
  return <LogoStyle>Where in the world?</LogoStyle>;
}

export { Logo };

const LogoStyle = styled.h2`
  margin-left: 4.1rem;
  color: ${(props) => props.theme.text};
`;