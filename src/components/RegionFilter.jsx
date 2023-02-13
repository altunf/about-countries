import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { RegionFilterStyle } from "./styles/region-filter-style";

const regionList = [
  { id: 0, label: "Africa" },
  { id: 1, label: "America" },
  { id: 2, label: "Asia" },
  { id: 3, label: "Europe" },
  { id: 4, label: "Oceania" },
];

function RegionFilter() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();

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
              id={item.id}
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
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
