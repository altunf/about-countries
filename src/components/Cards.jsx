import React from "react";
import styled from "styled-components";

function Cards({ flag, name, population, region, capital }) {
  return (
    <CardsStyle>
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

const CardsStyle = styled.div`
  background-color: ${(props) => props.theme.body};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 23rem;
  padding: 0;
  margin: 12px;
  margin-bottom: 1rem;
  margin-top: 4rem;

  img {
    height: 50%;
    width: 100%;
  }

  div {
    padding: 2rem;

    h4 {
      margin-bottom: 1.5rem;
    }
  }
`;
