import React from "react";
import { SearchbarStyle } from "./styles/searchbar-style";

function Searchbar() {
  return (
    <>
      <SearchbarStyle type="name" placeholder="Search for a country..." />
    </>
  );
}

export { Searchbar };
