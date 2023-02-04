import React from "react";
import { Outlet } from "react-router-dom";
import { BodyAreaStyle } from "./styles/bodyArea-style";

function BodyArea() {
  return (
    <BodyAreaStyle>
      <Outlet />
    </BodyAreaStyle>
  );
}

export { BodyArea };
