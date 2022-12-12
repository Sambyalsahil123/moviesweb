import React from "react";
import "./dashboard.css";
import Navigation from "../Common/Navigation.jsx";
import Upperslider from "../Common/Upperslider.jsx";
import Cards from "../Cards/Card.jsx";
import FilterNav from "../FilterNav/FilterNav.js";
import JsonData from "../data.json";
import SearchBar from "../Common/SearchBar";

const Dashboard = () => {
  const [query, setQuery] = React.useState("");
  const [user] = React.useState(JSON.parse(localStorage.getItem("userSignUp")));
  return (
    <div className="px-5  p-2">
      <Navigation setQuery={setQuery} />
      <Upperslider />
      <FilterNav />
      {user[0].isAdmin ? <SearchBar setQuery={setQuery} /> : ""}
      <Cards query={query} JsonData={JsonData} />
    </div>
  );
};
export default Dashboard;
