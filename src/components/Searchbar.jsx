import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormStyle } from "./styles/searchbar-style";

function Searchbar({ customFilter }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

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

export { Searchbar };
