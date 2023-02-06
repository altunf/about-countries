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

  let [searchParams, setSearchParams] = useSearchParams();

  const CountriesBoard = (
    <div className="row">
      {countries.map((item, index) => {
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
    if (searchParams.get("name")) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchParams.get("name")}`)
        .then((res) => {
          setCountries(res.data);
        });
    } else if (searchParams.get("region")) {
      axios
        .get(
          `https://restcountries.com/v3.1/region/${searchParams.get("region")}`
        )
        .then((res) => {
          setCountries(res.data);
        });
    } else {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
        setCountries(res.data);
      });
    }
  }, [countries]);

  return (
    <HomePageStyle>
      <div className="d-flex justify-content-between ">
        <Searchbar />
        <RegionFilter />
      </div>
      {CountriesBoard}
    </HomePageStyle>
  );
}

export { HomePage };
