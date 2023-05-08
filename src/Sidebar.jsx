import React from "react";

const Sidebar = ({ show }) => {
  return (
    <div className={show ? "sidebar show" : "sidebar hidden"}>
      <h2>Games</h2>
      <div className="bottom">
        <code>Made by Nysa Clark</code>
        <code>
          This website is developed only for Educational/Learning purpose
        </code>
      </div>
    </div>
  );
};

export default Sidebar;
