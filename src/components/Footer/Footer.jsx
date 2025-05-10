import { useContext } from "react";
import "./Footer.css";
import { DarkModeContext } from "../Provider/AppContext";

function Footer() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className="footer"
      style={{ backgroundColor: darkMode ? "#0D0D0D" : "#D4DAE3" }}
    >
      <div className="footer-container">
        <div className="copyright">
          <i
            className="fa-regular fa-copyright fa-sm"
            style={{
              color: darkMode ? "#FFFFFF" : "#000000",
              transition: "color 0.3s ease-in-out",
            }}
          ></i>
          <a href="https://soliman.vercel.app/" target="_blank">
            <h4
              style={{
                color: darkMode ? "#FFFFFF" : "#000000",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {" "}
              2025 Soliman Soliman
            </h4>
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/soliman-sDev" target="_blank">
            <i
              style={{
                color: darkMode ? "#FFFFFF" : "#000000",
                transition: "color 0.3s ease-in-out",
              }}
              className="fa-brands fa-github fa-xl"
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/soliman-sdev" target="_blank">
            <i
              style={{
                color: darkMode ? "#FFFFFF" : "#000000",
                transition: "color 0.3s ease-in-out",
              }}
              className="fa-brands fa-linkedin fa-xl"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
