import "./Card.css";
import { CountryContext, DarkModeContext } from "../Provider/AppContext";
import { useContext } from "react";
function Card({ zones }) {
  const { darkMode } = useContext(DarkModeContext);
  const { country, setCountry } = useContext(CountryContext);

  return (
    <div
      className="card"
      style={{ backgroundColor: darkMode ? "#0D0D0D" : "#D4DAE3" }}
      onClick={() => setCountry(zones)}
    >
      <div
        className="ccard-container"
        style={{ backgroundColor: darkMode ? "#0D0D0D" : "#D4DAE3" }}
      >
        <img
          style={{ width: "32px", height: "32px", borderRadius: "50px" }}
          src={`/Flags/${zones.code.toLowerCase()}.svg`}
        ></img>
        <h4 style={{ color: "gray" }}>{zones.code}</h4>
      </div>
    </div>
  );
}
export default Card;
