import React from "react";

const SearchBar = ({ setQuery }) => {
  return (
    <>
      <div className="d-flex justify-content-lg-end mb-5">
        <div className="header__form input-group ">
          <div className="fs-4 mt-2">
            <input
              type="text"
              className="header__form-input"
              placeholder="discover"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
