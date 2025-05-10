import "./Mcard.css";
import { useState, useEffect } from "react";
import { CountryContext, DarkModeContext } from "../Provider/AppContext.jsx";
import { useContext } from "react";

function Mcard() {
  const { country } = useContext(CountryContext);
  const { darkMode } = useContext(DarkModeContext);
  const [time, setTime] = useState([]);
  const API = `https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=${country.timezone}`;

  useEffect(() => {
    async function getData() {
      const res = await fetch(API);
      const data = await res.json();
      setTime(data);
    }

    const interval = setInterval(() => {
      getData();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [API]);

  function formatTime() {
    let hour = time.hours;
    const minute = time.minutes;
    const second = time.seconds;
    const merdiiem = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;
    if (hour == null || minute == null || second == null) {
      return `00:00:00`;
    }
    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)} ${merdiiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function formatData() {
    let day = time.day;
    let month = time.monthName;
    let year = time.year;
    let dayName = time.dayofweekName;

    if (day == null || month == null || year == null) {
      return `6 oct 2025`;
    }
    return `${dayName}, ${month} ${day} ${year}`;
  }

  return (
    <div className="main-card">
      <div
        className="card-container"
        style={{ backgroundColor: darkMode ? "#0D0D0D" : "#D4DAE3" }}
      >
        <div className="current-time">
          <h1
            className="clock"
            style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
          >
            {formatTime()}
          </h1>
        </div>
        <div className="clock-info">
          <div className="flag-code">
            <div className="flag">
              <img
                style={{ width: "32px", height: "32px", borderRadius: "50px" }}
                src={`/Flags/${country.code?.toLowerCase()}.svg`}
              ></img>
            </div>
            <div className="country-code">
              <h4></h4>
            </div>
          </div>
          <div className="country-name">
            <h4
              style={{
                color: darkMode ? "#FFFFFF" : "#000000",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {country.name}
            </h4>
          </div>
          <div className="country-zone">
            <h4
              style={{
                color: darkMode ? "#FFFFFF" : "#000000",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {formatData()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mcard;
