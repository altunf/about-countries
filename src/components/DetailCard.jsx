import { useSearchParams } from "react-router-dom";

import {
  DetailCardStyle,
  BorderCountriesStyle,
} from "./styles/detail-card-style.jsx";

function DetailCard({
  nativeName,
  population,
  currencies,
  languages,
  subregion,
  capital,
  borders,
  region,
  image,
  name,
  tld,
}) {
  let [searchParams, setSearchParams] = useSearchParams();

  const CountryLanguages = Object.values(languages || []).map(
    (language) => " " + language
  );

  const bordersButton = borders?.map((border, index) => {
    const handleClick = () => setSearchParams(`codes=${border}`);

    return (
      <BorderCountriesStyle onClick={handleClick} key={index}>
        {border}
      </BorderCountriesStyle>
    );
  });

  return (
    <DetailCardStyle>
      <img src={image} alt="..." />
      <div className="row m-4">
        <h2>
          <b>{name}</b>
        </h2>
        <div className="col ">
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
            <b>Sub Region:</b> {subregion}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
        <div className="col">
          <p>
            <b>Top Level Domain:</b> {tld}
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
