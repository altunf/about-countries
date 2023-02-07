import { useNavigate } from "react-router-dom";

import { LogoStyle } from "./styles/logo-style";

function Logo() {
  const navigate = useNavigate();

  return (
    <LogoStyle>
      <b onClick={() => navigate(`/`)}>Where in the world?</b>
    </LogoStyle>
  );
}

export { Logo };
