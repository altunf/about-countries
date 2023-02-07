import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Cards } from "../components/Cards";
import { SearchBar } from "../components/SearchBar";
import { RegionFilter } from "../components/RegionFilter";

import { HomePageStyle } from "./styles/home-page-style";

function HomePage() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filterCountryLists, setfilterCountryLists] = useState([]);
  const [countries, setCountries] = useState([]);

  const customFilter = (searchTerm) => {
    let filterCountryLists = countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    setfilterCountryLists(filterCountryLists);
  };

  const CountriesBoard = (
    <div className="row">
      {filterCountryLists.map((item, index) => {
        const handleClick = () => navigate(`/details/${item.name.common}`);

        return (
          <Cards
            key={index}
            flag={item.flags.png}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );

  const regionFetch = () =>
    axios
      .get(
        `https://restcountries.com/v3.1/region/${searchParams.get("region")}`
      )
      .then((res) => {
        setCountries(res.data);
        setfilterCountryLists(res.data);
      });

  const allCountriesFetch = () =>
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setfilterCountryLists(res.data);
    });

  useEffect(() => {
    searchParams.get("region") ? regionFetch() : allCountriesFetch();
  }, [searchParams.get("region")]);

  return (
    <HomePageStyle>
      <div className="d-flex justify-content-between ">
        <SearchBar customFilter={customFilter} />
        <RegionFilter />
      </div>
      {CountriesBoard}
    </HomePageStyle>
  );
}

export { HomePage };
