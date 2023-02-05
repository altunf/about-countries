import React from "react";
import { CardsStyle } from "./styles/card-style";

function Cards({ flag, name, population, region, capital, handleClick }) {
  return (
    <CardsStyle onClick={handleClick}>
      <img src={flag} alt="..." />
      <div>
        <h4>
          <b>{name}</b>{" "}
        </h4>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </CardsStyle>
  );
}

export { Cards };
