import React from "react";
import {FaSearch} from "react-icons/fa"

const Search = ({ showNav }) => {
  return (
    <div className="search">
      <input placeholder="search..." />
     
      <FaSearch className="search-icon" />
    </div>
  );
};

export default Search;
