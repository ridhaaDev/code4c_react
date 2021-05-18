import React from "react";
import {FaSearch} from "react-icons/fa"

const Search = ({ showNav }) => {
  return (
    <div className="search" style={{ display: showNav }}>
      <input placeholder="search..." />
     
      <button> <FaSearch /></button>

      {/* <i class="fas fa-search"></i> */}
    </div>
  );
};

export default Search;
