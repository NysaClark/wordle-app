import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import PlayModal from "./PlayModal";
import Sidebar from "./Sidebar";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showPlay, setShowPlay] = useState(false);

  return (
    <>
      <Sidebar show={show} />
      {showPlay && (
        <PlayModal showPlay={showPlay} setShowPlay={setShowPlay} />
      )}

      <div className="header">
        <FiMenu id="menu-icon" onClick={() => setShow(!show)} />
        <h1>Wordle</h1>
        <div className="icons">
          <FaQuestionCircle onClick={() => setShowPlay(!showPlay)} />
          <BsFillBarChartFill />
          <AiFillSetting />
        </div>
      </div>
    </>
  );
};
export default Header;
