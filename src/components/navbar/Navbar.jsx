import { useContext } from "react";
import "./Navbar.css";
import { DarkModeContext } from "../Provider/AppContext";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div
        className="nav-container"
        style={{ backgroundColor: darkMode ? "#000000" : "#E4EBF5" }}
      >
        <div className="logo">
          <h1
            style={{
              color: darkMode ? "#fff" : "#000",
              transition: "color 0.3s ease-in-out",
            }}
          >
            World Clock
          </h1>
        </div>
        <div className="icon-container">
          <div className="repo">
            <span>
              <a href="https://github.com/soliman-sDev" target="_blank">
                <i
                  className="fa-brands fa-github fa-xl"
                  style={{
                    color: darkMode ? "#fff" : "#000",
                    transition: "color 0.3s ease-in-out",
                  }}
                ></i>
              </a>
            </span>
          </div>
          <div className="mode">
            {!darkMode ? (
              <span
                id="theme-toggler"
                onClick={() => setDarkMode(!darkMode)}
                className="material-icons"
                style={{ transition: "color 0.3s ease-in-out" }}
              >
                dark_mode
              </span>
            ) : (
              <span
                id="theme-toggler"
                onClick={() => setDarkMode(!darkMode)}
                className="material-icons"
                style={{
                  color: darkMode ? "#fff" : "#000",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                light_mode
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
