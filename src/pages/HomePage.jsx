import axios from "axios";
import { Cards } from "../components/Cards";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Searchbar } from "../components/Searchbar";
import { HomePageStyle } from "./styles/home-page-style";
import { RegionFilter } from "../components/RegionFilter";

function HomePage() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [filterCountryLists, setfilterCountryLists] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();
  const customFilter = (searchTerm) => {
    let filterCountryLists = countries.filter((x) => {
      if (searchTerm === "") return x;
      return x.name.common.toLowerCase().includes(searchTerm.toLowerCase());
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

  useEffect(() => {
    if (searchParams.get("region")) {
      axios
        .get(
          `https://restcountries.com/v3.1/region/${searchParams.get("region")}`
        )
        .then((res) => {
          setCountries(res.data);
          setfilterCountryLists(res.data);
        });
    } else {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
        setCountries(res.data);
        setfilterCountryLists(res.data);
      });
    }
  }, [searchParams.get("region")]);

  return (
    <HomePageStyle>
      <div className="d-flex justify-content-between ">
        <Searchbar customFilter={customFilter} />
        <RegionFilter />
      </div>
      {CountriesBoard}
    </HomePageStyle>
  );
}

export { HomePage };
