import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FormStyle } from "./styles/search-bar-style";

function SearchBar({ customFilter }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    input !== "" && navigate("/details/" + input);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    customFilter(e.target.value);
  };
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <i className="bi bi-search"></i>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for a country..."
        />
      </div>
    </FormStyle>
  );
}

export { SearchBar };
