import React from "react";
import { BodyArea } from "../components/BodyArea";
import { Topbar } from "../components/Topbar";

function MainLayout() {
  return (
    <div>
      <Topbar />
      <BodyArea />
    </div>
  );
}

export { MainLayout };
