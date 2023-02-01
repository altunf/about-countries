import React, { useEffect, useState } from "react";
import { HomePageStyle } from "./styles/homepage-style";

import { Cards } from "../components/Cards";
import { RegionFilter } from "../components/RegionFilter";
import { Searchbar } from "../components/Searchbar";

import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);

  const CountriesBoard = (
    <div className="row">
      {countries.map((item, index) => {
        return (
          <Cards
            className="col-4"
            key={index}
            flag={item.flags.png}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        );
      })}
    </div>
  );

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

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
