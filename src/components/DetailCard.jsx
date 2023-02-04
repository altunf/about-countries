import React from "react";
import { DetailCardStyle } from "./styles/detailCard-style.jsx";
import styled from "styled-components";

function DetailCard({
  image,
  name,
  nativeName,
  population,
  region,
  sub,
  capital,
  domain,
  currencies,
  languages,
  borders,
}) {
  const CountryLanguages = Object.values(languages || []).map((language) => {
    return " " + language;
  });

  const bordersButton = borders?.map((border, index) => {
    return <BorderButtons key={index}>{border}</BorderButtons>;
  });

  return (
    <DetailCardStyle>
      <img src={image} alt="..." />
      <div className="row m-4">
        <h2>
          <b>{name}</b>
        </h2>
        <div className="col">
          <p>
            <b>Native Name: </b> {nativeName}
          </p>
          <p>
            <b>Population:</b> {population}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Sub Region:</b> {sub}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
        <div className="col">
          <p>
            <b>Top Level Domain:</b> {domain}
          </p>
          <p>
            <b>Currencies:</b> {currencies}
          </p>
          <p>
            <b>Languages:</b> {CountryLanguages.toString()}
          </p>
        </div>
        <div>
          <div className="d-flex">
            <b>Border Countries:</b>
            <div className="d-flex">{bordersButton}</div>
          </div>
        </div>
      </div>
    </DetailCardStyle>
  );
}

export { DetailCard };

const BorderButtons = styled.div`
  display: flex;
  border-radius: 4px;
  padding: 1px 30px 1px 30px;
  margin: 0 10px 0 10px;
  opacity: 0.6;

  background-color: ${(props) => props.theme.body};
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;
