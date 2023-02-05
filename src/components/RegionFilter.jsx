import React, { useState } from "react";
import { RegionFilterStyle } from "./styles/regionFilter-style";
import { useSearchParams, useNavigate } from "react-router-dom";

import { regionList } from "../services/country";

function RegionFilter() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  return (
    <RegionFilterStyle>
      <header onClick={toggleDropdown}>
        {selectedItem
          ? regionList.find((item) => item.id == selectedItem).label
          : "Filter by Region"}
        <i className={`bi bi-chevron-down icon ${isOpen && "open"}`}></i>
      </header>

      <div className={`dropdown-body ${isOpen && "open"}`}>
        {regionList.map((item, index) => {
          const handleItemClick = (id) => {
            selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
            setSearchParams(`region=${item.label}`);
          };
          return (
            <div
              key={index}
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id == selectedItem && "selected"
                }`}
              ></span>
              {item.label}
            </div>
          );
        })}
        <div className="dropdown-item" onClick={() => navigate(`/`)}>
          All Countries
        </div>
      </div>
    </RegionFilterStyle>
  );
}

export { RegionFilter };
