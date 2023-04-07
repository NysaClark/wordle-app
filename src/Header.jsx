import React, {useState} from "react";
import { FiMenu, FiSettings, FiBarChart } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
const Header = () => {
  return (
    <div
      id="header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "black",
        color: "white",
        alignItems: "center",
        padding: "1rem 1rem",
      }}
    >
      <FiMenu
        style={{ width: "1.5em", height: "1.5em", width: "flex-content" }}
      />
      <h1>Wordle</h1>
      <div
        className="icons"
        style={{
          display: "flex",
          width: "1.5em",
          height: "1.5em",
          padding: "0 .4rem",
        }}
      >
        <FaQuestionCircle
          style={{
            display: "block",
            width: "1.5em",
            height: "1.5em",
            padding: "0 .4rem",
          }}
        />
        <BsFillBarChartFill
          style={{
            display: "block",
            width: "1.5em",
            height: "1.5em",
            padding: "0 .4rem",
          }}
        />
        <AiFillSetting
          style={{
            display: "block",
            width: "1.5em",
            height: "1.5em",
            padding: "0 .4rem",
          }}
        />
      </div>
    </div>
  );
};
export default Header;
