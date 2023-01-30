import React from "react";
import { Outlet } from "react-router-dom";
import { BodyAreaStyle } from "./styles/body-area-style";

function BodyArea() {
  return (
    <BodyAreaStyle>
      <Outlet />
    </BodyAreaStyle>
  );
}

export { BodyArea };
