import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HomePageStyle } from "./styles/home-page-style";

import { Cards } from "../components/Cards";
import { RegionFilter } from "../components/RegionFilter";
import { Searchbar } from "../components/Searchbar";

import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

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

  //

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <HomePageStyle>
      <div className="d-flex justify-content-between ">
        <Searchbar />
        <RegionFilter />
      </div>
      <div>{CountriesBoard}</div>
    </HomePageStyle>
  );
}

export { HomePage };
