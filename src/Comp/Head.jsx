import React, { useContext } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "../Context/ThemeProvider";

const Head = () => {
  const { isDark, dispatch } = useContext(ThemeContext);
 
  return (
    <header>
      <h1>TODO</h1>
      <button
        className="btn btn-round"
        onClick={() => dispatch({ type: "toggleTheme" })}
      >
        {isDark ? <BiMoon /> : <BiSun />}
      </button>
    </header>
  );
};

export default Head;
