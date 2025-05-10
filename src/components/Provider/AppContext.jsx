import { createContext, useState } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const CountryContext = createContext();
export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([
    { code: "SY", name: "Syrian Arab Republic", timezone: "Asia/Damascus" },
  ]);
  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
