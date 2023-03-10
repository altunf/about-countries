import axios from "axios";
import { useEffect, useState } from "react";
import { DetailCard } from "../components/DetailCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { StyledButton, DetailPageStyle } from "./styles/detail-page-style";

function DetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [countryDetails, setCountryDetails] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const countryCurrencies = Object.values(countryDetails.currencies || {})[0]
    ?.name;

  const countryNativeName = Object.values(
    countryDetails.name?.nativeName || {}
  )[Object.keys(countryDetails.name?.nativeName || {}).length - 1]?.common;

  const getCountryName = () =>
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => setCountryDetails(res.data[0]));

  const getCountryCode = () =>
    axios
      .get(`https://restcountries.com/v3.1/alpha/${searchParams.get("codes")}`)
      .then((res) => setCountryDetails(res.data[0]));

  useEffect(() => {
    searchParams.get("codes") ? getCountryCode() : getCountryName();
  }, [searchParams]);

  return (
    <DetailPageStyle>
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
          subRegion={countryDetails.subregion}
          capital={countryDetails.capital}
          tld={countryDetails.tld}
          currencies={countryCurrencies}
          languages={countryDetails.languages}
          borders={countryDetails.borders}
        />
      }
    </DetailPageStyle>
  );
}

export { DetailPage };
