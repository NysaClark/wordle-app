import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
const Header = () => {
  return (
    <div id="header">
      <FiMenu id="menu-icon" />
      <h1>Wordle</h1>
      <div className="icons">
        <FaQuestionCircle />
        <BsFillBarChartFill />
        <AiFillSetting />
      </div>
    </div>
  );
};
export default Header;
