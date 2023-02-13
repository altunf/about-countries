import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Cards } from "../components/Cards";
import { SearchBar } from "../components/SearchBar";
import { RegionFilter } from "../components/RegionFilter";
import { HomePageStyle } from "./styles/home-page-style";

function HomePage() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [filterCountryLists, setFilterCountryLists] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  const customFilter = (searchTerm) => {
    let filterCountryLists = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterCountryLists(filterCountryLists);
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

  const getRegion = () =>
    axios
      .get(
        `https://restcountries.com/v3.1/region/${searchParams.get("region")}`
      )
      .then((res) => {
        setCountries(res.data);
        setFilterCountryLists(res.data);
      });

  const getAllCountries = () =>
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setFilterCountryLists(res.data);
    });

  useEffect(() => {
    searchParams.get("region") ? getRegion() : getAllCountries();
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
