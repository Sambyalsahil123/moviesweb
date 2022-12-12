import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
// import SearchBar from "./SearchBar";

const Navigation = ({ setQuery }) => {
  const navigate = useNavigate();
  const userLogout = () => {
    navigate("/logout");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link to={"/dashboard"} className="navbar-brand text-light fs-3">
            Flix <sub className="text-primary">TV</sub>
          </Link>

          <button
            className="navbar-toggler text-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text_light"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to={"/dashboard"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="#">
                  Pricing plans
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-light"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Catalog
                </Link>
              </li>
              <li className="nav-item fs-5">
                <li
                  role="button"
                  className=" nav-link active text-danger"
                  aria-current="page"
                  onClick={() => navigate("/favourite")}>
                  Favourite
                </li>
              </li>
            </ul>

            {/* <SearchBar setQuery={setQuery} /> */}
            <h2
              className="text-danger mx-3 my-2">
              Ultimate TV show and Movies
            </h2>
            <button
              className="btn btn-outline-light m-2 ml-5 mt-4"
              onClick={userLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;
