import React, { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      return !state;
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [isDark, dispatch] = useReducer(ThemeReducer, null, () => {
    // Here null represented as false
    const LS_theme = localStorage.getItem("theme");
    return LS_theme ? LS_theme === true : false;
  });

  // Initial render we will create the local storage

  useEffect(() => {
    console.log(isDark.toString());
    localStorage.setItem("theme", isDark.toString());
 
    if (isDark) {
      document.querySelector(".App").classList.add("dark");
    } else {
      document.querySelector(".App").classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
