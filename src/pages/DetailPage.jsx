import React, { useEffect, useState } from "react";
import { DetailCard } from "../components/DetailCard";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "./styles/detail-page-style";
import axios from "axios";

function DetailPage() {
  const navigate = useNavigate();
  const { name } = useParams();

  const [countryDetails, setCountryDetails] = useState([]);

  const countryCurrencies = Object.values(countryDetails.currencies || {})[0]
    ?.name;

  const countryNativeName = Object.values(
    countryDetails.name?.nativeName || {}
  )[Object.keys(countryDetails.name?.nativeName || {}).length - 1]?.common;

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
      setCountryDetails(res.data[0]);
      console.log(res.data[0]);
    });
  }, []);

  return (
    <>
      <StyledButton onClick={() => navigate(-1)}>
        <i className="bi bi-arrow-left" /> Back
      </StyledButton>
      {
        <DetailCard
          image={countryDetails.flags?.svg}
          name={countryDetails.name?.common}
          nativeName={countryNativeName}
          population={countryDetails.population}
          region={countryDetails.region}
          sub={countryDetails.subregion}
          capital={countryDetails.capital}
          domain={countryDetails.tld}
          currencies={countryCurrencies}
          languages={countryDetails.languages}
          borders={countryDetails.borders}
        />
      }
    </>
  );
}

export { DetailPage };
