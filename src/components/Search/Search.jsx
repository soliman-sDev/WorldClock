import "./Search.css";
import { useState, useContext } from "react";
import countries from "../Data/data.js";
import ListCard from "../ListCard/ListCard.jsx";
import { DarkModeContext } from "../Provider/AppContext";

function Search() {
  const { darkMode } = useContext(DarkModeContext);
  const [query, setQuery] = useState("");

  const keys = ["code", "name"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div>
      <div className="search">
        <div
          className="search-container"
          style={{ backgroundColor: darkMode ? "#0D0D0D" : "#D4DAE3" }}
        >
          <span className="material-icons search-icon">search</span>
          <input
            type="text"
            placeholder="Search country"
            onChange={(e) => setQuery(e.target.value)}
            style={{
              backgroundColor: darkMode ? "#0D0D0D" : "#D4DAE3",
              color: darkMode ? "#FFFFFF" : "#000000",
            }}
          />
        </div>
      </div>

      <ListCard data={search(countries)} />
    </div>
  );
}

export default Search;
