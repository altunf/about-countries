import React from "react";
import { Outlet } from "react-router-dom";

function BodyArea() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export { BodyArea };
