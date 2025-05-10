import Navbar from "../navbar/Navbar";
import Mcard from "../MainCard/Mcard";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import { CountryProvider, DarkModeContext } from "../Provider/AppContext";
import { useContext } from "react";
import "./Wrapper.css";

function Wrapper() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className="body"
      style={{ backgroundColor: darkMode ? "#000000" : "#E4EBF5" }}
    >
      <Navbar />
      <CountryProvider>
        <Mcard />
        <Search />
      </CountryProvider>
      <Footer />
    </div>
  );
}

export default Wrapper;
